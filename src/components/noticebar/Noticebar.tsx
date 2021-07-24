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
  typeColor?: string
  onSelect?: (value) => void
}

export default class Noticebar extends Component<YonuiNoticeBarProps, any> {
  // 获取可配置的参数
  getNoticeBarProps = () => {
    const { autoplayInterval = 3000, speed = 300 } = this.props
    return {
      autoplayInterval: autoplayInterval + speed,
      speed: speed
    }
  }

  // 获取文字样式
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

  // 获取外层总体样式, 排除文字样式
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

  // 点击事件
  _onClick = (item) => {
    // 优先级 data中配置的url > 动作绑定的onSelect事件
    const { doAction, onSelect } = this.props
    if (!doAction && item.url) {
      window.location.href = item.url
    } else {
      onSelect?.(item)
    }
  }

  // 每条消息的渲染函数
  renderNotice = () => {
    const { data = [], showNum = 3, lineClamp, typeColor } = this.props
    // 消息的样式
    // display、white-space、-webkit-line-clamp配合，实现超过某行省略显示(兼容性可能有问题)
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
    // 消息展示数小等于0或data无数据时，显示暂无公告
    if (showNum <= 0 || data.length === 0) {
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
              <span className='yonui-notice-title-text' style={{ color: typeColor }}>{item.type}</span>
              <span className='split-line' />
            </div>
          }
          onClick={() => this._onClick(item)}
          marqueeProps={marqueeProps}
        >
          {item.title}
        </NoticeBar>
      )
    })?.filter(item => item && item) // 轮播元素过滤掉null
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
