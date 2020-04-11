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
            value: 0,
        }
    }
    onChange = (value: any) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };
    render() {
        const data = [
            { value: 0, label: 'doctor' },
            { value: 1, label: 'bachelor' },
        ];
        return (
            <div>
              <Radio dataSource={selectData} label='标题' mode='tag' tagSize='sm'  singleLine/>
              <Radio dataSource={selectData} label='标题' mode='list' />
              <Radio dataSource={selectData} label='标题' mode='tag' tagSize='sm'  isMultiple/>
              <Radio dataSource={selectData} label='标题' mode='list' isMultiple/>
            </div>
        )
    }
}
