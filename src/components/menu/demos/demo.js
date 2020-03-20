/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
import {menuData} from '../manifest'
export default class Demo1 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <MyComponent data={menuData} level={1} height={200}></MyComponent>
        <MyComponent data={menuData} level={2} height={200}></MyComponent>
      </div>
    )
  }
}
