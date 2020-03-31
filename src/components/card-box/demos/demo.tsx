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
              <MyComponent onPress={()=>{console.log('x')}} >
                <div>123123123</div>
              </MyComponent>
            </div>
        )
    }
}
