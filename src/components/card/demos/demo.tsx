/**
 * @name: Card
 * @description: 卡片组件
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <div>
        <MyComponent></MyComponent>
        <MyComponent full={true}></MyComponent>
      </div>
    )
  }
}
