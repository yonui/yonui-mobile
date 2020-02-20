/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from "react";
import Flex from "../index";
import FlexItem from '../../flex-item';
import Button from "../../button";
import Card from '../../card';
import Search from '../../input';


import "../style";
import "./demo.less";
export default class Demo1 extends Component {
  render() {
    return (
      <div>
          <div>
          row
        </div>
        <Flex direction="row">
          <Flex.Item>
            <Button size="small" >按钮1 </Button>
          </Flex.Item>
          <FlexItem>
          <Button size="small" >按钮2 </Button>
          </FlexItem>
          <FlexItem>
            <Button size="small" >按钮3 </Button>
          </FlexItem>

        </Flex>
        <div>
        column
        </div>
        <Flex direction="column">
          <Flex.Item>
            <Button >按钮1 </Button>
          </Flex.Item>
          <FlexItem>
            <Button >按钮2 </Button>
          </FlexItem>
          <FlexItem>
            <Card></Card>
          </FlexItem>
        </Flex>
      </div>
    );
  }
}
