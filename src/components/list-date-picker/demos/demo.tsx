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
    console.log(value)
    this.setState({
      value
    })
  }

  render () {
    return (
      <div>
        <MyComponent label='显示时间' mode='date' arrow={false} value={this.state.value} />
        <MyComponent label='显示时间' mode='datetime' arrow={false} value={this.state.value} />
        <MyComponent label='显示时间' mode='month' arrow={false} value={this.state.value} />
        <MyComponent label='显示时间' mode='year' arrow={false} value={this.state.value} />
        <MyComponent label='显示时间' mode='time' arrow={false} value={this.state.value} onOk={this.onOk}/>
      </div>
    )
  }
}
