/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
import { Button } from 'antd-mobile'
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      modal1: false,
      modal2: false
    }
  }

  onClose = (flag: string) => {
    this.setState({
      [`${flag}`]: false
    })
  }

  onShow = (flag: string) => {
    this.setState({
      [`${flag}`]: true
    })
  }

  onClick = (flag: string, object: any) => {
    this.setState({
      [`${flag}`]: false
    })
    console.log(object)
  }

  render () {
    const data = [
      { key: '1', text: '修改所有日程' },
      { key: '2', text: '修改将来所有日程' },
      { key: '3', text: '删除日程', delete: true }
    ]
    const data1 = [
      { key: '1', text: '设为特别关注' },
      { key: '2', text: '解除好友关系' },
      { key: '3', text: '保存到通讯录' },
      { key: '4', text: '分享名片' }
    ]
    return (
      <div>
        <Button onClick={this.onShow.bind(this, 'modal1')}>显示</Button>
        <Button onClick={this.onShow.bind(this, 'modal2')}>显示-无头部</Button>
        <MyComponent
          header={'改日程为重复性日程，请选择您的修改方式'}
          visible={this.state.modal1}
          onClose={this.onClose.bind(this, 'modal1')}
          data={data}
          onClick={this.onClick.bind(this, 'modal1')}/>
        <MyComponent
          visible={this.state.modal2}
          onClose={this.onClose.bind(this, 'modal2')}
          data={data1}
          onClick={this.onClick.bind(this, 'modal2')}/>
      </div>
    )
  }
}
