/**
 * @name: Popover
 * @description: 气泡
 */
import React, { Component } from 'react';
import Popover from '../index';
import '../style';
import './demo.less';

export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: false,
      // visible2: false,
      // visible3: false,
      visible4: false
    }
  }

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  handleVisibleChange2 = (visible) => {
    this.setState({
      visible2: visible,
    });
  }

  handleVisibleChange3 = (visible) => {
    this.setState({
      visible3: visible,
    });
  }

  handleVisibleChange4 = (visible) => {
    this.setState({
      visible4: visible,
    });
  }

  onSelect = (node) => {
    console.log(node)
  }

  render() {
    return (
      <div>
        {/* <Popover
          visible={this.state.visible}
          placement={'bottomRight'}
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项', url: '/aaa' }
          ]}
          onVisibleChange={this.handleVisibleChange}
          style={{ color: 'red' }}
          onSelect={this.onSelect}
        >
          <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
        </Popover>

        <Popover
          visible={this.state.visible2}
          placement={'bottomRight'}
          size={'md'}
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一二三四五六七八' },
            { key: "2", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一' },
            { key: "3", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
          ]}
          onVisibleChange={this.handleVisibleChange2}
        >
          <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 深色</span>
        </Popover>

        <Popover
          dark={false}
          visible={this.state.visible3}
          placement={'bottomRight'}
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' },
            { key: "2", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: 'te' }
          ]}
          onVisibleChange={this.handleVisibleChange3}
        >
          <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色</span>
        </Popover> */}

        <Popover
          dark={false}
          size={'md'}
          visible={this.state.visible4}
          placement={'bottomLeft'}
          data={[
            { key: "1", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一二三四五六七八' },
            { key: "2", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项一' },
            { key: "3", icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
          ]}
          onVisibleChange={this.handleVisibleChange4}
        >
          <span style={{ "display": 'inline-block', 'line-height': 40 }}>此处触发pop展开和关闭 浅色无icon</span>
        </Popover>
      </div>
    )
  }
}
