/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  onChange = (res) => {
    console.log('res', res)
  }
  render() {
      return (
          <MyComponent
          stepType={0}
          max={100}
          min={0}
          step={0.02}
          style={{width:'4rem', height: '1rem', background:'red', color:'blue',
          fontSize:'32px', border:'3px gray solid', borderRadius:'4px',
          fontWeight: 'normal',
          fontStyle: 'italic',
          textDecoration: 'line-through'
        }}
          onChange={this.onChange}
          />
      )
  }
}
