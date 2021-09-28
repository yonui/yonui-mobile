import React, { Component } from 'react'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
// import { decodeValue } from '../_utils'
const NumberReg = {
  normal: /^-?0*(\d+\.\d*|[1-9]\d*|0)$|-/, // 基本数值校验
  format: /\d{1,3}(?=(\d{3})+$)/g // 整数匹配千分位
}

const multiply = (numA: number | string, numB: number | string) => {
  return Number(numA) * Number(numB)
}
export interface InputProps extends ListItemWrapperProps {
  maxLength?: number
  mode?: 'normal' | 'percent' | 'permillage' | 'int'
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
  bCanModify?: boolean
  inputBgColor?: string
  bIsNull?: boolean
  scaleValue?: number
  visible?: boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string | number) => void
  onClickClear?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string}) => void
  onSuccess?: (value: string) => void
}

interface InputState {
  check?: boolean
  error?: boolean
  errorText?: string
  _value?: string | number
  _displayValue?: string
  isFocus?: boolean
  _showValue?: string | number
}

export default class Input extends Component<InputProps, InputState> {
  constructor (props: InputProps) {
    super(props)
    this.state = {
      check: this.props.check,
      error: false,
      _value: props.defaultValue?.toString(),
      errorText: '',
      isFocus: false // 记录是否获取焦点
    }
  }

  componentDidMount () {
    if (this.props.model)
      this.props.model.addListener(this);
  }

  componentDidUpdate () {
    if (this.props.model)
      this.props.model.addListener(this);
  }

  componentWillUnmount () {
    if (this.props.model)
      this.props.model.removeListener(this);
  }

  changeValue = (props) => {
    const { _value: stateValue } = this.state
    const { value, mode, prefix, suffix, precision = 2, scaleValue = 1 } = props
    // const _value = value?.toString() || defaultValue?.toString()
    // const _displayValue = formatReg && _value ? decodeValue(_value, formatReg, hiddenChart, replaceChart) : ''
    let preValue: string = ''
    if (value === 0 || value || stateValue) {
      const _precision = mode === 'int' ? 0 : precision
      const _fixValue = multiply(value === 0 ? value : value || stateValue, scaleValue).toFixed(_precision)
      switch (mode) {
        case 'percent': {
          preValue = `${prefix}${_fixValue}%${suffix}`
          break
        }
        case 'permillage': {
          preValue = `${prefix}${_fixValue}‰${suffix}`
          break
        }
        default: {
          preValue = `${prefix}${_fixValue}${suffix}`
          break
        }
      }
    }
    return preValue;
  }

  static defaultProps = {
    // singleLine: false
    // maxLength: 255,
    mode: 'normal',
    check: true,
    prefix: '',
    suffix: '',
    scaleValue: 1,
    visible: true
  }

  _onChange = (val: string) => {
    const value = !/^-$|^0$|\.0*$/.test(`${val}`) ? (Number(val) || '') : val;
    const { onChange } = this.props
    onChange?.(value)
    this.setState({
      _value: value,
      _showValue: value
    })
  }

  _onFocus = (val: string) => {
    const { onFocus } = this.props
    onFocus?.(val)
    this.setState({
      _displayValue: '',
      isFocus: true
    })
  }

  _onBlur = (val: string) => {
    const { onBlur, onChange } = this.props
    if (/\.$/.test(`${val}`)) {
      onChange?.(Number(val) || '')
    }
    onBlur?.(val)
    let _displayValue = this.changeValue(this.props)
    if (!val) _displayValue = ''
    this.setState({
      _displayValue: _displayValue,
      isFocus: false,
      // _value: Number(val) || ''
    })
  }

  _onClickClear = (val: string) => {
    const { onClickClear } = this.props
    onClickClear?.(val)
    this.setState({
      _displayValue: ''
    })
  }

  getInputProps = () => {
    const { onError, onSuccess, mode, regRuleText } = this.props
    const { check } = this.state
    const _onError = (value: string, pattern: { reg?: RegExp, text?: string}) => {
      onError?.(value, pattern)
      this.setState({
        error: check && true,
        errorText: pattern.text
      })
    }
    const _onSuccess = (value: string) => {
      onSuccess?.(value)
      this.setState({
        error: check && false
      })
    }
    let res: any = {
      onSuccess: _onSuccess,
      onError: _onError
    }
    // if (mode === 'int') {
    //   res = Object.assign(res, {
    //     pattern: /^-?(\d*)$/
    //   })
    // }
    switch (mode) {
      case 'percent':
      case 'permillage':
      case 'normal':
      default: {
        res = {
          ...res,
          type: 'text',
          finalPattern: [{
            reg: /^-?(\d+\.\d+|[1-9]\d*|0)$/,
            text: regRuleText
          }],
          maxLength: 18
        }
        break
      }
    }
    return res
  }

  _beforeRender = (val: string | number) => {
    const { thousands, precision = 2 } = this.props
    if (val !== undefined && thousands) {
      const valStr = val?.toString()
      if (valStr && precision === 0) {
        const intReg = /(\D*)(\d*)(\D*)/
        let prefix = ''
        let suffix = ''
        const _valStr = valStr.replace(intReg, (match, p1, p2, p3) => {
          // console.log(p1, p2, p3)
          prefix = p1
          suffix = p3
          return p2
        })
        // console.log('before-render-val', val)
        // console.log('before-render', `${prefix}${_valStr.replace(NumberReg.format, '$&,')}${suffix}`)
        return `${prefix}${_valStr.replace(NumberReg.format, '$&,')}${suffix}`
      }
      const integer = valStr.split('.')[0]
      const decimal = valStr.split('.')[1]
      return `${integer.replace(NumberReg.format, '$&,')}${valStr.includes('.') ? '.' + decimal : ''}`
    }
    return val
  }

  _afterChange = (val: string) => {
    const { thousands } = this.props
    if (!thousands) return val
    return val.replace(/,/g, '')
  }

  checkFn = (value: string, final: boolean) => {
    const { check } = this.state
    if (check) {
      const val = value?.toString()
      const { precision = 2, min = -1 * Number.MAX_VALUE, max = Number.MAX_VALUE, maxLength = 24, mode } = this.props
      const normalCheck = NumberReg.normal.test(val) || !val
      const _precision = mode === 'int' ? 0 : precision
      const precisionCheck = !val?.includes('.') ? true : val?.length - val?.indexOf('.') - 1 <= _precision
      const sizeCheck = !final || !val || Number.isNaN(Number(val)) || (Number(val) >= Number(min) && Number(val) <= Number(max))
      const LengthCheck = maxLength >= (val?.length || 0)
      return normalCheck && precisionCheck && sizeCheck && LengthCheck
    } else {
      return true
    }
  }

  // 输入文字样式
  getInputStyle = (style) => {
    return {
      color: style.color,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle,
      textDecoration: style.textDecoration
    }
  }

  // 外层wrapper样式
  getWrapperStyle = (style) => {
    return {
      ...style,
      color: 'umset',
      fontSize: 'unset',
      fontWeight: 'unset',
      fontStyle: 'unset',
      textDecoration: 'unset'
    }
  }

  render () {
    const { mReadOnly, required, bIsNull, className, singleLine, nid, uitype, onChange, onBlur, onFocus, value, showExtraLabelIcon, inputBgColor, visible, style, ...other } = this.props
    const { error, errorText, _displayValue } = this.state
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    const wrapperProps = getListItemProps(this.props, { className: cls, error, errorText })
    const _required = bIsNull !== undefined ? !bIsNull : required
    const preValue = this.state.isFocus ? value : this.changeValue(this.props);
    const showValue = mReadOnly ? preValue : (this.state.isFocus ? _displayValue || preValue : preValue)
    // console.log('zyh-inputnumber-showValue', showValue, 'props', this.props)
    if (!visible) return null
    // 解决展示数据修改不触发onChange事件的问题
    // if (showValue && showValue != this.state._showValue) {
    //   this._onChange(String(showValue));
    // }
    return (
      <Wrapper {...wrapperProps} style={this.getWrapperStyle(style || {})}>
        <YonuiInput
          isNumber={true}
          className={inputCls}
          required={_required}
          textAlign={singleLine ? 'right' : 'left'}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onClickClear={this._onClickClear}
          value={showValue}
          {...other}
          {...inputProps}
          // style={{ backgroundColor: inputBgColor }}
          inputStyle={this.getInputStyle(style || {})}
          beforeRender={this._beforeRender}
          afterChange={this._afterChange}
          customCheck={this.checkFn}
          mReadOnly={mReadOnly}
        />
      </Wrapper>
    )
  }
}
