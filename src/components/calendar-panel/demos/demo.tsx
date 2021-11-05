/**
 * @name: CalendarPanel
 * @description: 日历面板
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
const now = new Date()

const extra = {
  '2021/08/26': { info: '4h', disable: true },
  '2021/08/27': { info: '4h' },
  '2021/08/28': { info: '4h' },
  '2021/09/27': { info: '4h' },
  '2021/09/28': { info: '4h' }
}
export default class Demo1 extends Component<any, any> {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
  constructor(props: any) {
    super(props)
    this.state = {
      en: false,
      show: false,
      config: {},
      extra: {},
      pickTime: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        extra: extra,
        defaultValue: [new Date(now), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)]
      })
    }, 1000)
  }

  onClickDay = (res) => {
    console.log('res', res)
  }

  render() {
    return (
      <div style={{ height: '100%' }} >
        <MyComponent
          visible={true}
          defaultDate={'2021/4/1'}
          scrollToBottom={true}
          dateExtra={this.state.extra}
          onClickDay={this.onClickDay}
          initalMonths={10}
          minDate={'2021-8-5'}
          maxDate={'2021-12-5'}
          hintDays={["2021-6-3", "2021-6-4"]}
          type='range'
          textColor='blue'
        />
      </div>
    )
  }
}
