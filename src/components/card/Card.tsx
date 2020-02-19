import React, { Component } from 'react'
import { Card, Icon } from 'antd-mobile'
import classnames from 'classnames'
export interface CardProps {
  prefixCls?: string
  full?: boolean
  content?: React.ReactElement | string
  showHeader?: boolean
  showFooter?: boolean
  headerTitle?: string
  headerThumb?: React.ReactElement | string
  headerExtra?: React.ReactElement | string
  onHeaderExtraClick?: React.MouseEventHandler<HTMLAnchorElement>
  footerContent?: React.ReactElement | string
  footerExtra?: React.ReactElement | string
  onFooterExtraClick?: React.MouseEventHandler<HTMLAnchorElement>
}
export default class MDFCard extends Component<CardProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
    full: false,
    content: <div>This is content of `Card`</div>,
    showHeader: true,
    showFooter: true,
    headerTitle: 'Header title',
    headerThumb: 'thumb',
    headerExtra: 'arrow',
    footerContent: 'Footer content',
    footerExtra: <span>Footer extra</span>
  }
  constructor(props: CardProps) {
    super(props)
  }
  renderHeader() { // 判断是否渲染card header
    const { showHeader, headerTitle, headerThumb, onHeaderExtraClick, headerExtra } = this.props
    const thumb = () => {
      return headerThumb === 'thumb' ? <span className="thumb"></span> : (headerThumb || null)
    }
    const extra = () => {
      return headerExtra === 'arrow' ? <Icon type="right" /> : (headerExtra || null)
    }
    return (

      showHeader ? <Card.Header
        title={headerTitle}
        thumb={thumb()}
        extra={<span onClick={onHeaderExtraClick}>{extra()}</span>}
      /> : ''
    )
  }
  renderBody() { // 在没有header或者footer的情况下需要上下padding
    const { prefixCls, showHeader, showFooter } = this.props
    const classes:any = classnames({
      [`${prefixCls}-body-padding-top`]: !showHeader,
      [`${prefixCls}-body-padding-bottom`]: !showFooter
    })

    return (
      <Card.Body className={classes}>
        {this.props.children || this.props.content}
      </Card.Body>
    )
  }
  renderFooter() { // 判断是否渲染card footer
    const { footerContent, footerExtra, showFooter, onFooterExtraClick } = this.props

    return (
      showFooter ? <Card.Footer
        content={footerContent}
        extra={<span onClick={onFooterExtraClick}>{footerExtra}</span>}
      /> : ''
    )
  }
  render() {
    return (
      <Card full={this.props.full}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </Card>
    )
  }
}

