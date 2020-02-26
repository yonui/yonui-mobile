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
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible}
                    mode={'dark'}
                    overlay={[
                        (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                        (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>Mycode</Item>),
                        (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                            <span style={{ marginRight: 5 }}>Help</span>
                        </Item>),
                    ]}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
                </Popover>

                <Popover
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible2}
                    overlay={[
                        (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">浅色1</Item>),
                        (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>浅色2</Item>),
                        (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                            <span style={{ marginRight: 5 }}>浅色3</span>
                        </Item>),
                    ]}
                    onVisibleChange={this.handleVisibleChange2}
                >
                    <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色</span>
                </Popover>
            </div>
        )
    }
}
