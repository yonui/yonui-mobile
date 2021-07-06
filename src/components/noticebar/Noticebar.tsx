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
  style?: object
  titleEllipsis?: boolean
  autoplayInterval?: number
  speed?: number
  showNum?: number
  doAction?: boolean
  onSelect?: (value) => void
}

export default class Noticebar extends Component<YonuiNoticeBarProps, any> {
  getNoticeBarProps = () => {
    const { autoplayInterval = 3000, speed = 300 } = this.props
    return {
      autoplayInterval: autoplayInterval,
      speed: speed
    }
  }

  _onClick = (item) => {
    const { doAction, onSelect } = this.props
    if (!doAction && item.url) {
      window.location.href = item.url
    } else {
      onSelect?.(item)
    }
  }

  renderNotice = () => {
    const { data = [], style, titleEllipsis = true, showNum = 3 } = this.props
    const marqueeEllipsisStyle = titleEllipsis ? {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    } : {}
    const marqueeStyle = { color: '#111', ...marqueeEllipsisStyle, ...style }
    return data.map((item, index) => {
      if (index >= showNum) return null
      return (
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
          onClick={() => this._onClick(item)}
          marqueeProps={{ loop: !titleEllipsis, style: marqueeStyle }}
        >
          {item.title}
        </NoticeBar>
      )
    })?.filter(item => item && item)
  }

  render () {
    return (
      <Carousel
        vertical
        dots={false}
        autoplay
        infinite
        {...this.getNoticeBarProps()}
      >
        {this.renderNotice()}
      </Carousel>
    )
  }
}
