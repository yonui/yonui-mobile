import React, { Component } from 'react'
import { Carousel, NoticeBar } from 'antd-mobile'
import { MarqueeProps } from 'antd-mobile/lib/notice-bar/Marquee'
import defaultIcon from './style/notice.png'
interface DataItem {
  key?: string | number
  icon?: string
  type?: string
  title?: string
  url?: string
}

interface YonuiNoticeBarProps {
  data?: DataItem[]
  style?: any
  autoplayInterval?: number
  speed?: number
  showNum?: number
  lineClamp?: number
  doAction?: boolean
  onSelect?: (value) => void
}

export default class Noticebar extends Component<YonuiNoticeBarProps, any> {
  getNoticeBarProps = () => {
    const { autoplayInterval = 3000, speed = 300 } = this.props
    return {
      autoplayInterval: autoplayInterval + speed,
      speed: speed
    }
  }

  getTextStyle = () => {
    const { style = {} } = this.props
    return {
      color: style.color,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle,
      textDecoration: style.textDecoration
    }
  }

  getNoticeStyle = () => {
    const { style = {} } = this.props
    return {
      ...style,
      color: 'umset',
      fontSize: 'unset',
      fontWeight: 'unset',
      fontStyle: 'unset',
      textDecoration: 'unset'
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
    const { data = [], showNum = 3, lineClamp } = this.props
    const marqueeProps: MarqueeProps = {
      loop: false,
      style: {
        display: '-webkit-box',
        whiteSpace: 'break-spaces',
        WebkitLineClamp: lineClamp,
        margin: '0.2rem 0',
        ...this.getTextStyle()
      }
    }
    if (showNum === 0 || data.length === 0) {
      return (
        <NoticeBar
          style={this.getNoticeStyle()}
          className='yonui-notice'
          key={0}
          mode='link'
          icon={
            <div className='yonui-notice-title'>
              <img className='yonui-notice-title-icon' src={defaultIcon} />
              <span className='yonui-notice-title-text'>暂无公告</span>
            </div>
          }
          marqueeProps={marqueeProps}
        />)
    }
    return data.map((item, index) => {
      if (index >= showNum) return null
      return (
        <NoticeBar
          style={this.getNoticeStyle()}
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
          marqueeProps={marqueeProps}
        >
          {item.title}
        </NoticeBar>
      )
    })?.filter(item => item && item)
  }

  render () {
    return (
      <div className='yonui-noticebar'>
        <Carousel
          vertical
          dots={false}
          autoplay
          infinite
          {...this.getNoticeBarProps()}
        >
          {this.renderNotice()}
        </Carousel>
      </div>
    )
  }
}
