/**
 * @name: Icon
 * @description: 图片
 */
import React, { Component } from 'react'
import Icon from '../index'
import data from '../iconSource'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  renderIcon = () => {
    return Object.keys(data).map(value => {
      return <span style={{
        display: "inline-block",
        backgroundColor: "#fff",
        margin: '5px',
        padding: '5px',
        borderRadius: '2px',
        color: '#111'
      }}><Icon type={value}>value</Icon></span>
    })
  }
  render () {
    return (
      <div style={{fontSize: 0}}>
        {this.renderIcon()}
        {/* <MyComponent type = 'check' size = 'small'>con</MyComponent>
        <MyComponent type = 'cross' size = 'small'>con</MyComponent> */}
      </div>

    )
  }
}
