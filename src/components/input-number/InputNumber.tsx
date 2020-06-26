import React, { Component } from 'react'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import { decodeValue } from '../_utils'
const NumberReg = {
  normal: /^-?0*(\d+\.\d*|[1-9]\d*|0)$|-/, // 基本数值校验
  format: /\d{1,3}(?=(\d{3})+$)/g // 整数匹配千分位
}

const multiply = (numA: number | string, numB: number | string) => {
  return Number(numA) * Number(numB)
}
export interface InputProps extends ListItemWrapperProps {
  maxLength?: number
  mode?: 'normal' | 'percent' | 'permillage'
  subuitype?: string
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
  inputBgColor?: string
  bIsNull?: boolean
  scaleValue?: number
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
    const { value, formatReg, hiddenChart, replaceChart, defaultValue, prefix, suffix, precision = 2, subuitype, scaleValue } = props
    const _value = value?.toString() || defaultValue?.toString()
    const _displayValue = formatReg && _value ? decodeValue(_value, formatReg, hiddenChart, replaceChart) : ''
    const _precision = subuitype === 'int' ? 0 : precision
    const _fixValue = multiply(_displayValue || value, scaleValue).toFixed(_precision) // value?.toString() || stateValue?.toString()

    const preValue = `${prefix}${_fixValue}${suffix}`;
    this.state = {
      error: false,
      errorText: '',
      _value: _value || '',
      _displayValue: preValue
    }
  }

  static defaultProps = {
    // singleLine: false
    // maxLength: 255,
    mode: 'normal',
    check: true,
    prefix: '',
    suffix: '',
    scaleValue: 1
  }

  _onChange = (val: string) => {
    const { onChange } = this.props
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
    const { onBlur, value, mode, precision = 2, prefix, suffix, scaleValue, subuitype } = this.props
    const { _value: stateValue } = this.state
    onBlur && onBlur(val)
    const _precision = subuitype === 'int' ? 0 : precision
    const _value = multiply(value || stateValue, scaleValue).toFixed(_precision) // value?.toString() || stateValue?.toString()
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
    const { onError, onSuccess, check, mode, subuitype } = this.props
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
    if (subuitype === 'int') {
      res = Object.assign(res, {
        pattern: /^-?(\d+)$/
      })
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
    return `${integer.replace(NumberReg.format, '$&,')}${valStr.includes('.') ? '.' + decimal : ''}`
  }

  _afterChange = (val: string) => {
    const { thousands } = this.props
    if (!thousands) return val
    return val.replace(/,/g, '')
  }

  checkFn = (value: string, final: boolean) => {
    const val = value?.toString()
    const { precision = 2, min = -1 * Number.MAX_VALUE, max = Number.MAX_VALUE, maxLength = 24, subuitype } = this.props
    const normalCheck = NumberReg.normal.test(val) || !val
    const _precision = subuitype === 'int' ? 0 : precision
    const precisionCheck = !val.includes('.') ? true : val.length - val.indexOf('.') - 1 <= _precision
    const sizeCheck = !final || !val || Number.isNaN(Number(val)) || (Number(val) >= Number(min) && Number(val) <= Number(max))
    const LengthCheck = maxLength >= val.length
    return normalCheck && precisionCheck && sizeCheck && LengthCheck
  }

  render () {
    const { required, bIsNull, className, singleLine, nid, uitype, onChange, onBlur, onFocus, value, showExtraLabelIcon, inputBgColor, ...other } = this.props
    const { error, errorText, _displayValue } = this.state
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    const wrapperProps = getListItemProps(this.props, {className: cls, error, errorText})
    const _required = bIsNull !== undefined ? bIsNull : required
    return (
      <Wrapper {...wrapperProps}>
        <YonuiInput
          className={inputCls}
          required={_required}
          textAlign={singleLine ? 'right' : 'left'}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onClickClear={this._onClickClear}
          value={_displayValue || value}
          {...other}
          {...inputProps}
          style={{ backgroundColor: inputBgColor }}
          beforeRender={this._beforeRender}
          afterChange={this._afterChange}
          customCheck={this.checkFn}
        />
      </Wrapper>
    )
  }
}
