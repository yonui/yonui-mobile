/**
 * @name: TimeRangePicker
 * @description: 时间选择器
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component<any, any> {
  render() {
    return (
      <div>
        <MyComponent mode='time'/>
        <MyComponent mode='datetime'/>
        <MyComponent mode='date'/>
        <MyComponent mode='year'/>
        <MyComponent mode='month'/>
      </div>
    )
  }
}
