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
              <Radio dataSource={selectData} mode='default' tagSize='sm' checkedValue={'value1'}/>
              <Radio dataSource={selectData} mode='tag' tagSize='sm'  checkedValue={'value1'}/>
              <Radio dataSource={selectData} mode='tag-single' tagSize='lg'/>
              <Radio dataSource={selectData} mode='item' disabled tagSize='lg'/>
            </div>
        )
    }
}
