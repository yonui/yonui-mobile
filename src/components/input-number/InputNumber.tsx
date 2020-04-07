import React, { Component } from 'react'
import classnames from 'classnames'
interface InputNumberPorps {
  label?: string
  precision?: number
  type?: 'normal' | 'money' | 'integer'
  min?: number | string
  max?: number | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  thousands?: boolean
  required?: boolean
  defaultValue?: number | string
  value?: number | string
  disabled?: boolean
  placeholder?: string
  autoFill?: boolean
  textAlign?: 'left' | 'center' | 'right'
  inputWrapperWidth?: string
  labelWidth?: string
  onChange?: (value: string) => void
}

interface InputNumberState {
  _value?: string | number
}

const NumberReg = {
  normal: /^-?0*(\d+\.\d*|[1-9]\d*|0)$|-/, // 基本数值校验
  format: /\d{1,3}(?=(\d{3})+$)/g // 整数匹配千分位
}

export default class InputNumber extends Component<InputNumberPorps, InputNumberState> {
  constructor (props: InputNumberPorps) {
    super(props)
    this.state = {
      _value: props.defaultValue
    }
  }

  static defaultProps = {
    precision: 2,
    thousands: true,
    defaultValue: 0,
    textAlign: 'right'
  }

  checkoutNumber = (val: string) => {
    // console.log(val)
    const { precision = 2, min = -1 * Number.MAX_VALUE, max = Number.MAX_VALUE } = this.props
    const normalCheck = NumberReg.normal.test(val) || !val
    const precisionCheck = val.indexOf('.') === -1 ? true : val.length - val.indexOf('.') - 1 <= precision
    const sizeCheck = Number.isNaN(Number(val)) || (Number(val) >= Number(min) && Number(val) <= Number(max))
    console.log(normalCheck, precisionCheck, sizeCheck)
    return normalCheck && precisionCheck && sizeCheck
  }

  // 去除前置0,小数点前无数时加0
  preprocess = (val: string) => {
    let res = val.replace(/^0+([0-9])/, '$1').replace(/^\./, '0.')
    res = res === '-0' ? '0' : res
    switch (res) {
      case '-0': return '0'
      default: return res
    }
  }

  onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const displayValue = event.target.value
    const currentValue = displayValue.replace(/,/g, '')
    const { onChange } = this.props
    const _val = this.preprocess(currentValue)
    if (this.checkoutNumber(_val)) {
      this.setState({
        _value: _val
      })
      onChange && onChange(_val)
    }
  }

  onBlur = () => {
    const { autoFill, precision = 3 } = this.props
    const { _value } = this.state
    console.log(_value)
    if (autoFill) {
      this.setState({
        _value: Number(_value).toFixed(precision)
      })
    }
  }

  formatNumber = (val: string | number) => {
    const valStr = val.toString()
    const integer = valStr.split('.')[0]
    const decimal = valStr.split('.')[1]
    return `${integer.replace(NumberReg.format, '$&,')}${valStr.indexOf('.') > -1 ? '.' + decimal : ''}`
  }

  render () {
    const { label, placeholder, disabled, suffix, prefix, textAlign, inputWrapperWidth, labelWidth, value, thousands, required } = this.props
    const { _value } = this.state
    const displayValue = thousands ? this.formatNumber(value || _value || '') : (value || _value)
    const inputStyle: React.CSSProperties = { textAlign: textAlign }
    const inputWrapperStyle: React.CSSProperties = { width: inputWrapperWidth }
    const labelStyle: React.CSSProperties = { width: labelWidth }
    const labelCls = classnames('yonui-input-number-label', 'form-label', { required })
    return (
      <div className='yonui-input-number'>
        <div className={labelCls} style={labelStyle}>{label}</div>
        <div className='yonui-input-number-wrapper' style={inputWrapperStyle}>
          <div className='yonui-input-number-prefix' >
            {prefix}
          </div>
          <input className='yonui-input-number-input' type='tel' value={displayValue}
            onChange={this.onChangeValue} placeholder={placeholder} disabled={disabled}
            onBlur={this.onBlur} style={inputStyle}
          />
          <div className='yonui-input-number-suffix'>
            {suffix}
          </div>
        </div>
      </div>
    )
  }
}
