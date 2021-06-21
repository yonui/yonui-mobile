/**
 * @name: Div
 * @description: Div块
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
        <MyComponent>div块</MyComponent>
        <MyComponent type='panel'><div>12332</div></MyComponent>
      </div>
    )
  }
}
