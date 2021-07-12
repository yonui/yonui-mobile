/**
 * @name: Popover
 * @description: 气泡
 */
import React, { Component } from 'react';
import Popover from '../index';
import '../style';
import './demo.less';

export default class Demo1 extends Component {
  onSelect = (node) => {
    console.log(node)
  }

  render() {
    return (
      <div>
        <Popover
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一二三' },
            { key: "2", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一' },
            { key: "3", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
          ]}
          onSelect={this.onSelect}
        >
          <span style={{ "display": 'inline-block', 'fontSize': '12px' }}>popover</span>
        </Popover><br></br>
        <Popover
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一二三' },
            { key: "2", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一' },
            { key: "3", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
          ]}
          onSelect={this.onSelect}
        >
          <span style={{ "display": 'inline-block', 'fontSize': '12px' }}>popover</span>
        </Popover>
      </div>
    )
  }
}
