/**
 * @name: Empty
 * @description: 空页面
 */
import React, { Component } from 'react'
import Empty from '../index'
import NavBar from '../../navbar'
import '../style'
import './demo.less'
import '../../navbar/style'
export default class Demo extends Component {
  render() {
    return (
      <div style={{ height: '100%', background: "#fff" }}>
        <NavBar
          onLeftClick={() => console.log('onLeftClick')}
          title="空数据"
          rightIcon1="ellipsis"
        >
        </NavBar>

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
