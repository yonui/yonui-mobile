import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import { TextAreaItemPropsType } from 'antd-mobile/lib/textarea-item/PropsType'
import Wrapper from '../list-item-wrapper'
import classnames from 'classnames'
interface TextareaProps extends TextAreaItemPropsType, React.defaultProps{
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
  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {
      requiredError: false
    }
  }

  _onBlur = (value: any) => {
    const { required } = this.props
    this.setState({
      requiredError: !!required && !value
    })
  }

  render () {
    const { label, className, style, nid, uitype, required, maxLength, splitLine, rows = 3, errorText, ...other } = this.props
    const { requiredError } = this.state
    const cls = classnames(className, 'yonui-textarea')
    return (
      <Wrapper className={cls} style={style} uitype={uitype} nid={nid} splitLine={splitLine} label={label} required={required} error={requiredError} errorText={errorText}>
        <TextareaItem rows={rows} {...other} count={maxLength} onBlur={this._onBlur}/>
      </Wrapper>
    )
  }
}
