import React, { Component } from 'react'
import classnames from 'classnames'
interface InputYonuiProps extends React.defaultProps{
  type?: 'text' | 'number' | 'tel'
  pattern?: RegExp // 输入过程中的校验规则
  finalPattern?: RegExp // onBlur时的校验规则
  value?: string
  textAlign?: 'left' | 'right' | 'center'
  onChange?: (value?: string) => void
  onError?: (value?: string) => void
  beforeRender?: (value: string) => string
  afterChange?: (value: string) => string
}

interface InputYonuiState {
  _value: string
}
export default class InputYonui extends Component<InputYonuiProps, InputYonuiState> {
  static defaultProps = {
    type: 'text'
  }

  state = {
    _value: ''
  }

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value
    const { onChange, pattern, afterChange } = this.props
    const val = afterChange ? afterChange(currentValue) : currentValue
    if (pattern && !pattern.test(val)) {
      return
    }
    onChange && onChange(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { _value } = this.state
    const { finalPattern, onError } = this.props
    if (finalPattern && !finalPattern.test(_value)) {
      onError && onError(_value)
      console.warn('the result does not match the rule:', finalPattern.toString())
    }
  }

  render () {
    const { className, style, type, value, textAlign, beforeRender } = this.props
    const { _value } = this.state
    const val = value || _value
    const displayValue = beforeRender ? beforeRender(val) : val
    const cls = classnames(className, 'yonui-input')
    const inputStyle: React.CSSProperties = { textAlign }
    return (
      <div className={cls} style={style}>
        <input className='yonui-input-box' type={type} value={displayValue} onChange={this._onChange} onBlur={this._onBlur} style={inputStyle}/>
      </div>
    )
  }
}
