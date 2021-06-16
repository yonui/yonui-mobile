/**
 * @name: Button
 * @description: 按钮
 */
import React, { Component } from 'react';
import Button from '../index';
import { WhiteSpace } from 'antd-mobile';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
  render () {
    const props = {
      prefixCls: 'am-button',
      type: 'primary',
      size: 'large',
      loading: false, // 是否显示加载图标
      content: 'primaryButton',
      disabled: false,
      inline: false,
      ghost: false
    }
    return (
      <div >
        <Button type="primary" size='large' content="主要操作/N"></Button>
        <WhiteSpace/>
        <Button type="primary" size='large' disabled={true}>主要操作/D</Button>
        <WhiteSpace/>
        <Button size='large' >辅助操作/N</Button>
        <WhiteSpace/>
        <Button disabled={true} size='large'>辅助操作/D</Button>
        <WhiteSpace/>
        <Button type="warning" size='large'>警示按钮/N</Button>
        <WhiteSpace/>
        <Button type="warning" disabled={true} size='large'>警示按钮/D</Button>
        <WhiteSpace/>
        <Button size="small" type="ghost" >幽灵/N</Button>
        <WhiteSpace/>
        <Button size="small" type="ghost" disabled={true}>幽灵/D</Button>
        <WhiteSpace/>
        <Button size="small">次要/N</Button>
        <WhiteSpace/>
        <Button size="small" disabled={true}>次要/D</Button>
        <WhiteSpace/>
        <Button size="small" type="warning">警示/N</Button>
        <WhiteSpace/>
        <Button size="small" type="warning" disabled={true}>警示/D</Button>
        <WhiteSpace/>
        <Button size="small" type="primary">补充/N</Button>
        <WhiteSpace/>
        <Button size="small" type="primary" disabled={true}>补充/D</Button>
        <WhiteSpace/>
        <Button size="small" type="text">文本/D</Button>
        <WhiteSpace/>
        <Button size="small" type="text" disabled={true}>文本/D</Button>
        <WhiteSpace/>
        <Button type="toolbar-default" >工具栏默认</Button>
        <Button type="toolbar-primary" >工具栏主按钮/D</Button>
      </div>
    )
  }
}
