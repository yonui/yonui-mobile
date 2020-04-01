/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from 'react'
import { WhiteSpace } from "antd-mobile"
import FlexItem from '../../flex-item'
import Flex from '../index'
import Button from '../../button'

import '../style'
import './demo.less'
import '../../button/style'


const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);


const FlexExample = () => (
  <div className="flex-container">
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Wrap</div>
    <Flex direction="column-reverse">
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />

      <PlaceHolder className="inline" />

      <PlaceHolder className="inline" />

      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />

      <PlaceHolder className="inline" />

    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="around">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <WhiteSpace />
    <Flex align="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="stretch">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
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
        {FlexExample()}
      </div>
    )
  }
}
