/**
 * @name: Icon
 * @description: 图标
 */
import React, { Component } from 'react'
import Icon from '../index'
import data from '../iconSource2'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  renderIcon = () => {
    return <Icon type={'penguin'} url='https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg'>value</Icon>
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
