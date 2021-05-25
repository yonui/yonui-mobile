/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { List } from 'antd-mobile'
import '../style'
import './demo.less'
import { dateFormat } from '../../_utils'
const now = new Date()
const dateInfo = {
  '2021-5-26': {info: 'zyh', disable: true},
  '2021-5-27': {info: 'test'},
  '2021-5-28': {info: '下标1', disable: true},
  '2021-5-29': {disable: true},
}
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      date: new Date(),
      one: new Date(),
      range: [new Date(2020, 2, 1), new Date(2020, 2, 7)]
    }
  }

  onChange = (flag: string, date: any) => {
    this.setState({
      [`${flag}`]: date
    })
    console.log(date)
  }

  render () {
    const { date, one, range } = this.state
    console.log(range)
    return (
      <React.Fragment>
        <span>禁用日期</span>
        <MyComponent
          selectRange={true}
          dateInfo={dateInfo}
          onChange={this.onChange.bind(this, 'date')}
          value={date}/>
      </React.Fragment>
    )
  }
}
