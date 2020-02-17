/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
// import Radio from '../index';
import '../style';
import './demo.less';
import { Radio } from 'antd-mobile'
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

                <h3>RadioItem</h3>
                <div>
                    {data.map(i => (
                        <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </div>
                <hr></hr>
                <h3> Custoemd Radio</h3>
                <Radio className="my-radio-customed" onChange={e => console.log('checkbox', e)}>Radio Message</Radio>
            </div>
        )
    }
}
