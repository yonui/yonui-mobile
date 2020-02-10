// Label 基础组件-文本
import React from 'react'
import './label.less'
export interface LabelProps {
  type?: string // 文本内容
  label?: string // 文本大小
  style?: object // 自定义样式
}
export default class Label extends React.Component<LabelProps> {
  render () {
    const { type, label, style } = this.props
    const labelClassName = `label label-${type}`
    return (
      <span className={labelClassName} style={style}>{label}</span>
    )
  }
}
