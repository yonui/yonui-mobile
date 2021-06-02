/**
 * @name: label
 * @description: 标签
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from '../../flex'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    const props = {
      type: 'normal',
      label: '文本'
    }

    return (
      <div></div>
    )
  }
}
