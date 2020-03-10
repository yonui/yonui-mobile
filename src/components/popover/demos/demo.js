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
    handleVisibleChange2 = (visible,a) => {
        this.setState({
            visible2: visible,
        });
    }
    handleVisibleChange3 = (visible,a) => {
        this.setState({
            visible3: visible,
        });
    }
    handleVisibleChange4 = (visible,a) => {
        this.setState({
            visible4: visible,
        });
    }
    render() {
        return (
            <div>
                <Popover
                    visible={this.state.visible}
                    placement={'bottomRight'}
                    overlayData={[{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项' }]}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
                </Popover>

                <Popover
                    visible={this.state.visible2}
                    placement={'bottomRight'}
                    size={'md'}
                    overlayData={[{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项一二三四五六七八' },
                    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项一' },
                    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项' }]}
                    onVisibleChange={this.handleVisibleChange2}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
                </Popover>

                <Popover
                    dark={false}
                    visible={this.state.visible3}
                    placement={'bottomRight'}
                    overlayData={[
                        { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项' },
                        { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: 'te' }
                    ]}
                    onVisibleChange={this.handleVisibleChange3}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色</span>
                </Popover>

                <Popover
                    dark={false}
                    size={'md'}
                    visible={this.state.visible4}
                    placement={'bottomLeft'}
                    overlayData={[{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项一二三四五六七八' },
                    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项一' },
                    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项' }]}
                    onVisibleChange={this.handleVisibleChange4}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色无icon</span>
                </Popover>
            </div>
        )
    }
}
