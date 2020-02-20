/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from "react";
import Flex from "../index";
import FlexItem from '../../flex-item';
import { Button } from "antd-mobile";
import Card from '../../card';


import "../style";
import "./demo.less";
export default class Demo1 extends Component {
  render() {
    return (
      <div>
        <Flex direction="column">
          <FlexItem>
            <Button >按钮1 </Button>
          </FlexItem>
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
