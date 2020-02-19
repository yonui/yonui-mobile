/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import { List, Switch } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import '../style';
import './demo.less';
const now = new Date();

const extra: any = {
    '2017/07/15': { info: 'Disable', disable: true },
  };
export default class Demo1 extends Component<any, any>{
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    constructor(props: any) {
        super(props);
        this.state = {
          en: false,
          show: false,
          config: {},
        };
      }
      renderBtn(zh: any, en: any, config: any= {}) {
        config.locale = this.state.en ? enUS : zhCN;
    
        return (
          <List.Item arrow="horizontal"
            onClick={() => {
              document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
              this.setState({
                show: true,
                config,
              });
            }}
          >
            {this.state.en ? en : zh}
          </List.Item>
        );
      }
    
      changeLanguage = () => {
        this.setState({
          en: !this.state.en,
        });
      }
      onSelectHasDisableDate = (dates: Date) => {
        console.warn('onSelectHasDisableDate', dates);
      }
    
      onConfirm = (startTime: Date, endTime: Date) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
          show: false,
          startTime,
          endTime,
        });
      }
    
      onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
          show: false,
          startTime: undefined,
          endTime: undefined,
        });
      }
      getDateExtra = (date: Date) => extra[+date];
    render() {
        return (
            <div>
        <List className="calendar-list" style={{ backgroundColor: 'white' }}>
          <List.Item className="item" extra={<Switch className="right" checked={!this.state.en} onChange={this.changeLanguage} />}>
            {this.state.en ? 'Chinese' : '中文'}
          </List.Item>
          {this.renderBtn('选择日期区间', 'Select Date Range')}
          {this.renderBtn('选择日期时间区间', 'Select DateTime Range', { pickTime: true })}
          {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
          {this.renderBtn('选择日期时间', 'Select DateTime', { type: 'one', pickTime: true })}
          {this.renderBtn('选择日期区间(快捷)', 'Select Date Range (Shortcut)', { showShortcut: true })}
          {this.renderBtn('选择日期时间区间(快捷)', 'Select DateTime Range (Shortcut)', { pickTime: true, showShortcut: true })}
          {this.renderBtn('大行距', 'XL row size', { rowSize: 'xl' })}
          {this.renderBtn('不无限滚动', 'infinite: false', { infinite: false })}
          {this.renderBtn('水平进入', 'Horizontal enter', { enterDirection: 'horizontal' })}
          {this.renderBtn('默认选择范围', 'Selected Date Range', { defaultValue: [new Date(+now - 86400000), new Date(+now - 345600000)] })}
          {this.renderBtn('onSelect API', 'onSelect API', {
            onSelect: (date: Date, state: any) => {
              console.log('onSelect', date, state);
              return [date, new Date(+now - 604800000)];
            },
          })}
          {
            this.state.startTime &&
            <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
          }
          {
            this.state.endTime &&
            <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
          }
        </List>
        <MyComponent
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          getDateExtra={this.getDateExtra}
          defaultDate={now}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
        />
      </div>
        )
    }
}
