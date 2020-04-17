/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Radio from '../index';
import '../style';
import './demo.less';
const selectData = [
  {value: 'value1',desc: '选项'},
  {value: 'value2',desc: '选项'},
  {value: 'value5',desc: '选项', disabled: true}
]
export default class Demo1 extends Component {
    constructor(props : any) {
        super(props);
        this.state = {
            value: ['value1'],
        }
    }
    onChange = (...a:any) => {
        console.log(a);
        // this.setState({
        //     value,
        // });
    };
    render() {
        const data = [
            { value: 0, label: 'doctor' },
            { value: 1, label: 'bachelor' },
        ];
        return (
            <div>
              <Radio dataSource={selectData} label='标题' mode='tag' checkedValue={this.state.value}  onChange={this.onChange} tagSize='sm'  singleLine/>
              <Radio dataSource={selectData} label='标题' mode='list' />
              <Radio dataSource={selectData} label='标题' mode='tag' checkedValue={this.state.value}  onChange={this.onChange} tagSize='sm'  isMultiple/>
              <Radio dataSource={selectData} label='标题' mode='list' isMultiple/>
            </div>
        )
    }
}
