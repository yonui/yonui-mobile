import React from 'react'
import classnames from 'classnames'
import { Icon } from 'antd-mobile'
export interface LabelProps extends React.defaultProps{
  label?: string // 文本
  spareLabel?: string
  // type?: 'default' | 'primary' | 'border' | 'label'
  // color?: string
  // bgColor?: string
  // width?: string
  textAlign?: 'left' | 'right' | 'center'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  textClamp?: number
  textLangth?: number
  visible?: boolean
}

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
}
export default class Label extends React.PureComponent<LabelProps> {
  static defaultProps = {
    visible: true
    // style: {
    //   // color: 'rgba(255,255,255,1)',
    //   // background: 'rgba(0,199,230,1)'
    // }
  }

  // getStyle = (type?: 'default' | 'primary' | 'border' | 'label', color?: string, bgColor?: string) => {
  //   switch (type) {
  //     case 'label': {
  //       return ({
  //         color: color,
  //         backgroundColor: bgColor
  //       })
  //     }
  //     case 'primary': {
  //       return ({
  //         color: '#ffffff',
  //         backgroundColor: color
  //       })
  //     }
  //     case 'border': {
  //       return ({
  //         color: color,
  //         backgroundColor: '#ffffff',
  //         border: `1px solid ${color}`
  //       })
  //     }
  //     case 'default':
  //     default: {
  //       return ({
  //         color: color,
  //         backgroundColor: bgColor
  //       })
  //     }
  //   }
  // }

  render () {
    const { label, spareLabel, style, className, textAlign, textClamp, textLangth, leftIcon, rightIcon, visible, ...other } = this.props
    const sty: React.CSSProperties = { ...style, justifyContent: textAlign && alignMap[textAlign] }
    const cls = classnames(className, 'yonui-tag')
    const tagsCls = classnames('yonui-mobile-tag-text', 'yonui-mobile-tag-clamp')
    const leftIconEle = typeof leftIcon === 'string' ? <Icon type={leftIcon} size='xxs' /> : leftIcon
    const rightIconEle = typeof rightIcon === 'string' ? <Icon type={rightIcon} size='xxs' /> : rightIcon
    if (!visible) return null
    return (
      <span className='yonui-tag-out'>
        <span className={cls} style={sty} {...other}>
          {leftIcon && leftIconEle}
          <span className={tagsCls} style={+textClamp ? { WebkitLineClamp: textClamp, textAlign: textAlign } : { whiteSpace: 'nowrap'}}>{(textLangth === undefined || +textLangth === 0 || (label ?? spareLabel)?.length <= textLangth) ? (label ?? spareLabel) : `${(label ?? spareLabel)?.slice(0, textLangth)}...`}</span>
          {rightIcon && rightIconEle}
        </span>
      </span>
    )
  }
}
