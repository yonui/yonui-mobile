/**
 * @name: Input
 * @description: 输入文本
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from "../../flex";

import '../style'
import './demo.less'
export default class Demo1 extends Component {

  render() {
    const props = {
      type: 'normal',
      label: '文本'
    }
    return (
      <div className="spanDemo">
          <MyComponent type="small" label={props.label} />
          <MyComponent {...props} />
          <MyComponent type="large" label={props.label} />
      </div>
    )
  }
}
