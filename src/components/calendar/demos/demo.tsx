/**
 * @name: Calendar
 * @description: 日历选择
 */

import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

const now = new Date()
const extra = {
  '2021/09/26': { info: '4h' },
  '2021/09/27': { info: '4h' },
  '2021/09/28': { info: '4h' },
}
export default class Demo1 extends Component<any, any> {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
  constructor(props: any) {
    super(props)
    this.state = {
      en: false,
      show: false,
      config: {}
    }
  }

  onSelectHasDisableDate = (dates: Date[]) => {
    console.warn('onSelectHasDisableDate', dates)
  }

  onConfirm = (startTime: Date, endTime: Date) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY
    this.setState({
      show: false,
      startTime,
      endTime
    })
  }

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined
    })
  }

  onClickDay = (res) => {
    console.log('res', res)
  }

  render() {
    return (
      <div>
        <span onClick={() => this.setState({ show: true })}>显示日历</span>
        <MyComponent
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          defaultValue={[new Date(now), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)]}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
          dateExtra={extra}
          onClickDay={this.onClickDay}
        />
      </div>
    )
  }
}
