/**
 * @name: TimeRangePicker
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
        <MyComponent />
      </div>

    )
  }
}
