import React, { Component } from 'react'
import { Grid, Badge, Icon } from 'antd-mobile'
import { GridProps } from 'antd-mobile/lib/grid'
import Popover from '../popover'
import classnames from 'classnames'
export interface GridComponentProps extends GridProps {
  mode?: string
  style?: any
  itemSize?: string
  itemDir?: 'row' | 'column'
  showHeader?: boolean
  gridTitle?: string
  onSelect?: (value: object) => void
  onShowMore?: () => void
}
export default class GridComponent extends Component<GridComponentProps> {
  // 获取可配置属性
  getGridProps = () => {
    const { isCarousel, carouselMaxRow, hasLine = false, columnNum } = this.props
    const res = {
      hasLine: hasLine,
      columnNum: columnNum,
      isCarousel: isCarousel,
      carouselMaxRow: carouselMaxRow,
      square: false
    }
    return res
  }

  // 宫格文字样式
  getLabelStyle = () => {
    const { style = {} } = this.props
    return {
      color: style.color,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle,
      textDecoration: style.textDecoration
    }
  }

  // 宫格最外层样式, 文字样式排除
  getGridStyle = () => {
    const { style = {} } = this.props
    return {
      ...style,
      color: 'umset',
      fontSize: 'unset',
      fontWeight: 'unset',
      fontStyle: 'unset',
      textDecoration: 'unset'
    }
  }

  // 点击事件
  _onClick = (item) => {
    // 点击事件的优先级, popover弹出框 > data中配置的跳转url > 动作绑定的onSelect事件
    const { onSelect } = this.props
    if (item.pop) return
    if (item.url) {
      window.location.href = item.url
    } else {
      onSelect?.(item)
    }
  }

  onShowMore = () => {
    this.props.onShowMore?.()
  }

  adaptItemNumber = (number) => {
    // 角标转换
    // 数字以外的角标，最大长度2，其余部分省略号显示
    // 数字角标，转换为大等于0的正整数
    let res = null
    if (isNaN(Number(number))) {
      res = number && number.length > 2 ? `${number.substr(0, 2)}...` : number
    } else {
      res = Math.max(0, Math.floor(number))
    }
    return res
  }

  // 宫格子元素渲染函数
  renderItem = (item) => {
    const { mode = 'image', itemSize = 'lg', itemDir = 'column' } = this.props
    const gridIconCls = classnames('yonui-grid-icon', `yonui-grid-icon-${itemSize}`)
    const textStyle = this.getLabelStyle()
    item.number = this.adaptItemNumber(item.number)
    let gridItem = null
    switch (mode) {
      case 'image': // 只展示图标
        gridItem = (
          <>
            <img className={gridIconCls} src={item.icon} />
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      case 'number': // 只展示数字
        gridItem = (
          <>
            <div className={gridIconCls}>{item.number}</div>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      case 'badge': // 角标模式
        gridItem = (
          <>
            <Badge text={item.number} overflowCount={99}>
              <img className={gridIconCls} src={item.icon} />
            </Badge>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      default:
        break
    }
    return (
      item.pop // data中该项是否配置了popover弹窗想
        ? <Popover data={item.pop}>
          <div className='yonui-grid-item-wrapper' style={{ flexDirection: itemDir }}>
            {gridItem}
          </div>
        </Popover>
        : <div className='yonui-grid-item-wrapper' style={{ flexDirection: itemDir }}>
          {gridItem}
        </div>
    )
  }

  // 标题的显示更多按钮
  renderShowMoreIcon = () => {
    const { data = [], isCarousel = false, columnNum = 4, carouselMaxRow = 2 } = this.props
    const pageSize = columnNum * carouselMaxRow
    // 当分页&&每页展示的子元素数量小于总数量时显示
    if (isCarousel && pageSize < data.length) {
      return <Icon type='right' size='sm' onClick={this.onShowMore} />
    }
    return null
  }

  render () {
    const { data, gridTitle, showHeader = false } = this.props
    return (
      <div className='yonui-grid-wrapper' style={this.getGridStyle()}>
        {showHeader && <div className='yonui-grid-title'>
          <span>
            {gridTitle}
          </span>
          {this.renderShowMoreIcon()}
        </div>}
        <Grid
          className='yonui-grid'
          data={data}
          {...this.getGridProps()}
          renderItem={(item) => this.renderItem(item)}
          onClick={(item) => this._onClick(item)}
        />
      </div>
    )
  }
}
