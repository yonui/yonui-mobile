import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import { TextAreaItemPropsType } from 'antd-mobile/lib/textarea-item/PropsType'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
interface TextareaProps extends TextAreaItemPropsType, React.defaultProps, ListItemWrapperProps{
  label?: string
  required?: boolean
  maxLength?: number
  splitLine?: boolean
  errorText?: string
  disabled?: boolean
  bCanModify?: boolean
  mReadOnly?: boolean
  visible?: boolean
}
interface TextareaState {
  requiredError: boolean
  _value: string
}
export default class MyComponent extends Component<TextareaProps, TextareaState> {
  static defaultProps = {
    errorText: ''
  }

  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {
      _value: this.props.defaultValue || '',
      requiredError: false
    }
  }

  _onChange = (currentValue) => {
    const { onChange, afterChange } = this.props
    const val = afterChange ? afterChange(currentValue) : currentValue
    onChange?.(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (value: any) => {
    const { required, onBlur } = this.props
    this.setState({
      requiredError: !!required && !value
    })
    onBlur && onBlur(value)
  }

  getVal = () => {
    const { defaultValue, value } = this.props
    const { _value } = this.state
    if (value === '' && (defaultValue === '' || defaultValue !== _value)) return ''
    return value?.toString() || _value
  }

  render () {
    const { label, className, mReadOnly, style, nid, uitype, required, maxLength, splitLine, rows = 3, errorText, onBlur, subLabel, showExtraLabelIcon, visible = true, ...other } = this.props
    // other.disabled = other.disabled || other.mReadOnly || (other.bCanModify !== undefined ? !other.bCanModify : other.bCanModify)
    const { requiredError } = this.state
    const cls = classnames(className, 'yonui-textarea')
    const wrapperProps = getListItemProps(this.props, {
      className: cls,
      error: requiredError
    })
    other.value = this.getVal()
    if (!visible) return null
    return (
      <Wrapper {...wrapperProps}>
        <TextareaItem
          editable={!mReadOnly}
          rows={rows}
          {...other}
          count={maxLength}
          onBlur={this._onBlur}
          onChange={this._onChange}
        />
      </Wrapper>
    )
  }
}
