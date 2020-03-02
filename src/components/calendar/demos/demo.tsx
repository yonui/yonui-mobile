/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import { Button, List } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import '../style';
import './demo.less';
const now = new Date();
import { dateFormat } from '../../_utils'
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
        <Button
          onClick={() => {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            this.setState({
              show: true,
              config,
            });
          }}
        >
          {this.state.en ? en : zh}
        </Button>
      );
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
    render() {
        return (
          <div>
            {this.renderBtn('选择日期区间', 'Select Date Range')}
            {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
            <MyComponent
              {...this.state.config}
              visible={this.state.show}
              onCancel={this.onCancel}
              onConfirm={this.onConfirm}
              onSelectHasDisableDate={this.onSelectHasDisableDate}
              defaultDate={now}
              defaultValue={[new Date(now), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)]}
              minDate={new Date(+now - 5184000000)}
              maxDate={new Date(+now + 31536000000)}
            />
            {
              this.state.startTime &&
              <List.Item>Time1: {dateFormat(this.state.startTime, 'yyyy-MM-dd')}</List.Item>
            }
            {
              this.state.endTime &&
              <List.Item>Time2: {dateFormat(this.state.endTime, 'yyyy-MM-dd')}</List.Item>
            }
          </div>
        )
    }
}
