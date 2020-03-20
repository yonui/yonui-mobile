/**
 * @name: Panel
 * @description: 分享活动
 */
import React, { Component } from 'react'
import sharePanel from '../index'
import '../style'
import './demo.less'
const dataList = [
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }
].map(obj => ({
  icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
  title: obj.title
}))
export default class Demo1 extends Component {
  showSharePanel = () => {
    sharePanel.showSharePanel({
      options: this.dataList,
      title: '分享到',
      message: 'I am description, description, description'
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' })
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms')
        setTimeout(resolve, 1000)
      })
    })
  }

  render () {
    return (
      <button type='primary' onClick={this.showSharePanel}>分享活动面板</button>
    )
  }
}
