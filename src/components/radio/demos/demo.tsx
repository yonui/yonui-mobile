/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Radio from '../index';
import '../style';
import './demo.less';
const selectData = [
  {value: 'value1',text: '选项1'},
  {value: 'value2',text: '选项2'},
  {value: 'value5',text: '选项3', disabled: true}
]
export default class Demo1 extends Component {
    constructor(props : any) {
        super(props);
        this.state = {
            value: ['value1'],
        }
    }
    onChange = (value: string[], data: any[]) => {
        console.log(value);
        this.setState({
            value
        });
    };
    render() {
        const data = [
            { value: 0, label: 'doctor' },
            { value: 1, label: 'bachelor' },
        ];
        return (
            <div>
              <Radio dataSource={selectData} label='标题' mode='tag'  onChange={this.onChange} tagSize='sm'  singleLine/>
              <Radio dataSource={selectData} label='标题' mode='list' onChange={this.onChange}  />
              <Radio dataSource={selectData} label='标题' mode='tag'  onChange={this.onChange} tagSize='sm'  isMultiple/>
              <Radio dataSource={selectData} label='标题' mode='list' isMultiple />
            </div>
        )
    }
}
