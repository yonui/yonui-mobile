/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from 'react'
import Flex from '../index'
import FlexItem from '../../flex-item'
import Button from '../../button'
import Card from '../../card'
import Search from '../../input'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <div>
        <div>
          row
        </div>
        <Flex direction="row">
          <FlexItem content = "aaaadflkjslkdf">
          </FlexItem>
          <FlexItem flex = "1">
            2
          </FlexItem>
          <FlexItem flex = "auto">
            3
          </FlexItem>

        </Flex>
        <div>
        column
        </div>
        <Flex direction="column">
          <FlexItem>
            <Button >按钮2 </Button>
          </FlexItem>
          <FlexItem content = "aaaadflkjslkdf">
          </FlexItem>
        </Flex>
      </div>
    )
  }
}
