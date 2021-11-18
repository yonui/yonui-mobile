import React, { Component } from 'react'
import RCTable from 'rc-table'
import { Icon } from 'antd-mobile'
interface yonuiTableProps {
  title?: string
  columns: any[]
  data: any[]
  addOrderColumn?: boolean
  startOrder?: number
  showMore?: boolean
  highlighted?: boolean
  style?: object
  loadMore?: () => void
  onSort?: (column) => void
}
interface yonuiTableStates {
  columns: any
}

const showText = {
  showMoreText: '加载更多',
  noMoreText: '已到达底部'
}
export default class Table extends Component<yonuiTableProps, yonuiTableStates> {
  tableRef = null

  // 处理数据  添加序号
  changColumns = () => {
    const { columns = [], addOrderColumn = true } = this.props
    this.adaptColumns(columns)
    if (addOrderColumn) {
      this.addOrderColumn()
    }
    this.setOrderSpanColor()
  }

  onSortButtonClick = (column) => {
    const { onSort } = this.props
    const selected = column.selected ? column.selected : false;
    column.selected = !selected
    onSort?.({ ...column, selected: !selected })
  }

  // 颜色
  setOrderSpanColor = () => {
    const { highlighted = false } = this.props
    if (!highlighted) {
      for (let i = 0; i < 3; i++) {
        this.tableRef && this.tableRef.children[1].style.setProperty(`--order-color-${i + 1}`, 'transparent')
      }
    }
    this.tableRef && this.tableRef.children[1].style.setProperty('--order-text-color', highlighted ? 'white' : '#333')
  }

  // 添加序号
  addOrderColumn = () => {
    const { startOrder = 1, columns } = this.props
    let added = false
    columns.forEach(column => {
      if (column.dataIndex === 'order') added = true
    })
    if (!added) {
      const orderColumn = {
        title: '序号',
        dataIndex: 'order',
        key: 'order',
        render: (value, row, index) => <span className={`order-span order-span-${index < 3 ? index + 1 : null}`}>{index + startOrder}</span>, // 序号
        width: 1,
      }
      columns.unshift(orderColumn)
    }
  }

  // 添加排序
  adaptColumns = columns => {
    columns.forEach(column => {
      if (column.key === undefined) column.key = column.dataIndex
      if (column.width === undefined) column.width = 1
      if (column.sortField) {
        let title = column.title
        if (typeof (title) == 'object') {
          title = title.props?.children[0]
        }
        column.selected = false;
        column.title = <span>{title}<span onClick={() => this.onSortButtonClick(column)} className='order-button'>⇅</span></span>
      }
    });
  }

  loadMore = () => {
    const { loadMore } = this.props
    loadMore?.()
  }

  render () {
    this.changColumns()
    const { showMore = true, title, style = {}, columns } = this.props
    const height = title ? '5.4rem' : '4.5rem'; // 是否显示表头
    return (
      <div className='yonui-table-div' ref={el => { this.tableRef = el }} style={{ height, ...style }}>
        <div className='yonui-table-title' style={{ display: title ? 'flex' : 'none' }}>{title}</div>
        <RCTable
          prefixCls='yonui-table'
          columns={columns}
          data={this.props.data}
          emptyText='暂无数据'
        />
        {showMore && <div className='show-more' onClick={this.loadMore}>
          <span>{showText.showMoreText}</span>
          <Icon type='down' size='xxs' />
        </div>}
        {!showMore && <div className='no-more'>
          <span>{showText.noMoreText}</span>
        </div>}
      </div>
    )
  }
}
