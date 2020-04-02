/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
       value: ''
    }
  }

    render() {
        return (
            <MyComponent value={this.state.value} onChange={(value) => { this.setState({
              value
            })}} type='bankCard'/>
        )
    }
}
