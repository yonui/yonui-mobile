import React from 'react'
export interface LabelProps {
  type?: string // 文本内容
  label?: string // 文本大小
  style?: React.CSSProperties
}
export default class Label extends React.Component<LabelProps> {
  static defaultProps = {
    style: {
      color: 'rgba(255,255,255,1)',
      background: 'rgba(0,199,230,1)'
    }
  }

  render () {
    const { label, style } = this.props
    const labelClassName = 'label'
    return (
      <span className={labelClassName} style={{ ...style }}>{label}</span>
    )
  }
}
