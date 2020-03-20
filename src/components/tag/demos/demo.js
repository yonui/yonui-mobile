/**
 * @name: MyComponent
 * @description: sss
 */
import React, { Component } from 'react'
import Tag from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  render () {
    return (
      <div>
        <Tag data-seed="logId">Basic</Tag>
        <Tag selected>Selected</Tag>
        <Tag disabled>Disabled</Tag>
        <Tag >Callback</Tag>
      </div>
    )
  }
}
