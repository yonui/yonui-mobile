/**
 * @name: Demo Name
 * @description: Demo Description
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
        "dateMode": "picker-month",
        "minuteStep": 1,
        "splitLine": true,
        "arrow": true,
        "extra": "请选择",
        "value": "2020-05",
        "onChangeDate": "ƒ () {}",
        "children": [],
        "maxDate": "",
        "minDate": ""
      }
        return (
            <React.Fragment>
              <MyComponent {...props} />
              {/* <MyComponent label='time' dateMode='picker-date' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-datetime' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-month' onChangeDate={(val)=>{ this.setState({value: val})}}  />
              <MyComponent label='time' dateMode='picker-year' onChangeDate={(val)=>{ this.setState({value: val})}}  /> */}
            </React.Fragment>
        )
    }
}
