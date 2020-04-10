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
}
export default class MyComponent extends Component<TextareaProps> {
  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {}
  }

  render () {
    const { label, className, style, nid, uitype, required, maxLength, splitLine, ...other } = this.props
    const cls = classnames(className, 'yonui-textarea')
    const labelCls = classnames('yonui-textarea-label', 'form-label', { required })
    return (
      <Wrapper className={cls} style={style} uitype={uitype} nid={nid} splitLine={splitLine}>
        <div className={labelCls}>{label}</div>
        <TextareaItem {...other} count={maxLength}/>
      </Wrapper>
    )
  }
}
