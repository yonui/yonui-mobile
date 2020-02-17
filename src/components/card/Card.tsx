import React from 'react'
import { Card, Icon } from 'antd-mobile'
export interface CardProps {
    full?: boolean
    content?: React.ReactElement
    showHeader?: boolean
    showFooter?: boolean
    headerTitle?: string
    headerThumb?: React.ReactElement | string
    headerExtra?: React.ReactElement | string
    onHeaderExtraClick?: Function
    footerContent?: React.ReactElement | string
    footerExtra?: React.ReactElement | string
    onFooterExtraClick?: Function
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
    onHeaderExtraClick = () => {
        if(this.props.onHeaderExtraClick) {
            this.props.onHeaderExtraClick(this)
        }
    }
    onFooterExtraClick = () => {
        if(this.props.onFooterExtraClick) {
            this.props.onFooterExtraClick(this)
        }
    }
    renderHeader() { // 判断是否渲染cardheader
        return (
            this.props.showHeader ? <Card.Header
                title={this.props.headerTitle}
                thumb={this.props.headerThumb}
                extra={<span onClick={this.onHeaderExtraClick}>{this.props.headerExtra}</span>}
            /> : ''
        )
    }
    renderBody() { // 在没有header或者footer的情况下需要上下padding
        let classes:any = []
        if(!this.props.showHeader) {
            classes.push('am-card-body-padding-top')
        }
        if(!this.props.showFooter) {
            classes.push('am-card-body-padding-bottom')
        }
        return (
            <Card.Body className={classes}>
                {this.props.content}
            </Card.Body>
        )
    }
    renderFooter() { // 判断是否渲染cardfooter
        return (
            this.props.showFooter ? <Card.Footer 
                content={this.props.footerContent}
                extra={<span onClick={this.onFooterExtraClick}>{this.props.footerExtra}</span>}
            /> : ''
        )
    }
    render() {
        return (
            <Card 
                full={this.props.full}>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </Card>
        )
    }
}

