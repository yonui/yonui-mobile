/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
import Vconsole from 'vconsole'
const v = new Vconsole()
export default class Demo extends Component {
    render() {

        return (
          <div>
            <MyComponent label='手机' singleLine={true} mode='mobilephone' area={false} />
            <MyComponent label='手机' singleLine={false} mode='mobilephone' area={false} />
            <MyComponent label='手机' singleLine={true} mode='mobilephone' area={true} />
            <MyComponent label='手机' singleLine={false} mode='mobilephone' area={true} value = '18811639366'/>
            <MyComponent singleLine={true} mode='telephone' area={false} />
            <MyComponent singleLine={false} mode='telephone' area={false} />
            <MyComponent singleLine={true} mode='telephone' area={true} />
            <MyComponent singleLine={false} mode='telephone' area={true} />
            <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={false} />
            <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={false} />
            <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={true} />
            <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={true} />
          </div>

        )
    }
}
