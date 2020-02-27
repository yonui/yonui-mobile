/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Popover from '../index';
import { Icon, Popover as PopoverAntd } from 'antd-mobile'
import '../style';
import './demo.less';

const Item = Popover.Item;

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
                <Popover
                    visible={this.state.visible}
                    overlayData={[{icon:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',label:'test1'}]}
                    onVisibleChange={this.handleVisibleChange}
                    content={<span >此处触发pop content展开和关闭 深色</span>}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
                </Popover>

                <Popover
                    dark={false}

                    visible={this.state.visible2}
                    overlayData={[{icon:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',label:'test1'},
                    {icon:null,label:'test2test2test2'}]}
                    onVisibleChange={this.handleVisibleChange2}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色</span>
                </Popover>
            </div>
        )
    }
}
