/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Card from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (
            <div>
                <Card full={true}/>
                <Card full={false} onHeaderExtraClick={()=>{console.log('onHeaderExtraClick')}}/>
            </div>
        )
    }
}
