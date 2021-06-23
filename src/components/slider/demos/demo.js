/**
 * @name: Slider
 * @description: 滑动输入条
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

export default class Demo1 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <MyComponent defaultValue={'12'}/>
      </div>
    )
  }
}
