/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { List } from 'antd-mobile'

import '../style'
import './demo.less'
const CheckboxItem = MyComponent.CheckboxItem
const AgreeItem = MyComponent.AgreeItem
export default class Demo1 extends Component {
  render () {
    return (
      <div >
        <span className='sub-title '>Checbox demo</span>
        <MyComponent defaultChecked > checbox</MyComponent>
        <span className='sub-title '>Checbox demo mode=square</span>
        <MyComponent mode={'square'} defaultChecked > checbox</MyComponent>

        <span className='sub-title '>CheckboxItem demo</span>
        <List ><CheckboxItem defaultChecked multipleLine>Undergraduate</CheckboxItem></List>
        <span className='sub-title '>CheckboxItem demo mode=square</span>
        <List ><CheckboxItem mode={'square'} defaultChecked multipleLine>Undergraduate</CheckboxItem></List>

        <span className='sub-title '>CheckAgremm demo</span>
        <AgreeItem defaultChecked>AgreeItem</AgreeItem>
        <span className='sub-title '>CheckAgremm demo mode=square</span>
        <AgreeItem mode={'square'} defaultChecked >AgreeItem</AgreeItem>

      </div>
    )
  }
}
