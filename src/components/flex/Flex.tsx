import React from 'react'

import { Flex } from 'antd-mobile'

export interface MDFFlexProps {
  style?: React.CSSProperties
}
export default class MDFFlex extends React.Component<MDFFlexProps, any> {
  render () {
    console.log('FlexItemProps: ', this.props)
    return (
      <Flex { ...this.props} style={{ ...this.props.style }}>
        {this.props.children}
      </Flex>
    )
  }
}
