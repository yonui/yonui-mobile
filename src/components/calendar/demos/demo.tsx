/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { Button, List } from 'antd-mobile'
import enUS from 'antd-mobile/lib/calendar/locale/en_US'
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN'
import '../style'
import './demo.less'
import { dateFormat } from '../../_utils'
const now = new Date()

const extra = {
  '2021/06/26':{info:'4h', cellRender: date => date.getDate()},
  '2021/06/27':{info:'4h'},
  '2021/06/28':{info:'4h'},
}
export default class Demo1 extends Component<any, any> {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
  constructor (props: any) {
    super(props)
    this.state = {
      en: false,
      show: false,
      config: {}
    }
  }

  renderBtn (zh: any, en: any, config: any = {}) {
    config.locale = this.state.en ? enUS : zhCN

    return (
      <Button
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
          this.setState({
            show: true,
            config
          })
        }}
      >
        {this.state.en ? en : zh}
      </Button>
    )
  }

  onSelectHasDisableDate = (dates: Date) => {
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

  render () {
    return (
      <div>
        <span onClick={() => this.setState({show: true})}>显示日历</span>
        <MyComponent
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          // defaultDate={now}
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
