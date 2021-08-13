/**
 * @name: Textarea
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
        placeholder="预设内容"
        label='123123'
        maxLength={1000}
        singleLine={true}
        clear
        required
      />
    )
  }
}
