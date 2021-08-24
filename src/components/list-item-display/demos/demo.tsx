/**
 * @name: ListItemDisplay
 * @description: 列表项
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  render() {
    return (<>
      <MyComponent label='label1' subLabel='hhh' extraIcon='right' extraText='x' />
      <MyComponent label='label2' subLabel='hhh' extraIcon='right' extraText='x' />
      <MyComponent label='label3' subLabel='hhh' extraIcon='right' extraText='x' />
      <MyComponent label='label4' subLabel='hhh' extraIcon='right' extraText='x' />
    </>)
  }
}
