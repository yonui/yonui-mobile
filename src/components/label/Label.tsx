import React from 'react'
export interface LabelProps {
  type?: string // 文本内容
  label?: string // 文本大小
  style?: {} // 自定义样式
}
export default class Label extends React.Component<LabelProps> {

  static defaultProps = {
    style: {
      color:'rgba(255,255,255,1)',
      background:'rgba(0,199,230,1)'
    }
  }
  render() {
    const { label, style } = this.props
    const labelClassName = `label`
    console.log('labelstyle: ',style);
    return (
      <span className={labelClassName} style={{ ...style }}>{label}</span>
    )
  }
}
