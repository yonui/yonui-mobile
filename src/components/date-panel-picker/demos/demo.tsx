/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
import { Button, List } from 'antd-mobile';
import { dateFormat } from '../../_utils'
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
export default class Demo1 extends Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            visible: false
        }
    }
    onClick = ()=> {
        this.setState({
          visible: true
        })
    }
    onDismiss = () => {
        this.setState({
          visible: false
        }) 
    }
    onOk = (date: Object) => {
        this.setState({
          visible: false,
          date
        }) 
    }
    render() {
        let { date, visible } = this.state;
        return (
          <div>
            <Button onClick={this.onClick}>显示</Button>  
            <MyComponent 
              value={date}
              visible={visible}
              onDismiss={this.onDismiss}
              onOk={this.onOk}/> 
            {
              this.state.date &&
              <List.Item>结果: {dateFormat(this.state.date, 'yyyy-MM-dd hh:mm:ss')}</List.Item>
            }  
          </div>
            
        )
    }
}
