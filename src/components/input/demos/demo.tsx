/**
 * @name: Input
 * @description: 输入文本
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  onChange = () => {
    console.log('change')
  }

  onBlur = () => {
    console.log('blur')
  }

  onFocus = () => {
    console.log('focus')
  }

  render () {
    const props = {
      type: 'text',
      // label: '标题',
      // defaultValue: '输入框的值',
      placeholder: '请输入',
      labelNumber: 5,
      // required: true,
      editable: true,
      disabled: false,
      clear: true
    }
    return (
      <MyComponent {...props}
        onChange={() => { this.onChange() }}
        onBlur={() => { this.onBlur() }}
        onFocus={() => { this.onFocus() }}/>
    )
  }
}
