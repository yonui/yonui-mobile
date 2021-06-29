import React, { Component } from 'react'
import { Carousel, NoticeBar } from 'antd-mobile'
import defaultIcon from './style/notice.png'
interface DataItem {
  key: string | number
  icon: string
  type: string
  title: string
  url: string
}

interface YonuiNoticeBarProps {
  data: DataItem[]
  noticeLoop?: boolean
  style?: object
  onClick?: (value) => void
}

export default class Noticebar extends Component<YonuiNoticeBarProps, any> {
  renderNotice = () => {
    const { data = [], onClick, style } = this.props
    return data.map(item => (
      <NoticeBar
        className='yonui-notice'
        key={item.key}
        mode='link'
        icon={
          <div className='yonui-notice-title'>
            <img className='yonui-notice-title-icon' src={item.icon || defaultIcon} />
            <span className='yonui-notice-title-text'>{item.type}</span>
            <span className='split-line' />
          </div>
        }
        onClick={() => {
          if (onClick) {
            onClick(item)
          } else if (item.url) {
            window.location.href = item.url
          }
        }}
        marqueeProps={{ loop: true, style: { color: '#111', ...style } }}
      >
        {item.title}
      </NoticeBar>
    ))
  }

  render () {
    return (
      <Carousel
        vertical
        dots={false}
        autoplay
        infinite
      >
        {this.renderNotice()}
      </Carousel>
    )
  }
}
