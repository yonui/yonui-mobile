/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const onChange = (v: any) => {
  console.log(v)

}
export default class Demo extends Component {
    render() {
        return (
            <MyComponent count={5} allowHalf defaultValue={1} onChange={onChange}/>
        )
    }
}
