/**
 * @name: Footer
 * @description: 页面底部
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { Icon } from 'antd-mobile'
import Button from '../../button'
import Flex from '../../flex'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render() {
    return (
      <MyComponent>
        <Flex>
          <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>测试</Button>
          <Button type="primary" inline size="small">测试</Button>
          <Icon type='check' size='sm' />
          <span>footer</span>
        </Flex>
      </MyComponent>
    )
  }
}
