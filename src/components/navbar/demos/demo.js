/**
 * @name: NavBar
 * @description: 顶部导航栏
 */
import React, { Component } from "react";
import NavBar from "../index";
import Icon from "../../icon";
import "../style";
import "./demo.less";
export default class Demo extends Component {
  render() {
    return (
      <NavBar
      className={"ys-navabar"}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        标题
      </NavBar>
    );
  }
}
