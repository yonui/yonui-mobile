/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import  { List } from 'antd-mobile'
import '../style';
import './demo.less';
import { dateFormat } from '../../_utils'
const now = new Date()
export default class Demo1 extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date(),
            one: new Date(),
            range: [new Date(2020, 2, 1), new Date(2020, 2, 7)]
        };
    }
    onChange = (flag:string, date: any) => {
        this.setState({ 
            [`${flag}`]: date 
        });
        console.log(date)
    }
    render() {
      let { date, one, range } = this.state;
      console.log(range)
      return (
        <React.Fragment>
          <span>选择日期-单日</span>
          {one && <List.Item>{dateFormat(one, 'yyyy-MM-dd')}</List.Item>}
          <MyComponent 
            onChange={this.onChange.bind(this,'one')}
            value={one}/>
          <span>选择日期范围</span>
          {(range && range.length === 2)&& <List.Item>{`${dateFormat(range[0], 'yyyy-MM-dd')}---${dateFormat(range[1], 'yyyy-MM-dd')}`}</List.Item>}
          <MyComponent 
            onChange={this.onChange.bind(this,'range')}
            selectRange={true}
            value={range}/>
          <span>禁用日期</span>
          {date && <List.Item>{dateFormat(date, 'yyyy-MM-dd')}</List.Item>}
          <MyComponent 
            tileDisabled={({activeStartDate, date, view }) => {
              return view === 'month' && date.getDay() === 0
            }}
            onChange={this.onChange.bind(this,'date')}
            value={date}/>
        </React.Fragment>
      )
    }
}
