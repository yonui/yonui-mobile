import React from 'react'

export interface ItemBriefProps {
  content?: string
  children?: any[]
}
export default class ListItemBrief extends React.Component<ItemBriefProps, any> {
  static defaultProps = {
    content: '',
    children: []
  }

  render () {
    const { children } = this.props
    return (
      <div>{children && children.length ? children : this.props.content}</div>
    )
  }
}
