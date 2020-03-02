import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { GridProps } from 'antd-mobile/lib/grid'
import classnames from 'classnames'
export interface GridComponentProps extends GridProps {
  outContent?: boolean
  full?: boolean
  prefixCls?: string
  mdfPrefixCls?: string
  itemSize?: string
  className?: string
  transparent?: boolean
  mode?: string
  style?: object
}
export default class GridComponent extends Component<GridComponentProps> {
  static defaultProps = {
    prefixCls: 'am-grid',
    mdfPrefixCls: 'mdf-grid',
    mode: 'image',
    full: false,
    itemSize: 'sm',
    hasLine: false,
    outContent: false
  }

  renderItem = (dataItem: any) => {
    const { mode, outContent } = this.props
    const { icon, text, number } = dataItem
    let content
      if (mode==='image' && outContent) {
        content= <div className='out-content'><img className="custom-grid-icon" src={icon}/></div>
      }
      else if (mode==='number') {
        if (outContent) {
          content = <div className='out-content content-number'>{number}</div>
        }
        else {
          content = <div className='content-number'>{number}</div>
        }
        
      }
      return (
        <React.Fragment>
          <div className={`custom-item`}>
            {content}
          </div>
          <div className={`am-grid-text custom-text`}>{text}</div>
        </React.Fragment>)
  }

  render () {
    const { outContent, prefixCls, full, itemSize, className, transparent, mode, mdfPrefixCls, style, activeStyle, ...restProps } = this.props
    const cusCls: any = classnames({
      [`${prefixCls}-outContent`]: outContent,
      [`${prefixCls}-${itemSize}`]: [`${prefixCls}-${itemSize}`],
      [`${prefixCls}-number`]: mode==='number',
      className
    })
    const mdfCusCls: any  = classnames({
      [`${mdfPrefixCls}`]: mdfPrefixCls,
      [`${mdfPrefixCls}-transparent`]: transparent,
      [`${mdfPrefixCls}-not-full`]: !full,
    })
    const activeStyleTrs = (typeof activeStyle === 'string')?activeStyle==='false'?false:{}:activeStyle
    return (
      <div className={mdfCusCls} style={style}>
        <Grid {...restProps}
          className={cusCls}
          activeStyle={activeStyleTrs}
          renderItem={(mode==='image'&&outContent)||mode==='number'?this.renderItem:this.props.renderItem}/>
      </div>
    )
  }
}
