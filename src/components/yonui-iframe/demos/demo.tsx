/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  componentDidMount(){
    this.setState({
      a: 1
    })
  }
    render() {
        return (
            <MyComponent url='http://www.baidu.com'/>
        )
    }
}
