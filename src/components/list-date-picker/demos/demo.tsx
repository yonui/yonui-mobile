/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onOk = (value: any) => {
    this.setState({
      value
    })
  }

  render () {
    return (
      <MyComponent
        label='显示时间'
        arrow={true}
        required
        value={this.state.value}
        onOk={this.onOk}/>
    )
  }
}
