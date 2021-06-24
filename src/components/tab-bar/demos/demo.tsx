/**
 * @name: TabBottom/TabBar
 * @description: 底部标签栏
 */
import React from 'react'
import TabBar from '../index'
import '../style/index.less'

const extradata = [
  {
    key: 'Life',
    title: 'Life',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
    }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
    }}
    />
  },
  {
    key: 'Koubei',
    title: 'Koubei',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
    }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
    }}
    />
  },
  {
    key: 'Friend',
    title: 'Friend',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
    }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
    }}
    />
  },
  {
    key: 'My',
    title: 'My',
    icon: { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' },
    selectedIcon: { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }
  },
]

export default class TabBarExample extends React.Component {
  switchTab = (key) => {
    console.log("select", key)
  }
  render() {
    return (
      <div style={{ height: 400 }}>
        <TabBar itemList={extradata} onSwitch={this.switchTab}></TabBar>
      </div>
    );
  }
}
