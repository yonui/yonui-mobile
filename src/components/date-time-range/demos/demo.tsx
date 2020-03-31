/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Picker from '../../date-time-picker'
import '../../date-time-picker/style'
import '../style';
import './demo.less';
export default class Demo extends Component<any, any> {

  state = {
    value: undefined
  }
    render() {
      console.log(this.state.value)
        return (
            <div>
              <MyComponent label='日期范围' value={this.state.value} onConfirm={(start,end)=>{this.setState({value: [start, end]})}}/>
              <Picker label='日期选择'/>
            </div>
        )
    }
}
