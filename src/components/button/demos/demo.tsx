/**
 * @name: Button
 * @description: sss
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
  render() {
    return (
      <div >

        <div>primary mode</div>
        <MyComponent type='primary'>Button</MyComponent>

        <div>default mode</div>
        <MyComponent type='default'>Button</MyComponent>
        <div>danger mode</div>
        <MyComponent type='danger'>Button</MyComponent>
      </div>
    )
  }
}
