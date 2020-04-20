import React, { Component } from 'react'
// import { InputItem } from 'antd-mobile'
// import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper from '../list-item-wrapper'
import { decodeValue } from '../_utils'
export interface InputProps extends React.defaultProps {
  label?: string
  required?: boolean
  splitLine?: boolean
  className?: string
  style?: React.CSSProperties
  singleLine?: boolean
  maxLength?: number
  subuitype?: 'text' | 'idCard' | 'email' | 'ipAddress' | 'bankCard16' | 'bankCard19' | 'customized'
  defaultValue?: string
  value?: string
  regRule?: string | RegExp
  regRuleText?: string
  check?: boolean
  formatReg?: string
  hiddenChart?: '*'
  replaceChart?: '#'
  checkMask?: string
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
    const _value = value || defaultValue
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
    subuitype: 'text',
    check: true
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
    const { onBlur, value, formatReg, hiddenChart, replaceChart } = this.props
    const { _value: stateValue } = this.state
    onBlur && onBlur(val)
    const _value = value || stateValue
    const _displayValue = _value && formatReg ? decodeValue(_value, formatReg, hiddenChart, replaceChart) : ''
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
    const { subuitype, onError, onSuccess, check, regRule = '', regRuleText, checkMask } = this.props
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
    const customReg = {
      reg: new RegExp(regRule),
      text: regRuleText
    }
    let customPattern: RegExp | null
    try {
      customPattern = checkMask ? new RegExp(checkMask) : null
    } catch {
      customPattern = null
    }
    switch (subuitype) {
      case 'idCard': {
        res = {
          ...res,
          type: 'tel',
          pattern: customPattern || /^[0-9xX]*$/,
          finalPattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:(?:0[1-9])|(?:1[0-2]))(?:(?:[0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          maxLength: 18
        }
        break
      }
      case 'ipAddress': {
        res = {
          ...res,
          type: 'number',
          pattern: customPattern || /^[0-9.]*$/,
          finalPattern: [
            {
              reg: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/,
              text: ''
            },
            customReg
          ],
          maxLength: 15
        }
        break
      }
      case 'text':
      default: {
        res = {
          ...res,
          type: 'text',
          finalPattern: [customReg],
          pattern: customPattern
        }
        break
      }
    }
    return res
  }

  render () {
    const { label, required, splitLine, className, singleLine, style, nid, uitype, onChange, onBlur, onFocus, value, ...other } = this.props
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
        />
      </Wrapper>
    )
  }
}
