/**
 * @name: Modal
 * @description: 对话框
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {

  render() {
    MyComponent.alert('这是一条警告信息', '111')

    return (
      <MyComponent title="对话框标题" visible={false}>
        <p>111</p>
      </MyComponent>
    )
  }
}
