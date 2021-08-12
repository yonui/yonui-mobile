/**
 * @name: Empty
 * @description: 空页面
 */
import React, { Component } from 'react'
import Empty from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  render() {
    return (
      <div style={{ height: '100%', background: "#fff" }}>
        <Empty  />
        <Empty mode = 'blankPage'></Empty>
        <Empty mode = 'error'></Empty>
        <Empty mode = 'review'></Empty>
        <Empty mode = 'server'></Empty>
        <Empty mode = 'noNetwork'></Empty>
      </div>
    )
  }
}
