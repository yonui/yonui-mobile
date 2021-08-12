/**
 * @name: Radio
 * @description: 选项
 */
import React, { Component } from 'react';
import Radio from '../index';
import '../style';
import './demo.less';
const selectData = [
  { value: 'value1', text: '选项1选项1选项1' },
  { value: 'value2', text: '选项2' },
  { value: 'value5', text: '选项3', disabled: true }
]
export default class Demo1 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ['value1', 'value2'],
    }
  }
  onChange = (value: string[], data: any[]) => {
    console.log(value);
    this.setState({
      value
    });
  };
  render() {
    return (
      <div>
        <Radio dataSource={selectData} label='标题' mode='list' onChange={this.onChange} tagSize='sm' singleLine checkedValue={this.state.value} />
        <Radio dataSource={selectData} label='标题' mode='tag' onChange={this.onChange} tagSize='sm' canMultiple />
      </div>
    )
  }
}
