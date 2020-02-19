/**
 * @name: Card
 * @description: 卡片组件
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import { Button } from 'antd-mobile'
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (

            <MyComponent>
              <Button type="primary">123</Button>
            </MyComponent>
        )
    }
}
