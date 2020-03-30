/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
const initData = [
  {
    value: '1',
    label: 'Food',
    disabled: true
  }, {
    value: '2',
    label: 'Supermarket'
  },
  {
    value: '3',
    label: 'Extra'
  }
]
export default class Demo1 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <MyComponent data={initData}  required>122</MyComponent>
      </div>
    )
  }
}
