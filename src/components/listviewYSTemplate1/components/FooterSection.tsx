import React, { Component } from 'react'
import { Flex, Icon } from 'antd-mobile'

const FooterSectionPreCls = 'footer-section';
interface FooterSectionProps {
  width?: number,
  height?: number,
  right?: number,
  top?: number
}
export default class FooterSection extends Component<FooterSectionProps, any>{

  render() {
    return (
      <Flex className={FooterSectionPreCls} justify="end">
        <div><Icon type={'check-circle'}></Icon><span className="title">分享</span></div>
        <div><Icon type={'cross-circle'}></Icon><span className="title">分享</span></div>
        <div><Icon type={'ellipsis'}></Icon></div>
      </Flex>
    )
  }
}
