import React, { Component } from 'react'
// import { InputItem } from 'antd-mobile'
// import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import YonuiInput from '../input-yonui'
import classnames from 'classnames'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import { decodeValue } from '../_utils'
export interface InputProps extends ListItemWrapperProps {
  subuitype?: 'text' | 'password' | 'idCard' | 'email' | 'ipAddress' | 'bankCard16' | 'bankCard19' | 'customized'
  defaultValue?: string
  value?: string
  regRule?: string | RegExp
  regRuleText?: string
  check?: boolean
  formatReg?: string
  hiddenChart?: '*'
  replaceChart?: '#'
  checkMask?: string
  inputStyle?: React.CSSProperties
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onClickClear?: (value: string) => void
  onError?: (value: string, pattern: { reg?: RegExp, text?: string }) => void
  onSuccess?: (value: string) => void
  visible?: boolean
  model?: any
}

interface InputState {
  error?: boolean
  errorText?: string
  _value?: string
  _displayValue?: string
}
class Input extends Component<InputProps, InputState> {
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
    textCenter: false,
    check: true,
    visible: true
  }

  _onChange = (val: string) => {
    const { onChange } = this.props
    onChange?.(val)
    this.setState({
      _value: val
    })
  }

  _onFocus = (val: string) => {
    const { onFocus } = this.props
    onFocus?.(val)
    this.setState({
      _displayValue: ''
    })
  }

  _onBlur = (val: string) => {
    const { onBlur, value, formatReg, hiddenChart, replaceChart } = this.props
    const { _value: stateValue } = this.state
    onBlur?.(val)
    const _value = value || stateValue
    const _displayValue = _value && formatReg ? decodeValue(_value, formatReg, hiddenChart, replaceChart) : ''
    this.setState({
      _displayValue: _displayValue
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
    const { subuitype, onError, onSuccess, check, regRule = '', regRuleText, checkMask } = this.props
    const _onError = (value: string, pattern: { reg?: RegExp, text?: string }) => {
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

    /**
     * 用户自定义的最终校验规则
     */
    const customReg = {
      reg: new RegExp(regRule),
      text: regRuleText
    }

    /**
     * 用户自定义的中间校验规则
     */
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
          type: 'text',
          pattern: customPattern || /^[0-9xX]*$/,
          finalPattern: [
            {
              reg: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:(?:0[1-9])|(?:1[0-2]))(?:(?:[0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
              text: ''
            },
            customReg
          ],
          maxLength: 18
        }
        break
      }
      case 'ipAddress': {
        res = {
          ...res,
          type: 'text',
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
      case 'bankCard16': {
        res = {
          ...res,
          type: 'number',
          pattern: customPattern || /^[0-9]*$/,
          finalPattern: [
            {
              reg: /^\d{16}$/,
              text: ''
            },
            customReg
          ],
          maxLength: 16
        }
        break
      }
      case 'bankCard19': {
        res = {
          ...res,
          type: 'number',
          pattern: customPattern || /^[0-9]*$/,
          finalPattern: [
            {
              reg: /^\d{19}$/,
              text: ''
            },
            customReg
          ],
          maxLength: 19
        }
        break
      }
      case 'password':
        res = {
          ...res,
          type: 'password',
          finalPattern: [customReg],
          pattern: customPattern
        }
        break
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
    const { required, className, singleLine, inputStyle, onChange, onBlur, onFocus, value, model, style, visible, ...other } = this.props
    const { error, errorText, _displayValue } = this.state
    const cls = classnames('mdf-input', className)
    const textAlign = singleLine && this.props.singleAlignType && this.props.singleAlignType === 'right' ? 'right' : 'left'
    const inputCls = classnames('mdf-input-content')
    const inputProps = this.getInputProps()
    const bIsNull = model?._get_data('bIsNull')
    const wrapperProps = getListItemProps(this.props, { error, errorText, className: cls, required: bIsNull === undefined ? undefined : !bIsNull })
    // if (bIsNull !== undefined) wrapperProps.notRequired = undefined
    if (!visible) return null
    return (
      <Wrapper {...wrapperProps}>
        <YonuiInput
          className={inputCls}
          textAlign={textAlign}
          required={required}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onClickClear={this._onClickClear}
          value={_displayValue || value}
          style={inputStyle}
          {...other}
          {...inputProps}
        />
      </Wrapper>
    )
  }
}
export default Input
