import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile'
import './style'
export default class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    } 
    onChange = () => {
      const { onChange } = this.props;
      onChange && onChange()
    }
    onBlur = () => {
      const { onBlur } = this.props;
      onBlur && onBlur()
    }
    onFocus = () => {
      const { onFocus } = this.props;
      onFocus && onFocus()
    }
    render () {
        const { label, required } = this.props
        const requiredCls = required ? 'required' : ''
        return (
            <List className='mdf-input'>
              <InputItem
               onChange={()=>{this.onChange()}}
               onBlur={()=>{this.onBlur()}}
               onFocus={()=>{this.onFocus()}}
               {...this.props}>
                <div className={`form-label ${requiredCls}`}>{label}</div>
              </InputItem>
            </List>
        )
    }
}