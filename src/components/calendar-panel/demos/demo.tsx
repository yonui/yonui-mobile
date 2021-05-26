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
// const dateInfo = {
//   '2021-5-26': {info: 'zyh', disable: true},
//   '2021-5-27': {info: 'test'},
//   '2021-5-28': {info: '下标1', disable: true},
//   '2021-5-29': {disable: true},
// }
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      date: new Date(),
      one: new Date(),
      range: [new Date(2020, 2, 1), new Date(2020, 2, 7)]
    }
  }

  onSelect = value => {
    console.log('onSelect', value)
  }

  onClick = value => {
    console.log('onClick', value)
  }
  render () {
    const { date, one, range } = this.state
    return (
      <React.Fragment>
        <span>禁用日期</span>
        <MyComponent
          selectRange={true}
          onSelect={this.onSelect}
          dateInfo={{}}
          value={date}/>
      </React.Fragment>
    )
  }
}
