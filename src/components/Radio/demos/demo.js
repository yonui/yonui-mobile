/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Radio from '../index';
import '../style';
import './demo.less';
const RadioItem = Radio.RadioItem
export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    onChange = (value) => {
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

                
                <span style={{ fontSize: 14 ,paddingTop:20,display:'inline-block'}}>默认选中</span>
                <div>
                <Radio defaultChecked onChange={e => console.log('checkbox', e)}>默认选中</Radio>
                </div>
            </div>
        )
    }
}
