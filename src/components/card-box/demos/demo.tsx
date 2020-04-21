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
              <MyComponent onDelete={()=>{console.log('x')}}  label='标题' footer='查看更多'>
                <div>123123123</div>
              </MyComponent>
            </div>
        )
    }
}
