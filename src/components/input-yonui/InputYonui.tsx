import React, { Component } from 'react'
import classnames from 'classnames'
interface InputYonuiProps extends React.defaultProps{
  type?: 'text' | 'number' | 'tel'
  pattern?: RegExp // 输入过程中的校验规则
  finalPattern?: RegExp // onBlur时的校验规则
  value?: string
  textAlign?: 'left' | 'right' | 'center'
  placeholder?: string
  maxLength?: number
  inputStyle?: React.CSSProperties
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onError?: (value: string) => void
  onSuccess?: (value: string) => void
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
    _value: '',
    _className: ''
  }

  checkValue = (value: string) => {
    const { maxLength, pattern } = this.props

    if (pattern && !pattern.test(value)) return false
    if (maxLength && value.length > maxLength) return false
    return true
  }

  _onChange = (event: React.ChangeEvent<HTMLInputElement> | '') => {
    const currentValue = event ? event.target.value : ''
    const { onChange, afterChange } = this.props
    const val = afterChange ? afterChange(currentValue) : currentValue
    if (!this.checkValue(val)) {
      return
    }
    onChange && onChange(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { _value } = this.state
    const { finalPattern, onError, onBlur, onSuccess } = this.props
    if (finalPattern && !finalPattern.test(_value)) {
      onError && onError(_value)
      console.warn('the result does not match the rule:', finalPattern.toString())
    } else {
      onSuccess && onSuccess(_value)
    }
    onBlur && onBlur(_value)
    setTimeout(() => {
      this.setState({
        _className: ''
      })
    }, 100)
  }

  _onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props
    onFocus && onFocus(event.target.value)
    this.setState({
      _className: 'yonui-input-focus'
    })
  }

  onClickClear = () => {
    const { onChange } = this.props
    onChange && onChange('')
    this.setState({
      _value: ''
    })
  }

  render () {
    const { className, style, type, value, textAlign, beforeRender, placeholder, inputStyle } = this.props
    const { _value, _className } = this.state
    const val = value || _value
    const displayValue = beforeRender ? beforeRender(val) : val
    const cls = classnames(className, 'yonui-input', {
      [_className]: val.length > 0
    })
    const _inputStyle: React.CSSProperties = { textAlign, ...inputStyle }
    return (
      <div className={cls} style={style}>
        <input className='yonui-input-box' type={type} value={displayValue}
          onChange={this._onChange} onBlur={this._onBlur} style={_inputStyle}
          onFocus={this._onFocus} placeholder={placeholder}
        />
        <div className='yonui-clear' onClick={this.onClickClear}></div>
      </div>
    )
  }
}
