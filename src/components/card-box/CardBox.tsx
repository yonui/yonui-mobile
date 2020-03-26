import React, { Component } from 'react'
import { SwipeAction } from 'antd-mobile'
import classnames from 'classnames'
interface CardBoxProps extends React.defaultProps{
  text: '删除'
  onPress?: () => void
  rightStyle?: React.CSSProperties
}

export default class CardBox extends Component<CardBoxProps> {
  static defaultProps = {
    text: '删除'
  }

  render () {
    const { text, onPress, rightStyle, style, className, children, ...other } = this.props
    const right = [{
      text, onPress, style: rightStyle, className: 'yonui-card-box-btn'
    }]
    const cls = classnames(className, 'yonui-card-box')
    return (
      <div className={cls} style={style} {...other}>
        <SwipeAction right={right}>
          {children}
        </SwipeAction>
      </div>
    )
  }
}
