/**
 * @name: Textarea
 * @description: 多行文本
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <MyComponent
        // placeholder="预设内容"
        // label='123123'
        // maxLength={1000}
        value={'<p><img src="https://bip-px.feihe.com/group1/M00/00/04/CgrUaWFnwKaAH-79AAD57Pndm-A942.png" title="" alt=""/></p ><p>苏南省区审批</p >'}
        isHTML
        clear
      />
    )
  }
}
