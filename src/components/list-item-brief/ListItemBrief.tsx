import React from 'react'

export interface ItemBriefProps {
  content?: string
  children?: Array<any>
}
export default class  ListItemBrief extends React.Component<ItemBriefProps, any> {
  static defaultProps = {
    content: '',
    children: []
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    const { children } = this.props
    return (
      <div>{children && children.length ? children : this.props.content}</div>
    )
  }
}

