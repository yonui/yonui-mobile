import React, { Component } from 'react'
import { InputItem } from 'antd-mobile'
import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import Wrapper from '../list-item-wrapper'
export interface InputProps extends InputItemPropsType {
  label?: string
  required?: boolean
  splitLine?: boolean
}
export default class Input extends Component<InputProps> {
  constructor (props: InputProps) {
    super(props)
    this.state = {}
  }

  render () {
    const { label, required, splitLine } = this.props
    const requiredCls = required ? 'required' : ''
    return (
      <Wrapper className={`mdf-input ${requiredCls}`} splitLine={splitLine}>
        <InputItem {...this.props}>
          <div className={`form-label ${requiredCls}`}>{label}</div>
        </InputItem>
      </Wrapper>
    )
  }
}
