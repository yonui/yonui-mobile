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
                label='日期范围' value={[ start, end]} onChangeDate={ this.onChangeDate}
                onStartChange={(start)=>{this.setState({start})}}
                onEndChange={(end)=>{this.setState({end})}}
              />
              {/* <Picker label='日期选择'/> */}
            </div>
        )
    }
}
