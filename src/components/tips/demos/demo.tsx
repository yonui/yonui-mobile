/**
 * @name: label
 * @description: 标签
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from '../../Flex'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    const props = {
      type: 'normal',
      label: '文本'
    }

    return (
      <Flex>
        <MyComponent text={3} overflowCount={55} style={{ marginLeft: 12 }}/>
        <br />
        <MyComponent text={36} overflowCount={55} style={{ marginLeft: 12 }}/>

        <br />
        <MyComponent text={7} overflowCount={55} style={{ marginLeft: 12 }}/>
        <br />
        <MyComponent text={'new'} style={{ marginLeft: 12 }}></MyComponent>
        <br />
        <MyComponent dot = "true" style={{ marginLeft: 12 }}></MyComponent>
        <br />
        <MyComponent dot = "true" style={{ marginLeft: 12,background : "#FFBB37" }}></MyComponent>
        <br />

      </Flex>
    )
  }
}
