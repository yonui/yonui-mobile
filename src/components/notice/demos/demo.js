/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

export default class Demo1 extends Component {
  render () {
    return (
      <div className="notice-demo">
        {/* <span style={{ fontSize: 14 }}>弹框通告</span>
        <MyComponent mode='modal' title={'弹框通告'}  >防范疫情，2月5日～2月7日远程办公</MyComponent> */}
        <span style={{ fontSize: 14 }}>链接通告</span>
        <MyComponent mode="link" onClick={() => alert('onclick')} marqueeProps={{loop: true, style: {color:'#fff'}}} >防范疫情，2月5日～2月7日远程办公,防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>可关闭通告</span>
        <MyComponent mode="closable" icon={null} onClick={() => alert('onclick')} >防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>无按钮</span>
        <MyComponent mode="closable" action={<span></span>}>防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>light通告</span>
        <MyComponent mode="light">防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>POP通告</span>
        <MyComponent mode='pop' >防范疫情，2月5日～2月7日远程办公</MyComponent>
      </div>
    )
  }
}
