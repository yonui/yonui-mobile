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
      <div>
        <MyComponent style={{ marginTop: '40px' ,background:'#FFFFFF', height:'600px'}} drawerHeight={256}>c-group</MyComponent>
      </div>
    )
  }
}
