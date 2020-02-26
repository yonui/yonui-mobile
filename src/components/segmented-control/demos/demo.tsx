/**
 * @name: SegmentedControl
 * @description: 分段菜单
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
const data = [
  {
    label: '智能推荐',
    children: {
      full: false,
      showHeader: true,
      title: '智能推荐',
      content: <div>1</div>,
      showFooter: false
    }
  },
  {
    label: '采购订单',
    children: {
      full: false,
      showHeader: true,
      title: '采购订单',
      content: <div>1<div>2</div><div>3</div></div>,
      showFooter: false
    }
  },
  {
    label: '采购分析',
    children: {
      full: false,
      showHeader: true,
      title: '采购分析',
      content: <div>1<div>2</div></div>,
      showFooter: false
    }
  },
  {
    label: '固定考勤',
    children: {
      full: false,
      showHeader: true,
      title: '固定考勤',
      content: <div>1</div>,
      showFooter: false
    }
  }
]
export default class Demo1 extends Component {
  render() {
    return (
      < MyComponent data={data}/>
    )
  }
}
