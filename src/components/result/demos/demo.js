/**
 * @name: Result
 * @description: 反馈页面
 */
import React, { Component } from 'react'
import Result from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  render () {
    return <div>
      <Result mode="success" />
      <Result mode="wait" />
      <Result mode="reject" />
    </div>
  }
}
