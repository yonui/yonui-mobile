/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Panel from '../index';
import { Button } from 'antd-mobile'
import '../style';
import './demo.less';
const dataList = [
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
].map(obj => ({
  icon: `https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`,
  title: obj.title,
}));
export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
       show: false
    }
  }
  onClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  callback = (col: number) => {
    console.log(col)
  }

    render() {
      const { show } = this.state
        return (
            <div>
              <Panel show={show} onClose={this.onClick} options={dataList} title='分享到' type='slideable' callback={this.callback} />
              <Button onClick={this.onClick}>click</Button>
            </div>
        )
    }
}
