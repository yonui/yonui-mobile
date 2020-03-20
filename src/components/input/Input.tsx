import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile'
import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
export interface InputProps extends InputItemPropsType {
  label?: string
  required?: boolean
}
export default class Input extends Component<InputProps> {
  constructor (props: InputProps) {
    super(props)
    this.state = {}
  }

  render () {
    const { label, required } = this.props
    const requiredCls = required ? 'required' : ''
    return (
      <List className={`mdf-input ${requiredCls}`}>
        <InputItem {...this.props}>
          <div className={`form-label ${requiredCls}`}>{label}</div>
        </InputItem>
      </List>
    )
  }
}
