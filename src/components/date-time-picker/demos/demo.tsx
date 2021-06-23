/**
 * @name: DateTimePicker
 * @description: 日期时间选择
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
       value: ''
    }
  }

    render() {
      const props = {
        "label": "时间",
        "dateMode": "picker-time",
        "minuteStep": 1,
        "splitLine": true,
        "arrow": true,
        "extra": "请选择",
        "value": this.state.value,
        "onChangeDate": (value: any) => {this.setState({value })},
        "children": [],
        "maxDate": "",
        "minDate": ""
      }
      // const props2 = {
      //   "label": "时间",
      //   "dateMode": "picker-time",
      //   "minuteStep": 1,
      //   "splitLine": true,
      //   "arrow": true,
      //   "extra": "请选择",
      //   "value": '2012-12-12 08:15:22',
      //   "onChangeDate": (value: any) => {this.setState({value })},
      //   "children": [],
      //   "maxDate": "",
      //   "minDate": ""
      // }
        return (
            <React.Fragment>
              {/* <MyComponent {...props} use12Hours/> */}
              <MyComponent {...props} />
              {/* <MyComponent label='time' dateMode='picker-date' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-datetime' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-month' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-year' onChangeDate={(val)=>{ this.setState({value: val})}}  /> */}
            </React.Fragment>
        )
    }
}
