/**
 * @name: Checkbox
 * @description: 复选框
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { List } from 'antd-mobile'

import '../style'
import './demo.less'
const CheckboxItem = MyComponent.CheckboxItem
const AgreeItem = MyComponent.AgreeItem
export default class Demo1 extends Component {
  render() {
    return (
      <div >
        <span className='sub-title '>Checbox demo</span>
        <MyComponent content='checbox' disabled> </MyComponent>
        <span className='sub-title '>Checbox demo mode=square</span>
        <MyComponent type={'circle'} defaultChecked content='checbox'></MyComponent>
      </div>
    )
  }
}
