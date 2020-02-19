/**
 * @name: Button
 * @description: sss
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
      content: <div>Button</div>,
      disabled: false,
      inline: false,
      ghost: false
    }
    return (
      <div >
        <MyComponent {...props}> primaryButton</MyComponent>
        <br />
        <MyComponent type='default'>defaultButton</MyComponent>
        <br />
        <MyComponent type='danger'>dangerButton</MyComponent>
        <br />
        <MyComponent type= 'primary' size = 'small'> smPrimary</MyComponent>
        <br />
        <MyComponent type='default' size = 'small'> smDefault</MyComponent>
        <br />
        <MyComponent type='danger' size = 'small'> smDanger</MyComponent>
        <br />
        <MyComponent type='ghost' ghost= 'true' >ghostButton</MyComponent>
        <br />
      </div>
    )
  }
}
