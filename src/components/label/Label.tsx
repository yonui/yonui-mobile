import React from 'react'
import classnames from 'classnames'
export interface LabelProps extends React.defaultProps{
  label?: string // 文本大小
  mode?: 'default' | 'primary' | 'border' | 'label'
  color?: string
  bgColor?: string
}
export default class Label extends React.Component<LabelProps> {
  static defaultProps = {
    // style: {
    //   // color: 'rgba(255,255,255,1)',
    //   // background: 'rgba(0,199,230,1)'
    // }
  }

  getStyle = (mode?: 'default' | 'primary' | 'border' | 'label', color?: string, bgColor?: string) => {
    switch (mode) {
      case 'label': {
        return ({
          color: color,
          backgroundColor: bgColor,
          lineHeight: 1.5
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
    const { label, style, className, color, mode, bgColor, ...other } = this.props
    const sty = { ...this.getStyle(mode, color, bgColor), ...style }
    const cls = classnames(className, 'yonui-tag', {
      'label-mode': mode === 'label'
    })
    return (
      <span className={cls} style={sty} {...other}>{label}</span>
    )
  }
}
