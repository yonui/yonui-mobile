import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile'
import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import './style'
export interface InputProps extends InputItemPropsType {
  label?: string
  required?: boolean
}
export default class Input extends Component<InputProps> {
    constructor(props: InputProps) {
        super(props)
    } 
    render () {
        const { label, required } = this.props
        const requiredCls = required ? 'required' : ''
        return (
            <List className='mdf-input'>
              <InputItem {...this.props}>
                <div className={`form-label ${requiredCls}`}>{label}</div>
              </InputItem>
            </List>
        )
    }
}