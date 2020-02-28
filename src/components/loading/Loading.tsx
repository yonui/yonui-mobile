import React, { Component } from 'react'
import { ActivityIndicator, Progress } from 'antd-mobile'
import classnames from 'classnames'
interface LoadingProps {
  content?: string
  inline?: boolean
  size?: 'small' | 'large'
  show?: boolean
  type?: 'toast' | 'jump' | 'top' | 'local'
  percent?: number
  theme?: 'dark' | 'primary' | 'light'
  className?: string
  style?: object
}
export default class Loading extends Component<LoadingProps> {
  static defaultProps = {
    inline: false,
    show: true,
    type: 'toast',
    percent: 50,
    theme: 'primary'
  }

  render () {
    const { content, inline, size, show, type, percent, theme, className, ...other } = this.props
    const themeCls = `libraui-loading-${theme}`
    const cls = classnames(`libraui-loading-${type}`, themeCls, className)
    switch (type) {
      case 'jump': {
        const position = inline ? 'normal' : 'fixed'
        return show && <Progress className={cls} unfilled={false} percent={percent} position={position} {...other} />
      }
      case 'local': {
        return <ActivityIndicator className={cls} animating={show} size={size} text={content} {...other} />
      }
      case 'toast':
      default: {
        return <ActivityIndicator className={cls} animating={show} size={size} toast text={content} {...other} />
      }
    }
  }
}
