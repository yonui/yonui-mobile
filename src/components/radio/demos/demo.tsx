/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Radio from '../index';
import '../style';
import './demo.less';
const selectData = [
  {value: 'value1',desc: 'item1'},
  {value: 'value2',desc: 'item2'},
  {value: 'value3',desc: 'item3'},
  {value: 'value4',desc: 'item4'},
  {value: 'value5',desc: 'item5', disabled: true}
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
              <Radio dataSource={selectData} label='label' mode='default' tagSize='sm' multiple/>
              <Radio dataSource={selectData} label='label' mode='tag' tagSize='sm'  multiple/>
              <Radio dataSource={selectData} label='label' mode='list' multiple/>
              <Radio dataSource={selectData} label='label' mode='default' lines='single' multiple/>
              <Radio dataSource={selectData} label='label' mode='tag' lines='multiple' tagSize='sm'  multiple/>
              <Radio dataSource={selectData} label='label' mode='list' multiple/>
            </div>
        )
    }
}
