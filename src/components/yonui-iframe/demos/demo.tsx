/**
 * @name: YonuiIframe
 * @description: Iframe框
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  render() {
    return (
      <MyComponent url='http://www.baidu.com' />
    )
  }
}
