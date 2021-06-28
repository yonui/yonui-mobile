import React, { Component } from 'react'
import { Grid, Badge } from 'antd-mobile'
import { GridProps } from 'antd-mobile/lib/grid'
import classnames from 'classnames'
export interface GridComponentProps extends GridProps {
  mode?: string
  style?: object
  itemSize?: string
  onSelect?: (value: object) => void
}
export default class GridComponent extends Component<GridComponentProps> {
  getGridProps = () => {
    const { isCarousel, carouselMaxRow, hasLine = false, columnNum } = this.props
    const res = {
      hasLine: hasLine,
      columnNum: columnNum,
      isCarousel: isCarousel,
      carouselMaxRow: carouselMaxRow
    }
    return res
  }

  renderItem = (item) => {
    const { style: textStyle, mode = 'image', itemSize = 'lg' } = this.props
    const gridIconCls = classnames('yonui-grid-icon', `yonui-grid-icon-${itemSize}`)
    let gridItem = null
    switch (mode) {
      case 'image':
        gridItem = (
          <div>
            <img className={gridIconCls} src={item.icon} />
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </div>
        )
        break
      case 'number':
        gridItem = (
          <div>
            <div className={gridIconCls}>{item.number}</div>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </div>
        )
        break
      case 'badge':
        gridItem = (
          <div>
            <Badge text={item.number} overflowCount={99}>
              <img className={gridIconCls} src={item.icon} />
            </Badge>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </div>
        )
        break
      default:
        break
    }
    return gridItem
  }

  render () {
    const { data, onSelect } = this.props
    return (
      <Grid
        className='yonui-grid'
        data={data}
        {...this.getGridProps()}
        renderItem={(item) => this.renderItem(item)}
        onClick={(item) => onSelect(item)}
      />
    )
  }
}
