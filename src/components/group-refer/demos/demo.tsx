/**
 * @name: GroupRefer
 * @description: 引用
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
            <MyComponent>页面引用</MyComponent>
        )
    }
}
