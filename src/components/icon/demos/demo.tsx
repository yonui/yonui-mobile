/**
 * @name: Icon
 * @description: 图片
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
  render () {
    return (
      <div> 
        <MyComponent name = 'xiaoyou' size = 'small'>con</MyComponent>
        <MyComponent name = 'xiaoyou' size = 'large'>con</MyComponent>
        <MyComponent name = 'achievement' size = 'small'>con</MyComponent>
        <MyComponent name = 'achievement' size = 'large'>con</MyComponent>
        <MyComponent name = 'business' size = 'small'>con</MyComponent>
        <MyComponent name = 'business' size = 'large'>con</MyComponent>

      </div>
      
    )
  }
}
