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
  regRule?: string | RegExp
  check?: boolean
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onError?: (value: string) => void
  onSuccess?: (value: string) => void
}

interface InputState {
  error?: boolean
}
export default class Input extends Component<InputProps, InputState> {
  state = {
    error: false,
    check: false
  }

  static defaultProps = {
    // singleLine: false
    // maxLength: 255,
    subuitype: 'text'
  }

  getInputProps = () => {
    const { subuitype, onError, onSuccess, check } = this.props
    const _onError = (value: string) => {
      onError && onError(value)
      this.setState({
        error: check && true
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
          finalPattern: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/,
          maxLength: 15
        }
        break
      }
      case 'text':
      default: {
        res = {
          type: 'text'
        }
        break
      }
    }
    return res
  }

  render () {
    const { label, required, splitLine, className, singleLine, style, nid, uitype, ...other } = this.props
    const { error } = this.state
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    return (
      <Wrapper className={cls} style={style} splitLine={splitLine} singleLine={singleLine} nid={nid} uitype={uitype} label={label} required={required} error={error}>
        <YonuiInput className={inputCls} {...other} {...inputProps} textAlign={singleLine ? 'right' : 'left'}
        />
      </Wrapper>
    )
  }
}
