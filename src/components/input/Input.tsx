import React, { Component } from 'react'
// import { InputItem } from 'antd-mobile'
// import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper from '../list-item-wrapper'
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
  regRule?: string | RegExp
  regRuleText?: string
  check?: boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string}) => void
  onSuccess?: (value: string) => void
}

interface InputState {
  error?: boolean
  errorText?: string
}
export default class Input extends Component<InputProps, InputState> {
  state = {
    error: false,
    errorText: ''
  }

  static defaultProps = {
    // singleLine: false
    // maxLength: 255,
    subuitype: 'text',
    check: true
  }

  getInputProps = () => {
    const { subuitype, onError, onSuccess, check, regRule = '', regRuleText } = this.props
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
    switch (subuitype) {
      case 'idCard': {
        res = {
          ...res,
          text: 'tel',
          pattern: /^[0-9xX]*$/,
          finalPattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:(?:0[1-9])|(?:1[0-2]))(?:(?:[0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          maxLength: 18
        }
        break
      }
      case 'ipAddress': {
        res = {
          ...res,
          text: 'number',
          pattern: /^[0-9.]*$/,
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
          finalPattern: [customReg]
        }
        break
      }
    }
    return res
  }

  render () {
    const { label, required, splitLine, className, singleLine, style, nid, uitype, ...other } = this.props
    const { error, errorText } = this.state
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    return (
      <Wrapper className={cls} style={style} splitLine={splitLine}
        singleLine={singleLine} nid={nid} uitype={uitype}
        label={label} required={required} error={error}
        errorText={errorText}
      >
        <YonuiInput className={inputCls} required={required} {...other} {...inputProps} textAlign={singleLine ? 'right' : 'left'}
        />
      </Wrapper>
    )
  }
}
