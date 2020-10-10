import React from 'react'
import classnames from 'classnames'
import { Flex } from 'antd-mobile'

export interface MDFFlexProps {
  style?: React.CSSProperties
  className?: string
  nid?: string
}
export default class MDFFlex extends React.Component<MDFFlexProps, any> {
  static Item: any
  render () {
    const { className, nid, ...other } = this.props
    let cls = classnames(className, 'yonui-mobile-flex')
    console.log('flexNid', nid)
    // nid为undefined为运行态
    if (typeof (nid) === 'undefined') {
      cls = 'yonui-mobile-flex-runtime'
    }
    return (
      <Flex className={cls} {...other}>
        {this.props.children}
      </Flex>
    )
  }
}
