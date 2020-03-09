/**
 * @name: Icon
 * @description: 图片
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <div>
        <MyComponent type = 'check' size = 'small'>con</MyComponent>
        <MyComponent type = 'cross' size = 'small'>con</MyComponent>
      </div>

    )
  }
}
