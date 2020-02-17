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

                <span style={{ fontSize: 14 }}>RadioItem</span>
                <div>
                    {data.map(i => (
                        <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </div>
                <hr></hr>
                <span style={{ fontSize: 14 }}> Custoemd Radio</span>
                <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</Radio>
            </div>
        )
    }
}
