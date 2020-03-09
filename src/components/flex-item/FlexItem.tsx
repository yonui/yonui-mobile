import React from 'react'

import { Flex } from 'antd-mobile'

export interface FlexItemProps {

  flex?: string
  content?: string
  style?: React.CSSProperties
}
export default class FlexItem extends React.Component<FlexItemProps, any> {
  render () {
    return (
      <Flex.Item className={this.props.flex === '1' ? 'am-flexbox-item-flex' : 'am-flexbox-item-auto'}
        style={{
          ...this.props.style
        }}>
        {this.props.children && this.props.children.length ? this.props.children : this.props.content}
      </Flex.Item>
    )
  }
}
