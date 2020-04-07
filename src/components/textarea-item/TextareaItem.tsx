import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import { TextAreaItemPropsType } from 'antd-mobile/lib/textarea-item/PropsType'
import classnames from 'classnames'
interface TextareaProps extends TextAreaItemPropsType, React.defaultProps{
  label?: string
}
export default class MyComponent extends Component<TextareaProps> {
  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {}
  }

  render () {
    const { label, className, style, nid, uitype, ...other } = this.props
    const cls = classnames(className, 'yonui-textarea')
    console.log('label is', label)
    return (
      <div className={cls} style={style} uitype={uitype} nid={nid}>
        <div className='yonui-textarea-label form-label'>{label}</div>
        <TextareaItem {...other}/>
      </div>
    )
  }
}
