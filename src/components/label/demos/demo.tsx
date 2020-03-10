/**
 * @name: label
 * @description: 标签
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from '../../flex'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    const props = {
      type: 'normal',
      label: '文本sdfsfsdfsdfsdfsd'
    }
    const style1 = {
      color: 'rgba(0,199,230,1)',
      background: 'rgba(255,255,255,1)',
      border: '1px solid rgba(0,199,230,1)'
    }
    return (
      <div className="spanDemo">
        <MyComponent {...props} />
        <MyComponent label={props.label} style={style1} />
        <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(0,199,230,1)' }} />
      </div>
    )
  }
}
