import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Button } from 'antd-mobile';

const data = {
  mode: "orderApply",
  leftIcon: "left",
  rightIcon1:"search",
  rightIcon2:"check",
  rightIcon3:"ellipsis",
  onRight1Click:() => alert("right1"),
  onLeftClick: () => alert("返回"),
  title: "默认标题"
};
ReactDOM.render(<Button />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
