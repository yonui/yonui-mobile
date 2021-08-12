/**
 * @name: TimeRangePiker
 * @description: 时间选择器
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
import { Button, List } from 'antd-mobile'
import { dateFormat } from '../../_utils'
export default class Demo1 extends Component<any, any> {
  constructor(props: any) {
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

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.onClick}>显示</Button>
        <MyComponent
          value={['2021-5-30', '12:30', '14:30']}
          visible={visible}
          minuteStep={10}
          onDismiss={this.onDismiss}
          onOk={this.onOk} />
      </div>

    )
  }
}
