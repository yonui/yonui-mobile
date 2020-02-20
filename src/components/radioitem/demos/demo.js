/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import RadioItem from '../index';
import '../style';
import './demo.less';
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
                <span style={{ fontSize: 14 ,paddingTop:20,display:'inline-block'}}>RadioItem</span>
                <div>
                    {data.map(i => (
                        <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </div>
            </div>
        )
    }
}
