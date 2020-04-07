/**
 * @name: TextareaItem
 * @description: 多行文本
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <MyComponent
        rows={5}
        placeholder="预设内容"
        label='123123'
      />
    )
  }
}
