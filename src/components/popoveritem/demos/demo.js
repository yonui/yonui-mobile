/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Item from '../index';
import '../style';
import './demo.less';


import PNG from '../../notice/style/img/popicon.png'

const myImg = src => <img src={PNG} className="am-icon am-icon-xs" alt="" />;
export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    handleVisibleChange2=(visible)=>{
        this.setState({
            visible2:visible,
        });
    }
    render() {
        return (
            <div>
                <Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>
            </div>
        )
    }
}
