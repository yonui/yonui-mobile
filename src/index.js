import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";

import Button from "./components/button";

const data = {
  text: '文本'
};
console.log(Button)
ReactDOM.render(<Button {...data}></Button>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
