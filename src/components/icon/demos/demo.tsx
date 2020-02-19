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
        <MyComponent  size= 'xxs'>Icon</MyComponent>
      </div>
      
    )
  }
}
