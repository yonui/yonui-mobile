import React from 'react'
import classnames from 'classnames'
import { Flex } from 'antd-mobile'

export interface MDFFlexProps {
  style?: React.CSSProperties
  className?: string
  // nid?: string
  onClick: () => void
  onLongPress: () => void
}
export default class MDFFlex extends React.Component<MDFFlexProps, any> {
  static Item: any
  timeOutEvent: any
  onClick = () => {
    this.props.onClick && this.props.onClick()
  }

  touchStart = () => {
    const { onLongPress } = this.props
    this.timeOutEvent = setTimeout(function () {
      this.timeOutEvent = 0;
      // console.log('长按了');
      onLongPress && onLongPress()
    }, 500);
  }

  touchMove = () => {
    clearTimeout(this.timeOutEvent);
    this.timeOutEvent = 0;
  }

  touchEnd = () => {
    clearTimeout(this.timeOutEvent);
    // if (this.timeOutEvent != 0) {
    //     console.log('点击了');
    // }
    return false
  }

  render () {
    const { className, ...other } = this.props
    let cls = classnames(className, 'yonui-mobile-flex')
    const nid = this.props.nid
    console.log('flexNid', nid)
    // nid为undefined为运行态
    if (typeof (nid) === 'undefined') {
      cls = 'yonui-mobile-flex-runtime'
    }
    return (
      <Flex
        className={cls}
        {...other}
        onClick={this.onClick}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      >
        {this.props.children}
      </Flex>
    )
  }
}
