/**
 * @name: DateTimeRange
 * @description: 时间范围选择
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../../date-time-picker/style'
import '../style';
import './demo.less';
const props = {
  "minDate": "2000-01-31T16:00:00.000Z",
  "className": "",
  "required": false,
  "mode": "range",
  "startLabel": "",
  "infiniteOpt": false,
  "disabled": false,
  "endLabel": "",
  "defaultDate": "2020-04-24T16:00:00.000Z",
  "pickTime": false,
  "initalMonths": 6,
  "format": "",
  "showShortcut": false,
  "splitLine": true,
  "maxDate": "2030-02-01T15:59:59.000Z",
  "defaultTimeValue": "",
  "label": "日期时间范围1",
  "title": "haha",
  "children": [],
  "type": 'range',
  "visible": true
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
