import React from 'react'

export interface ItemBriefProps {
  content?: string
  children?: any[]
  className?: string
  style?: React.CSSProperties
}
export default class ListItemBrief extends React.Component<ItemBriefProps, any> {
  static defaultProps = {
    content: '',
    children: []
  }

  render () {
    const { children, className, style, content } = this.props
    return (
      <div style={style} className={className}>{children && children.length ? children : content}</div>
    )
  }
}
