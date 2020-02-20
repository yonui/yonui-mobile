/**
 * @name: Button
 * @description: 按钮demo
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import { WhiteSpace } from 'antd-mobile';
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
        <MyComponent type="primary">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent type="default">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent type="warning">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent type="ghost">Ghost</MyComponent>
        <WhiteSpace/>
        <MyComponent size="small" inline={true} type="primary">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent size="small" inline={true} type="default">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent size="small" inline={true} type="warning">Primary</MyComponent>
        <WhiteSpace/>
        <MyComponent size="small" inline={true} type="ghost">Ghost</MyComponent>
{/*
        <MyComponent type='default'>defaultButton</MyComponent>

        <MyComponent type='danger'>dangerButton</MyComponent>

        <MyComponent type='primary' size='small'>smPrimary</MyComponent>

        <MyComponent type='default' size ='small'>smDefault</MyComponent>

        <MyComponent type='danger' size ='small'>smDanger</MyComponent>

        <MyComponent ghost = {true} >ghostButton</MyComponent>
        <MyComponent ghost = {true} inline={true}>ghostButton</MyComponent> */}

      </div>
    )
  }
}
