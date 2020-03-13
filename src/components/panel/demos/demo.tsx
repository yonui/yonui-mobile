/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Panel from '../index'
import { Button } from 'antd-mobile'
import '../style'
import './demo.less'
const dataList = [
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }
].map(obj => ({
  icon: `https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`,
  title: obj.title
}))
export default class Demo extends Component<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {

    }
  }

  onClick = (key: string) => () => {
    console.log({
      [key]: !this.state[key]
    })
    this.setState({
      [key]: !this.state[key]
    })
  }

  callback = (col: number) => {
    console.log(col)
  }

  render () {
    const { showPanel1, showPanel2, showPanel3, showPanel4, showPanel5, showPanel6 } = this.state
    return (
      <div>
        <Panel show={showPanel1} onClose={this.onClick('showPanel1')} options={[dataList[0], dataList[1]]} title='分享到' type='fixed' callback={this.callback} />
        <Panel show={showPanel2} onClose={this.onClick('showPanel2')} options={[...dataList,dataList[0]]} title='分享到' type='fixed' callback={this.callback} />
        <Panel show={showPanel3} onClose={this.onClick('showPanel3')} options={[dataList, [dataList[0], dataList[1]]]} title='分享到' type='fixed' callback={this.callback} />

        <Panel show={showPanel4} onClose={this.onClick('showPanel4')} options={[dataList[0], dataList[1]]} title='分享到' type='slideable' callback={this.callback} />
        <Panel show={showPanel5} onClose={this.onClick('showPanel5')} options={[...dataList, ...dataList]} title='分享到' type='slideable' callback={this.callback} />
        <Panel show={showPanel6} onClose={this.onClick('showPanel6')} options={[dataList, [dataList[0], dataList[1]]]} title='分享到' type='slideable' callback={this.callback} />

        <Button onClick={this.onClick('showPanel1')}>固定-活动面板-少选项</Button>
        <Button onClick={this.onClick('showPanel2')}>固定-活动面板-最多5个选项</Button>
        <Button onClick={this.onClick('showPanel3')}>固定-活动面板-多行</Button>

        <Button onClick={this.onClick('showPanel4')}>滑动-活动面板-少选项</Button>
        <Button onClick={this.onClick('showPanel5')}>滑动-活动面板-多选项</Button>
        <Button onClick={this.onClick('showPanel6')}>滑动-活动面板-多行</Button>

      </div>
    )
  }
}
