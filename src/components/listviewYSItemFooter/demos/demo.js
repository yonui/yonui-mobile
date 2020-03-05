/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import TemplateFooter from '../index';
import {Flex} from 'antd-mobile'
import '../style';
import './demo.less';



export default class Demo1 extends React.Component {
  constructor(props) {
   super(props)
  }

  render() {
    return (
      <TemplateFooter></TemplateFooter>
      
    );
  }
}
