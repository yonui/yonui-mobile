/**
 * @name: WhiteBlank
 * @description: 按钮demo
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {

  render() {
    const props = {
      prefixCls: 'am-button',
      type: 'primary',
      size: 'large',
      loading: false,// 是否显示加载图标
      content: 'primaryButton',
      disabled: false,
      inline: false,
      ghost: false
    }
    return (
      <div >
        <MyComponent />
      </div>
    )
  }
}
