import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import { TextAreaItemPropsType } from 'antd-mobile/lib/textarea-item/PropsType'
import Wrapper, { ListItemWrapperProps } from '../list-item-wrapper'
import classnames from 'classnames'
interface TextareaProps extends TextAreaItemPropsType, React.defaultProps, ListItemWrapperProps{
  label?: string
  required?: boolean
  maxLength?: number
  splitLine?: boolean
  errorText?: string
}
interface TextareaState {
  requiredError: boolean
}
export default class MyComponent extends Component<TextareaProps, TextareaState> {
  static defaultProps = {
    errorText: ''
  }

  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {
      requiredError: false
    }
  }

  _onBlur = (value: any) => {
    const { required, onBlur } = this.props
    this.setState({
      requiredError: !!required && !value
    })
    onBlur && onBlur(value)
  }

  render () {
    const { label, className, style, nid, uitype, required, maxLength, splitLine, rows = 3, errorText, onBlur, subLabel, showExtraLabelIcon, ...other } = this.props
    const { requiredError } = this.state
    const cls = classnames(className, 'yonui-textarea')
    return (
      <Wrapper
        className={cls}
        style={style}
        uitype={uitype}
        nid={nid}
        splitLine={splitLine}
        label={label}
        required={required}
        error={requiredError}
        errorText={errorText}
        showExtraLabelIcon={showExtraLabelIcon}
        subLabel={subLabel}
      >
        <TextareaItem rows={rows} {...other} count={maxLength} onBlur={this._onBlur}/>
      </Wrapper>
    )
  }
}
