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
        "minDate": "",
        "arrow": true,
        "className": "",
        "title": "",
        "required": false,
        "extra": "请选择",
        "disabled": true,
        "value": "",
        "format": "YYYY-MM-DD",
        "dateMode": "picker-datetime",
        "label": "日期选择",
        "use12Hours": false,
        "minuteStep": 1,
        "maxDate": "",
        "splitLine": true,
        "children": []
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
