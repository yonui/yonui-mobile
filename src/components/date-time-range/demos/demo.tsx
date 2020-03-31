/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component<any, any> {

  state = {
    value: undefined
  }
    render() {
      console.log(this.state.value)
        return (
            <MyComponent label='日期范围' value={this.state.value} onConfirm={(start,end)=>{this.setState({value: [start, end]})}}/>
        )
    }
}
