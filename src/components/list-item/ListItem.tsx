import React from 'react'
import classnames from 'classnames'
export interface ListItemProps {
  prefixCls?: string
  leftThumb?: string
  rightThumb?: string
  title?: string
  titleExtra?: string
  briefExtra?: string
  arrow?: string
  singleLine?: boolean
}
export default class ListItem extends React.Component<ListItemProps, any> {
  static defaultProps = {
    prefixCls: 'mdf-list-item',
    leftThumb: '',
    rightThumb: '',
    title: '',
    titleExtra: '',
    briefExtra: '',
    arrow: false,
    singleLine: false
  }

  renderThumb = (direction: string) => { // 渲染thumb
    if (!direction) return null
    const { prefixCls } = this.props
    const thumb = direction === 'left' ? this.props.leftThumb : this.props.rightThumb
    return thumb ? (<div className={`${prefixCls}-thumb ${prefixCls}-thumb-${direction}`}>
      {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
    </div>) : null
  }

  renderContent = () => {
    const { prefixCls, title, titleExtra, briefExtra, singleLine } = this.props
    return <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-title`}>
        <div className={`${prefixCls}-title-content`}>
          <span>{title}</span>
        </div>
        <div className={`${prefixCls}-title-extra`}>
          <span>{titleExtra}</span>
        </div>
      </div>
      {!singleLine && (<div className={`${prefixCls}-brief`}>
        <div className={`${prefixCls}-brief-content`}>
          {this.props.children}
        </div>
        {briefExtra && (<div className={`${prefixCls}-brief-thumb`}>
          {briefExtra}
        </div>)}
      </div>)}
    </div>
  }

  render () {
    const {
      prefixCls,
      singleLine,
      arrow
    } = this.props
    const wrapperCls = classnames(`${prefixCls}`, {
      [`${prefixCls}-single-line`]: singleLine
    })
    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up'
    })
    return (
      <div className={wrapperCls}>
        {this.renderThumb('left')}
        {this.renderContent()}
        {this.renderThumb('right')}
        {arrow && (<div className={arrowCls}></div>)}
      </div>
    )
  }
}
