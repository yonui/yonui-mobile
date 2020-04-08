/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
          <div>
            <MyComponent content="分割线"></MyComponent>
            <MyComponent content="分割线" type="dashed"/>
            <MyComponent content="分割线" type="dotted"/>
            <MyComponent content="分割线" type="double"/>
            {/* <MyComponent /> */}

          </div>
        )
    }
}
