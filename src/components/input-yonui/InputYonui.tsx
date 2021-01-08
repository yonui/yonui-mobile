import React, { Component } from 'react'
import classnames from 'classnames'
interface InputYonuiProps extends React.defaultProps {
  type?: 'text' | 'number' | 'tel' | 'password'
  pattern?: RegExp // 输入过程中的校验规则
  finalPattern?: RegExp | Array<{ reg: RegExp, text: string }> // onBlur时的校验规则
  value?: string | number
  defaultValue?: string
  textAlign?: 'left' | 'right' | 'center'
  placeholder?: string
  maxLength?: number
  inputStyle?: React.CSSProperties
  required?: boolean
  bCanModify?: boolean
  disabled?: boolean
  mReadOnly?: boolean
  check?: boolean
  customCheck?: (value: string, final?: boolean) => boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string }) => void
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
    _value: this.props.defaultValue,
    _className: ''
  }

  checkValue = (value: string, final?: boolean) => {
    const { maxLength, pattern, onError, finalPattern, onSuccess, required, customCheck, check } = this.props
    if (check != undefined && !check) return true
    if (customCheck && !customCheck(value, false)) {
      console.log('customCheck error', value)
      return false
    }
    if (pattern && !pattern.test(value)) {
      console.log('pattern error')
      return false
    }
    if (maxLength && value?.length > maxLength) {
      console.log('length error')
      return false
    }
    if (final) {
      if (customCheck && !customCheck(value, true)) {
        console.log('final customCheck error', value)
        onError?.(value, { text: '' })
        return false
      }
      const _finalPattern: any = finalPattern && !Array.isArray(finalPattern) ? [{ reg: finalPattern }] : finalPattern
      if (_finalPattern && value) {
        for (let i = 0; i < _finalPattern.length; i++) {
          if (!_finalPattern[i].reg.test(value)) {
            onError?.(value, _finalPattern[i])
            console.log('final pattern error')
            return false
          }
        }
      }
      if (!value && required) {
        onError?.(value, { text: '' })
        console.log('require error')
        return false
      }
      onSuccess?.(value)
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
    onChange?.(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (event?: React.FocusEvent<HTMLInputElement>) => {
    const { _value } = this.state
    const { onBlur } = this.props
    onBlur?.(_value)
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
    onFocus?.(event.target.value)
    this.setState({
      _className: 'yonui-input-focus'
    })
  }

  formatValue = (value: string) => {
    let valueObj
    try {
      valueObj = JSON.parse(value)
    } catch (error) {
      valueObj = {
        displayValue: value
      }
    }
    return valueObj
  }

  _onClickClear = () => {
    const { onChange, onClickClear } = this.props
    const { _value } = this.state
    onChange?.('')
    onClickClear?.(_value)
    this.setState({
      _value: ''
    })
    this.checkValue('', true)
  }

  getVal = (value, _value) => {
    const { defaultValue } = this.props
    // console.log('------inputBox-getVal--------\n', 'value', value)
    // console.log('_value', _value)
    // console.log('defaultValue', defaultValue)
    if (value === '' && (defaultValue === '' || defaultValue !== _value)) return ''
    return value?.toString() || _value
  }

  render () {
    const { className, style, type, value, textAlign, beforeRender, placeholder, inputStyle, bCanModify, disabled, mReadOnly } = this.props
    const { _value, _className } = this.state
    const val = this.getVal(value, _value)
    const displayVal = beforeRender ? beforeRender(val) : val
    // 兼容处理单据列表上数据是JOSN对象的问题，统一取对象里的displayValue字段
    const displayValue = this.formatValue(displayVal).displayValue || displayVal
    // 兼容处理单据列表不可编辑是不显示背景提示的问题，或者说不可编辑就不用提示
    const displayPlaceholder = disabled || mReadOnly ? '' : placeholder
    const cls = classnames(className, 'yonui-input', {
      [_className]: val?.length > 0
    })
    const _inputStyle: React.CSSProperties = { textAlign, ...inputStyle }
    // console.log('-------inputBox-render---------\n', 'val', val)
    // console.log('displayVal', displayVal)
    // console.log('displayValue', displayValue)
    return (
      <div className={cls} style={style}>
        <input
          className='yonui-input-box'
          type={type}
          value={displayValue}
          onChange={this._onChange}
          onBlur={this._onBlur}
          style={_inputStyle}
          onFocus={!mReadOnly && this._onFocus}
          placeholder={displayPlaceholder}
          readOnly={mReadOnly}
          disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
        />
        <div className='yonui-clear' onClick={this._onClickClear} />
      </div>
    )
  }
}
