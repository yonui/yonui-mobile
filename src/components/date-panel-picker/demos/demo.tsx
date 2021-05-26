/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
import { Button, List } from 'antd-mobile'
import { dateFormat } from '../../_utils'
// const nowTimeStamp = Date.now()
// const now = new Date(nowTimeStamp)
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onClick = () => {
    this.setState({
      visible: true
    })
  }

  onDismiss = () => {
    this.setState({
      visible: false
    })
  }

  onOk = (date: Object) => {
    this.setState({
      visible: false,
      date
    })
  }

  render () {
    const { date, visible } = this.state
    return (
      <div>
        <Button onClick={this.onClick}>显示</Button>
        <MyComponent
          value={date}
          visible={visible}
          minuteStep={5}
          onDismiss={this.onDismiss}
          onOk={this.onOk}/>
        {
          this.state.date &&
          <div>
            <List.Item>开始: {dateFormat(this.state.date[0], 'yyyy-MM-dd hh:mm:ss')}</List.Item>
            <List.Item>结束: {dateFormat(this.state.date[1], 'yyyy-MM-dd hh:mm:ss')}</List.Item>
          </div>   
        }
      </div>

    )
  }
}
