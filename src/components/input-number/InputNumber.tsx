// import React, { Component } from 'react'
// import classnames from 'classnames'
// import Wrapper from '../list-item-wrapper'
// import Input from '../input-yonui'
// interface InputNumberPorps extends React.defaultProps{
//   label?: string
//   precision?: number
//   type?: 'normal' | 'money' | 'percent' | 'permillage'
//   min?: number | string
//   max?: number | string
//   prefix?: React.ReactNode
//   suffix?: React.ReactNode
//   thousands?: boolean
//   required?: boolean
//   defaultValue?: number | string
//   value?: number | string
//   disabled?: boolean
//   placeholder?: string
//   autoFill?: boolean
//   textAlign?: 'left' | 'center' | 'right' | ''
//   inputWrapperWidth?: string
//   singleLine?: boolean
//   splitLine?: boolean
//   maxLength?: number
//   onChange?: (value: string) => void
// }

// interface InputNumberState {
//   _value?: string | number
// }

// const NumberReg = {
//   normal: /^-?0*(\d+\.\d*|[1-9]\d*|0)$|-/, // 基本数值校验
//   format: /\d{1,3}(?=(\d{3})+$)/g // 整数匹配千分位
// }

// export default class InputNumber extends Component<InputNumberPorps, InputNumberState> {
//   constructor (props: InputNumberPorps) {
//     super(props)
//     this.state = {
//       _value: props.defaultValue
//     }
//   }

//   static defaultProps = {
//     precision: 2,
//     thousands: true,
//     defaultValue: 0,
//     textAlign: '',
//     singleLine: false
//   }

//   checkoutNumber = (val: string) => {
//     // console.log(val)
//     const { precision = 2, min = -1 * Number.MAX_VALUE, max = Number.MAX_VALUE, maxLength = 10 } = this.props
//     const normalCheck = NumberReg.normal.test(val) || !val
//     const precisionCheck = val.indexOf('.') === -1 ? true : val.length - val.indexOf('.') - 1 <= precision
//     const sizeCheck = Number.isNaN(Number(val)) || (Number(val) >= Number(min) && Number(val) <= Number(max))
//     const LengthCheck = maxLength >= val.length
//     return normalCheck && precisionCheck && sizeCheck && LengthCheck
//   }

//   // 去除前置0,小数点前无数时加0
//   preprocess = (val: string) => {
//     let res = val.replace(/^0+([0-9])/, '$1').replace(/^\./, '0.')
//     res = res === '-0' ? '0' : res
//     switch (res) {
//       case '-0': return '0'
//       default: return res
//     }
//   }

//   onChangeValue = (value: string) => {
//     const displayValue = value
//     const currentValue = displayValue.replace(/,/g, '')
//     const { onChange } = this.props
//     const _val = this.preprocess(currentValue)
//     if (this.checkoutNumber(_val)) {
//       this.setState({
//         _value: _val
//       })
//       onChange && onChange(_val)
//     }
//   }

//   onBlur = () => {
//     const { autoFill, precision = 2 } = this.props
//     const { _value } = this.state
//     if (autoFill) {
//       this.setState({
//         _value: Number(_value).toFixed(precision)
//       })
//     }
//   }

//   formatNumber = (val: string | number) => {
//     const { thousands } = this.props
//     const valStr = val.toString()
//     let res = valStr
//     if (thousands) {
//       const integer = valStr.split('.')[0]
//       const decimal = valStr.split('.')[1]
//       res = `${integer.replace(NumberReg.format, '$&,')}${valStr.indexOf('.') > -1 ? '.' + decimal : ''}`
//     }
//     // switch (type) {
//     //   case 'percent': {
//     //     res += '%'
//     //     break
//     //   }
//     //   case 'permillage': {
//     //     res += '‰'
//     //     break
//     //   }
//     //   default: break
//     // }
//     return res
//   }

//   render () {
//     const { label, placeholder, disabled, suffix, prefix, textAlign, inputWrapperWidth, className, value, required, singleLine, splitLine, nid, uitype } = this.props
//     const { _value } = this.state
//     const displayValue = this.formatNumber(value || _value || '')
//     const _textAlign = singleLine ? (textAlign || 'right') : (textAlign || 'left')
//     const inputStyle: React.CSSProperties = { textAlign: _textAlign }
//     const inputWrapperStyle: React.CSSProperties = { width: inputWrapperWidth }
//     const labelCls = classnames('yonui-input-number-label')
//     const cls = classnames('yonui-input-number', className)
//     return (
//       <Wrapper className={cls} splitLine={splitLine} nid={nid} uitype={uitype} labelCls={labelCls} label={label} singleLine={singleLine} required={required}>
//         <div className='yonui-input-number-wrapper' style={inputWrapperStyle}>
//           {prefix && <div className='yonui-input-number-prefix' >
//             {prefix}
//           </div>}
//           {/* <input className='yonui-input-number-input' type='tel' value={displayValue}
//             onChange={this.onChangeValue} placeholder={placeholder} disabled={disabled}
//             onBlur={this.onBlur} style={inputStyle}
//           /> */}
//           <Input className='yonui-input-number-input' type='tel' value={displayValue}
//             onChange={this.onChangeValue} placeholder={placeholder} disabled={disabled}
//             onBlur={this.onBlur} style={inputStyle} required={required} textAlign={singleLine ? 'right' : 'left'}
//             // afterChange={this.afterChange}
//           />
//           {suffix && <div className='yonui-input-number-suffix'>
//             {suffix}
//           </div>}
//         </div>
//       </Wrapper>
//     )
//   }
// }

import React, { Component } from 'react'
// import { InputItem } from 'antd-mobile'
// import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper from '../list-item-wrapper'
import { decodeValue } from '../_utils'
const NumberReg = {
  normal: /^-?0*(\d+\.\d*|[1-9]\d*|0)$|-/, // 基本数值校验
  format: /\d{1,3}(?=(\d{3})+$)/g // 整数匹配千分位
}
export interface InputProps extends React.defaultProps {
  label?: string
  required?: boolean
  splitLine?: boolean
  className?: string
  style?: React.CSSProperties
  singleLine?: boolean
  maxLength?: number
  mode?: 'normal' | 'percent' | 'permillage'
  value?: string | number
  defaultValue?: string | number
  regRule?: string | RegExp
  regRuleText?: string
  check?: boolean
  precision?: number
  formatReg?: string
  hiddenChart?: '*'
  replaceChart?: '#'
  checkMask?: string
  placeholder?: string
  min?: number | string
  max?: number | string
  suffix?: string
  prefix?: string
  thousands?: boolean
  disabled?: boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onClickClear?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string}) => void
  onSuccess?: (value: string) => void
}

interface InputState {
  error?: boolean
  errorText?: string
  _value?: string
  _displayValue?: string
}
export default class Input extends Component<InputProps, InputState> {
  constructor (props: InputProps) {
    super(props)
    const { value, formatReg, hiddenChart, replaceChart, defaultValue } = props
    const _value = value?.toString() || defaultValue?.toString()
    const _displayValue = formatReg && _value ? decodeValue(_value, formatReg, hiddenChart, replaceChart) : ''
    this.state = {
      error: false,
      errorText: '',
      _value: _value || '',
      _displayValue: _displayValue
    }
  }

  static defaultProps = {
    // singleLine: false
    // maxLength: 255,
    mode: 'normal',
    check: true,
    prefix: '',
    suffix: ''
  }

  _onChange = (val: string) => {
    const { onChange } = this.props
    console.log('onChange ', val)
    onChange && onChange(val)
    this.setState({
      _value: val
    })
  }

  _onFocus = (val: string) => {
    const { onFocus } = this.props
    onFocus && onFocus(val)
    this.setState({
      _displayValue: ''
    })
  }

  _onBlur = (val: string) => {
    const { onBlur, value, mode, precision = 2, prefix, suffix } = this.props
    const { _value: stateValue } = this.state
    onBlur && onBlur(val)
    const _value = Number(value || stateValue).toFixed(precision) // value?.toString() || stateValue?.toString()
    let _displayValue: string = ''
    switch (mode) {
      case 'percent': {
        _displayValue = `${prefix}${_value}${suffix}%`
        break
      }
      case 'permillage': {
        _displayValue = `${prefix}${_value}${suffix}‰`
        break
      }
      default: {
        _displayValue = `${prefix}${_value}${suffix}`
        break
      }
    }
    if (!val) _displayValue = ''
    this.setState({
      _displayValue: _displayValue
    })
  }

  _onClickClear = (val: string) => {
    const { onClickClear } = this.props
    onClickClear && onClickClear(val)
    this.setState({
      _displayValue: ''
    })
  }

  getInputProps = () => {
    const { onError, onSuccess, check, mode } = this.props
    const _onError = (value: string, pattern: { reg?: RegExp, text?: string}) => {
      onError && onError(value, pattern)
      this.setState({
        error: check && true,
        errorText: pattern.text
      })
    }
    const _onSuccess = (value: string) => {
      onSuccess && onSuccess(value)
      this.setState({
        error: check && false
      })
    }
    let res: any = {
      onSuccess: _onSuccess,
      onError: _onError
    }
    switch (mode) {
      case 'percent':
      case 'permillage':
      case 'normal':
      default: {
        res = {
          ...res,
          type: 'tel',
          finalPattern: /^-?(\d+\.\d+|[1-9]\d*|0)$/,
          maxLength: 18
        }
        break
      }
    }
    return res
  }

  _beforeRender = (val: string | number) => {
    const { thousands } = this.props
    if (!thousands) return val
    const valStr = val?.toString()
    const integer = valStr.split('.')[0]
    const decimal = valStr.split('.')[1]
    return `${integer.replace(NumberReg.format, '$&,')}${valStr.indexOf('.') > -1 ? '.' + decimal : ''}`
  }

  _afterChange = (val: string) => {
    const { thousands } = this.props
    if (!thousands) return val
    return val.replace(/,/g, '')
  }

  checkFn = (value: string) => {
    const val = value?.toString()
    const { precision = 2, min = -1 * Number.MAX_VALUE, max = Number.MAX_VALUE, maxLength = 24 } = this.props
    console.log(val, '---val', Number(min), Number(max))
    const normalCheck = NumberReg.normal.test(val) || !val
    const precisionCheck = val.indexOf('.') === -1 ? true : val.length - val.indexOf('.') - 1 <= precision
    const sizeCheck = Number.isNaN(Number(val)) || (Number(val) >= Number(min) && Number(val) <= Number(max))
    const LengthCheck = maxLength >= val.length
    console.log(normalCheck, precisionCheck, sizeCheck, LengthCheck)
    return normalCheck && precisionCheck && sizeCheck && LengthCheck
  }

  render () {
    const { label, required, splitLine, className, singleLine, style, nid, uitype, onChange, onBlur, onFocus, value, maxLength, ...other } = this.props
    const { error, errorText, _displayValue } = this.state
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    return (
      <Wrapper className={cls} style={style} splitLine={splitLine}
        singleLine={singleLine} nid={nid} uitype={uitype}
        label={label} required={required} error={error}
        errorText={errorText}
      >
        <YonuiInput className={inputCls} required={required} textAlign={singleLine ? 'right' : 'left'}
          onBlur={this._onBlur} onChange={this._onChange} onFocus={this._onFocus} onClickClear={this._onClickClear}
          value={ _displayValue || value} {...other} {...inputProps}
          beforeRender={this._beforeRender} afterChange={this._afterChange} customCheck={this.checkFn}
        />
      </Wrapper>
    )
  }
}
