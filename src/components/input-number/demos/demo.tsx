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
              <MyComponent label='金额' placeholder='默认三位小数' suffix='$' value='300' />
              <MyComponent label='金额' min={0} placeholder='请输入' singleLine/>
              <MyComponent label='金额' defaultValue={10} min={0} max={16} />
            </div>
        )
    }
}
