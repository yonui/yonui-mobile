import React from 'react'
import classnames from 'classnames'
import { Flex } from 'antd-mobile'

export interface MDFFlexProps {
  style?: React.CSSProperties
  className?: string
}
export default class MDFFlex extends React.Component<MDFFlexProps, any> {
  static Item: any
  render () {
    const { className, ...other } = this.props
    const cls = classnames(className, 'yonui-mobile-flex')
    return (
      <Flex className={cls} {...other}>
        {this.props.children}
      </Flex>
    )
  }
}
