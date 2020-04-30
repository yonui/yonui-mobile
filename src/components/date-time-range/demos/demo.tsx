/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../../date-time-picker/style'
import '../style';
import './demo.less';
const props = {
  "enterDirection": 4,
  "minDate": "2000-01-31T16:00:00.000Z",
  "className": "",
  "required": false,
  "mode": "default",
  "startLabel": "开始时间",
  "infiniteOpt": false,
  "disabled": true,
  "endLabel": "结束时间",
  "defaultDate": "2020-04-24T16:00:00.000Z",
  "pickTime": false,
  "initalMonths": 6,
  "format": "",
  "showShortcut": false,
  "splitLine": true,
  "maxDate": "2030-02-01T15:59:59.000Z",
  "defaultTimeValue": "",
  "label": "日期时间范围1",
  // "value": [ ],
  "children": []
}
export default class Demo extends Component<any, any> {

  state = {
    start: undefined,
    end: undefined
  }
  onChangeDate = ([start,end] ) => {
    this.setState({start, end})
  }
    render() {
      console.log(this.state.value)
      const { start, end} = this.state
        return (
            <div>
              {/* <MyComponent
                label='日期范围' value={[ start, end]} onChangeDate={ this.onChangeDate}
                onStartChange={(start)=>{this.setState({start})}}
                onEndChange={(end)=>{this.setState({end})}}
                mode='range'
              /> */}
              <MyComponent
                // label='日期范围' value={[ start, end]} onChangeDate={ this.onChangeDate}
                // onStartChange={(start)=>{this.setState({start})}}
                // onEndChange={(end)=>{this.setState({end})}}
                {...props}
              />
              {/* <Picker label='日期选择'/> */}
            </div>
        )
    }
}
