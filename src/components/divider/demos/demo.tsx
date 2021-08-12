/**
 * @name: Divider
 * @description: 分割线
 */

import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
          <div>
            <MyComponent content="分割线1"></MyComponent>
            <MyComponent content="分割线2" width={5} color='red'></MyComponent>
          </div>
        )
    }
}
