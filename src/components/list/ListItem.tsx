import React from 'react'
import classnames from 'classnames'
export default class  ListItemTitle extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'mdf-list-item'
  }
  constructor(props: any) {
    super(props)
  }
  renderThumb = (direction: string) => { // 渲染thumb
    if(!direction) return null
    const { prefixCls } = this.props
    const thumb = this.props[`${direction}Thumb`]
    return thumb ? (<div className={`${prefixCls}-thumb ${prefixCls}-thumb-${direction}`}>
      {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
    </div>) : null
  }
  renderChildren = (name: string) => { // 渲染children
    let components: any = {
      ListItemTitle: [],
      ListItemBrief: []
    }
    const children:any = this.props.children
    if(children instanceof Array) {
      children.forEach((item: any) => {
        components[item.type.name].push(item)
      })
    } else if(children instanceof Object) {
      components[children.type.name].push(children)
    }
    return components[name]
  }
  renderContent = () => {
    const { prefixCls, titleExtra, briefExtra } = this.props
    return <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-title`}>
        <div className={`${prefixCls}-title-content`}>
          {this.renderChildren('ListItemTitle')}
        </div>
        <div className={`${prefixCls}-title-extra`}>
          <span>{titleExtra}</span>
        </div>
      </div>
      <div className={`${prefixCls}-brief`}>
        <div className={`${prefixCls}-brief-content`}>
          {this.renderChildren('ListItemBrief')}
        </div>
        {briefExtra && (<div className={`${prefixCls}-brief-thumb`}>
          {briefExtra}
        </div>)}
      </div>
    </div>
  }
  render() {
    const {
      prefixCls,
      briefExtra,
      singleLine,
      arrow,
    } = this.props
    const wrapperCls = classnames(`${prefixCls}`, {
      [`${prefixCls}-single-line`]: singleLine
    })
    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });
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
