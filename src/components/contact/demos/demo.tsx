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
            <MyComponent singleLine={true} mode='mobilephone' area={true}/>
            <MyComponent singleLine={false} mode='mobilephone' area={true}/>
          </div>
        )
    }
}
