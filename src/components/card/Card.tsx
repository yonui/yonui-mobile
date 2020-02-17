import React from 'react'
import { Card, Icon } from 'antd-mobile'
import classnames from 'classnames'
export interface CardProps {
    full?: boolean
    content?: React.ReactElement
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
export default class MDFCard extends React.Component<CardProps, any> {
    static defaultProps = {
        full: false,
        content: <div>This is content of `Card`</div>,
        showHeader: true,
        showFooter: true,
        headerTitle: 'Header title',
        headerThumb: <span className='thumb'></span>,
        headerExtra: <Icon type="right" />,
        footerContent: 'Footer content',
        footerExtra: <span>Footer extra</span>
    }
    constructor(props: CardProps) {
        super(props)
    }
    renderHeader() { // 判断是否渲染card header
        return (
            this.props.showHeader ? <Card.Header
                title={this.props.headerTitle}
                thumb={this.props.headerThumb}
                extra={<span onClick={this.props.onHeaderExtraClick}>{this.props.headerExtra}</span>}
            /> : ''
        )
    }
    renderBody() { // 在没有header或者footer的情况下需要上下padding
        const classes:any = classnames({
            [`am-card-body-padding-top`]: !this.props.showHeader,
            [`am-card-body-padding-bottom`]: !this.props.showFooter
        })
        return (
            <Card.Body className={classes}>
                {this.props.content}
            </Card.Body>
        )
    }
    renderFooter() { // 判断是否渲染card footer
        return (
            this.props.showFooter ? <Card.Footer 
                content={this.props.footerContent}
                extra={<span onClick={this.props.onFooterExtraClick}>{this.props.footerExtra}</span>}
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

