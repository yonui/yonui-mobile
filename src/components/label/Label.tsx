import React from 'react'
import classnames from 'classnames'
import { Icon } from 'antd-mobile'
export interface LabelProps extends React.defaultProps{
  label?: string // 文本大小
  type?: 'default' | 'primary' | 'border' | 'label'
  color?: string
  bgColor?: string
  width?: string
  textAlign?: 'left' | 'right' | 'center'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
}
export default class Label extends React.PureComponent<LabelProps> {
  static defaultProps = {
    // style: {
    //   // color: 'rgba(255,255,255,1)',
    //   // background: 'rgba(0,199,230,1)'
    // }
  }

  getStyle = (type?: 'default' | 'primary' | 'border' | 'label', color?: string, bgColor?: string) => {
    switch (type) {
      case 'label': {
        return ({
          color: color,
          backgroundColor: bgColor
        })
      }
      case 'primary': {
        return ({
          color: '#ffffff',
          backgroundColor: color
        })
      }
      case 'border': {
        return ({
          color: color,
          backgroundColor: '#ffffff',
          border: `1px solid ${color}`
        })
      }
      case 'default':
      default: {
        return ({
          color: color,
          backgroundColor: bgColor
        })
      }
    }
  }

  render () {
    const { label, style, className, color, type, bgColor, width, textAlign, leftIcon, rightIcon, ...other } = this.props
    const sty: React.CSSProperties = { ...this.getStyle(type, color, bgColor), ...style, width, justifyContent: textAlign && alignMap[textAlign] }
    const cls = classnames(className, 'yonui-tag', {
      'label-type': type === 'label'
    })
    const leftIconEle = typeof leftIcon === 'string' ? <Icon type={leftIcon} size='xxs' /> : leftIcon
    const rightIconEle = typeof rightIcon === 'string' ? <Icon type={rightIcon} size='xxs' /> : rightIcon
    return (
      <span className={cls} style={sty} {...other}>
        {leftIcon && leftIconEle}
        <span className='yonui-mobile-tag-text'>{label}</span>
        {rightIcon && rightIconEle}
      </span>
    )
  }
}
