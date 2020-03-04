/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';



export default class Demo1 extends React.Component {
  constructor(props) {
   super(props)
  }

  render() {
    return (
      <MyComponent/>
      
    );
  }
}
