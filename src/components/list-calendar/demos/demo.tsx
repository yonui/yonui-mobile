/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      value: [],
      value1: []
    }
  }
  onConfirm = (startDateTime: Date, endDateTime: Date, value: string) =>{
    this.setState({
      [value]: [startDateTime,endDateTime]
    })
  }
  render() {
    return (
      <div>
        <MyComponent label="日历组件" arrow={true} onConfirm={(startDateTime: Date, endDateTime: Date)=>{this.onConfirm(startDateTime,endDateTime,'value')}} value={this.state.value}/>
        <MyComponent label="日历组件" type='range' onConfirm={(startDateTime: Date, endDateTime: Date)=>{this.onConfirm(startDateTime,endDateTime,'value1')}} value={this.state.value1}/>
      </div>
    )
  }
}
