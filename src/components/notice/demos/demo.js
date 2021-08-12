/**
 * @name: Notice
 * @description: 通告栏
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

export default class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noticeModalShow: true
    }
  }
  onClick = () => {
    this.setState({
      noticeModalShow: false
    })
  }
  render() {
    return (
      <div className="notice-demo">
        <MyComponent mode='modal' title={'弹框通告'} noticeModalShow={this.state.noticeModalShow} onClick={this.onClick}>防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>链接通告</span>
        <MyComponent mode="link" onClick={() => alert('onclick')} marqueeProps={{ loop: true, style: { color: '#fff' } }} >防范疫情，2月5日～2月7日远程办公,防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>可关闭通告</span>
        <MyComponent mode="closable" icon={null} onClick={() => alert('onclick')} >防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>无按钮</span>
        <MyComponent>防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>light通告</span>
        <MyComponent mode="light">防范疫情，2月5日～2月7日远程办公</MyComponent>
        <span style={{ fontSize: 14 }}>POP通告</span>
        <MyComponent mode='pop' >防范疫情，2月5日～2月7日远程办公</MyComponent>
      </div>
    )
  }
}
