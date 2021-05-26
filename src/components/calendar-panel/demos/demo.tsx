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
      range: [new Date(2021, 4, 20), new Date(2021, 4, 25)]
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
        <MyComponent
          selectRange={false}
          onSelect={this.onSelect}
          dateInfo={{}}
          value={date}/>
        <MyComponent
          selectRange={true}
          dateInfo={dateInfo}
          onSelect={this.onSelect}
          value={range}
        />
      </React.Fragment>
    )
  }
}
