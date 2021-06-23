/**
 * @name: Toast
 * @description: 提示
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from '../../flex'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  showToast() {
    MyComponent.info('This is a toast tips !!!', 1);
  }
  render () {
    const props = {
      type: 'normal',
      label: '文本'
    }

    return (
      <div onClick={this.showToast}>提示</div>
    )
  }
}
