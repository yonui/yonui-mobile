/**
 * @name: Input
 * @description: 输入框
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange = (val: string) => {
    console.log('change', val)
    this.setState({
      value: val
    })
  }

  onBlur = () => {
    console.log('blur')
  }

  onFocus = () => {
    console.log('focus')
  }

  render() {
    const props = {
      type: 'text',
      label: '标题标题标题标题标题标题标题',
      defaultValue: '输入框的值',
      placeholder: '请输入',
      required: true,
      editable: true,
      disabled: false,
      clear: true
    }
    return (
      <div>
        <MyComponent {...props}
          onChange={this.onChange}
          onBlur={() => { this.onBlur() }}
          onFocus={() => { this.onFocus() }}
          label='标题'
          subuitype='ipAddress'
        />
        <MyComponent {...props}
          onChange={this.onChange}
          onBlur={() => { this.onBlur() }}
          onFocus={() => { this.onFocus() }}
          singleLine
          label='标题'
        />
        <MyComponent {...props}
          onChange={this.onChange}
          onBlur={() => { this.onBlur() }}
          onFocus={() => { this.onFocus() }}
          value={this.state.value}
          formatReg='### #### ####'
          maxLength={11}
          defaultValue='123123'
          checkMask='^[1-'
        />
      </div>
    )
  }
}
