import React from 'react'
import classnames from 'classnames'
export interface LabelProps extends React.defaultProps{
  label?: string // 文本大小
  type?: 'default' | 'primary' | 'border' | 'label'
  color?: string
  bgColor?: string
  width?: string
  textAlign?: 'left' | 'right' | 'center'
}
export default class Label extends React.Component<LabelProps> {
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
    const { label, style, className, color, type, bgColor, width, textAlign, ...other } = this.props
    const sty = { ...this.getStyle(type, color, bgColor), ...style, width, textAlign }
    const cls = classnames(className, 'yonui-tag', {
      'label-type': type === 'label'
    })
    return (
      <span className={cls} style={sty} {...other}>{label}</span>
    )
  }
}
