/**
 * @name: ListItemWrapper
 * @description: 组件左侧标题
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  render() {
    return (
      <MyComponent label='标题' showExtraLabelIcon subLabel='副标题'/>
    )
  }
}
