/**
 * @name: Demo Name
 * @description: Demo Description
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
      <div style={{ height: '100%'}}>
        <MyComponent>c-group</MyComponent>
      </div>
    )
  }
}
