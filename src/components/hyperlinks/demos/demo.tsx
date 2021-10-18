/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';

export default class Demo extends Component {
  onChange = (value) => {
    console.log('===============', value)
  }
  render() {
    return (
      <MyComponent label='标题' defaultLinkText='名称' defaultLinkAddress='www.baidu.com' linkTextPlaceholder='placeholder1' LinkAddressPlaceholder='placeholder2' onChange={this.onChange}/>
    )
  }
}
