import React, { Component } from 'react'
import classnames from 'classnames'
interface InputYonuiProps extends React.defaultProps{
  type?: 'text' | 'number' | 'tel'
  pattern?: RegExp // 输入过程中的校验规则
  finalPattern?: RegExp | Array<{reg: RegExp, text: string}> // onBlur时的校验规则
  value?: string | number
  defaultValue?: string
  textAlign?: 'left' | 'right' | 'center'
  placeholder?: string
  maxLength?: number
  inputStyle?: React.CSSProperties
  required?: boolean
  disabled?: boolean
  customCheck?: (value: string, final?: boolean) => boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string}) => void
  onSuccess?: (value: string) => void
  onClickClear?: (value: string) => void
  beforeRender?: (value: string) => string
  afterChange?: (value: string) => string
}

interface InputYonuiState {
  _value: string
  _className: string
}
export default class InputYonui extends Component<InputYonuiProps, InputYonuiState> {
  static defaultProps = {
    type: 'text'
  }

  state = {
    _value: this.props.defaultValue || '',
    _className: ''
  }

  checkValue = (value: string, final?: boolean) => {
    const { maxLength, pattern, onError, finalPattern, onSuccess, required, customCheck } = this.props
    if (customCheck && !customCheck(value, false)) {
      console.log('customCheck error', value)
      return false
    }
    if (pattern && !pattern.test(value)) {
      console.log('pattern error')
      return false
    }
    if (maxLength && value.length > maxLength) {
      console.log('length error')
      return false
    }
    if (final) {
      if (customCheck && !customCheck(value, true)) {
        console.log('final customCheck error', value)
        onError && onError(value, { text: '' })
        return false
      }
      const _finalPattern = finalPattern && !Array.isArray(finalPattern) ? [{ reg: finalPattern }] : finalPattern
      if (_finalPattern && value) {
        for (let i = 0; i < _finalPattern.length; i++) {
          if (!_finalPattern[i].reg.test(value)) {
            onError && onError(value, _finalPattern[i])
            console.log('final pattern error')
            return false
          }
        }
      }
      if (!value && required) {
        onError && onError(value, { text: '' })
        console.log('require error')
        return false
      }
      onSuccess && onSuccess(value)
    }
    return true
  }

  _onChange = (event: React.ChangeEvent<HTMLInputElement> | '') => {
    const currentValue = event ? event.target.value : ''
    const { onChange, afterChange } = this.props
    const val = afterChange ? afterChange(currentValue) : currentValue
    if (!this.checkValue(val)) {
      console.log('error when check')
      return
    }
    onChange && onChange(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (event?: React.FocusEvent<HTMLInputElement>) => {
    const { _value } = this.state
    const { onBlur } = this.props
    onBlur && onBlur(_value)
    if (this.checkValue(_value, true)) {
      setTimeout(() => {
        this.setState({
          _className: ''
        })
      }, 100)
    }
  }

  _onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props
    onFocus && onFocus(event.target.value)
    this.setState({
      _className: 'yonui-input-focus'
    })
  }

  _onClickClear = () => {
    const { onChange, onClickClear } = this.props
    const { _value } = this.state
    onChange && onChange('')
    onClickClear && onClickClear(_value)
    this.setState({
      _value: ''
    })
    this.checkValue('', true)
  }

  render () {
    const { className, style, type, value, textAlign, beforeRender, placeholder, inputStyle, disabled } = this.props
    const { _value, _className } = this.state
    const val = value?.toString() || _value
    const displayValue = beforeRender ? beforeRender(val) : val
    const cls = classnames(className, 'yonui-input', {
      [_className]: val.length > 0
    })
    const _inputStyle: React.CSSProperties = { textAlign, ...inputStyle }
    return (
      <div className={cls} style={style}>
        <input
          className='yonui-input-box'
          type={type}
          value={displayValue}
          onChange={this._onChange}
          onBlur={this._onBlur}
          style={_inputStyle}
          onFocus={this._onFocus}
          placeholder={placeholder}
          disabled={disabled}
        />
        <div className='yonui-clear' onClick={this._onClickClear} />
      </div>
    )
  }
}
