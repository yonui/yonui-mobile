/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from 'react'
import {Flex,WhiteSpace} from "antd-mobile"
import FlexItem from '../../FlexItem'
import Button from '../../Button'

import '../style'
import './demo.less'
import '../../Button/style'


const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class Demo1 extends Component {
  render() {
    return (
      <div>
        <div>
          横向布局默认
        </div>
        <Flex direction="row">
          <FlexItem>
            <Button type="primary">按钮1</Button>
          </FlexItem>
          <FlexItem>
            <Button type="primary">按钮2</Button>
          </FlexItem>
          <FlexItem>
            <Button type="primary">按钮3</Button>
          </FlexItem>

        </Flex>
        <div>
          纵向布局
        </div>
        <Flex direction="column">
          <FlexItem>
            <Button type="primary">按钮1</Button>
          </FlexItem>
          <WhiteSpace />
          <FlexItem>
            <Button type="primary">按钮2</Button>
          </FlexItem>
          <WhiteSpace />
          <FlexItem>
            <Button type="primary">按钮3</Button>
          </FlexItem>
          <WhiteSpace />
        </Flex>
      </div>
    )
  }
}
