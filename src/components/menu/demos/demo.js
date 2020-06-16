/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import '../style'
import './demo.less'
import MdfMenu from '../Menu'
export const menuData = [
  {
    value: 'Food',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: 'All Foods',
        disabled: false
      },
      {
        label: 'Chinese Food',
        value: 'Chinese'
      }]
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: 'Supermarkets'
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true
      }]
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1'
      }
    ]
  }
]
export default class Demo1 extends Component {
  constructor (props) {
    super(props)
  }

  onOk = (v) => {
    console.log("vvvvv : ", v)
  }

  onChange = (v) => {
    console.log("vvvvv : ", v)
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <MdfMenu onOk={this.onOk} onChange={this.onChange} multiSelect={true} data={menuData}></MdfMenu>
      </div>
    )
  }
}
