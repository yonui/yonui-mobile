/**
 * @name: Tab组件
 * @description: 页签
 */
import React, { Component } from 'react'
import Tab from '../index'

const fixedTabs = [
  { title: '聊天' },
  { title: '文件'}
]

export default class Demo2 extends Component {

  render () {
    return <Tab tabs={fixedTabs} mode='transparent'>

      <div>111</div>
      <div>222</div>
    </Tab>
  }
}
