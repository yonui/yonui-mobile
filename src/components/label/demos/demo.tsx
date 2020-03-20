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
  render() {
    const props = {
      type: 'normal',
      label: '文字'
    }
    const style1 = {
      color: 'rgba(0,199,230,1)',
      background: 'rgba(255,255,255,1)',
      border: '1px solid rgba(0,199,230,1)'
    }
    return (
      <div className="spanDemo">
        <Flex>
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(0,199,230,1)' }} />
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(32,191,167,1)' }} />
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(101,175,71,1)' }} />
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(255,171,0,1)' }} />
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(225,76,70,1)' }} />
          <MyComponent label={props.label} style={{ background: 'rgba(245,245,245,1)', color: 'rgba(101,84,192,1)' }} />
        </Flex>
        <Flex>
          <MyComponent label="文本" style={{ background: 'rgba(0,199,230,1)' }} />
          <MyComponent label="文本" style={{ background: 'rgba(31,191,167,1)' }} />
          <MyComponent label="文本" style={{ background: 'rgba(101,175,71,1)' }} />
          <MyComponent label="文本" style={{ background: 'rgba(255,171,0,1)' }} />
          <MyComponent label="文本" style={{ background: 'rgba(225,76,70,1)' }} />
          <MyComponent label="文本" style={{ background: 'rgba(101,84,192,1)' }} />


        </Flex>
        <Flex>
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(0,199,230,1)',color:'rgba(0,199,230,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(31,191,167,1)',color:'rgba(31,191,167,1)'}} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(101,175,71,1)',color:'rgba(101,175,71,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(255,171,0,1)',color:'rgba(255,171,0,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(225,76,70,1)',color:'rgba(225,76,70,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(101,84,192,1)',color:'rgba(101,84,192,1)' }} />

        </Flex>

      </div>
    )
  }
}
