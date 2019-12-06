/**
 * label组件,显示文本
 * props
 * label 文本内容
 * type 文本大小
 * style 自定义样式
 */
import React from 'react'
import './index.less'
import { LabelProps } from './propType'
export default class Label extends React.Component<LabelProps> {
  render () {
    const { type, label, style } = this.props
    const labelClassName = `label label-${type}`
    return (
      <span className={labelClassName} style={style}>{label}</span>
    )
  }
}
