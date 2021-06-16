/**
 * @name: TimeRange
 * @description: 时间选择器
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

  onOk = (value) => {
    console.log(value)
    this.setState({
      visible: false
    })
  }

  render () {
    const { date, visible } = this.state
    return (
      <div>
        <Button onClick={this.onClick}>显示</Button>
        <MyComponent
          value={['2021-5-30', '12:30', '14:30']}
          visible={visible}
          minuteStep={10}
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
