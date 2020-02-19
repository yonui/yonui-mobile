import React, { Component } from 'react'
import { Grid } from 'antd-mobile' 
import { GridPropsType } from 'antd-mobile/lib/grid/PropsType'
import classnames from 'classnames'
export interface GridProps extends GridPropsType {
  outContent?: boolean
  full?: boolean
  prefixCls?: string
  itemSize?: string
}
export default class GridComponent extends Component<GridProps> {
  static defaultProps = {
    prefixCls: 'am-grid',
    full: false,
    itemSize: 'sm',
    hasLine: false
  }
  renderItem = (dataItem: any) => {
    const { icon, text } = dataItem
    return (
      <React.Fragment>
        <div className='custom-item'>
          <div className='out-content'>
            <img className="custom-grid-icon" src={icon}/>
          </div>
        </div>
        <div className="am-grid-text custom-text">{text}</div>
      </React.Fragment>)
  }
  render() {
    const { outContent, prefixCls, full, itemSize } = this.props
    const cusCls:any = classnames({
      [`${prefixCls}-full`]: full,
      [`${prefixCls}-outContent`]: outContent,
      [`${prefixCls}-${itemSize}`]: [`${prefixCls}-${itemSize}`]
    })
    return (
      <Grid className={cusCls} {...this.props} 
        renderItem={outContent?this.renderItem:this.props.renderItem}/>
    )
  }
}