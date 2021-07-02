import React, { Component } from 'react'
import { Carousel, NoticeBar } from 'antd-mobile'
import defaultIcon from './style/notice.png'
interface DataItem {
  key?: string | number
  icon?: string
  type?: string
  title?: string
  url?: string
}

interface YonuiNoticeBarProps {
  data: DataItem[]
  noticeLoop?: boolean
  style?: object
  titleEllipsis?: boolean
  onClick?: (value) => void
}

export default class Noticebar extends Component<YonuiNoticeBarProps, any> {
  renderNotice = () => {
    const { data = [], onClick, style, titleEllipsis = true } = this.props
    const marqueeEllipsisStyle = titleEllipsis ? {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    } : {}
    const marqueeStyle = { color: '#111', ...marqueeEllipsisStyle, ...style }
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
        marqueeProps={{ loop: !titleEllipsis, style: marqueeStyle }}
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
        autoplayInterval={3000}
        infinite
      >
        {this.renderNotice()}
      </Carousel>
    )
  }
}
