/**
 * @name: Flex
 * @description: 布局容器
 */
import React, { Component } from "react";
import Flex from "../index";
import { Button } from "antd-mobile";
import Card from '../../card';


import "../style";
import "./demo.less";
export default class Demo1 extends Component {
  render() {
    return (
      <div>
        <Flex>
          <Button className="item-width">按钮1 </Button>
          <Button className="item-width">按钮2 </Button>
          <Button className="item-width">按钮3 </Button>
          <Button className="item-width">按钮4 </Button>
        </Flex>

        <Flex direction="column">
          <Button >按钮1 </Button>
          <Button >按钮2 </Button>
          <Card></Card>
        </Flex>
      </div>
    );
  }
}
