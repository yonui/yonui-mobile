import React, { Component } from 'react'

import { Result } from 'antd-mobile'
import './style';

export interface EmptyProps {

  mode?: string,
  message: string,
  imgUrl: string
}

import noDataSrc from './style/result/noData.png'
import client404Src from './style/result/client404.png'
import blankPageSrc from './style/result/blankPage.png'
import errorSrc from './style/result/error.png'
import reviewSrc from './style/result/review.png'
import serverSrc from './style/result/server.png'
import noNetworkSrc from './style/result/noNetwork.png'
const data = [
  { value: 'noData', text: '暂无文件', src: noDataSrc },
  { value: 'client', text: '404', src: client404Src },
  { value: 'blankPage', text: '搜索空白页', src: blankPageSrc },
  { value: 'error', text: '研发中、错误', src: errorSrc },
  { value: 'review', text: '审批审核', src: reviewSrc },
  { value: 'server', text: '500、服务器', src: serverSrc },
  { value: 'noNetwork', text: '暂无网络', src: noNetworkSrc }
]
export default class Empty extends Component<EmptyProps>{

  static defaultProps = {
    mode: 'noData'
  }
  render() {
    const { mode, message } = this.props
    let msg = message
    let src = ''
    data.filter((item) => {
      if (item.value === mode) {
        msg = item.text
        src = item.src
      }
    })
    return (
      <Result
        className='empty-page'
        img={<img src={src} alt="" />}
        message={message || msg}
      />
    )
  }
}
