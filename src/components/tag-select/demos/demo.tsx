/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const selectData = [
  {value: 'value1',desc: 'item1'},
  {value: 'value2',desc: 'item2'},
  {value: 'value3',desc: 'item3'},
  {value: 'value4',desc: 'item4'},
  {value: 'value5',desc: 'item5'}
]
export default class Demo extends Component {
    render() {
        return (
            <MyComponent selectData={selectData} selectedValue='value2' size='lg'/>
        )
    }
}
