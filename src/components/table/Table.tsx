import React, { Component } from 'react'
import RCTable from 'rc-table'
import { Icon } from 'antd-mobile'
interface yonuiTableProps {
  columns: any[]
  data: any[]
  orderSpanColors?: string[]
  addOrderColumn?: boolean
  showMore?: boolean
  loadMore?: () => void
  onSort?: (column) => void
}
interface yonuiTableStates {
  columns: any
  showMore: boolean
}

const showText = {
  showMoreText: '加载更多',
  noMoreText: '已到达底部'
}
export default class Table extends Component<yonuiTableProps, yonuiTableStates> {
  tableRef = null
  constructor (props) {
    super(props)
    const { columns = [], addOrderColumn = true } = this.props
    this.adaptColumns(columns)
    if (addOrderColumn) {
      this.addOrderColumn(columns)
    }
    this.state = {
      columns: columns,
      showMore: false
    }
  }

  componentDidMount () {
    this.setOrderSpanColor()
  }

  onSortButtonClick = (column) => {
    const { onSort } = this.props
    onSort?.(column)
  }

  setOrderSpanColor = () => {
    const { orderSpanColors = [] } = this.props
    for (let i = 0; i < orderSpanColors.length; i++) {
      orderSpanColors[i] && this.tableRef.children[0].style.setProperty(`--order-color-${i + 1}`, orderSpanColors[i])
    }
  }

  addOrderColumn = columns => {
    let added = false
    columns.forEach(column => {
      if (column.dataIndex === 'order') added = true
    })
    if (!added) {
      const orderColumn = {
        title: '序号',
        dateIndex: 'order',
        key: 'order',
        render: (value, row, index) => <span className={`order-span order-span-${index < 3 ? index + 1 : null}`}>{index + 1}</span>,
        width: 1,
      }
      columns.unshift(orderColumn)
    }
  }

  adaptColumns = columns => {
    columns.forEach(column => {
      if (column.key === undefined) column.key = column.dataIndex
      if (column.sortField) {
        const title = column.title
        column.title = <span>{title}<span onClick={() => this.onSortButtonClick(column)} className='order-button'>⇅</span></span>
      }
    });
  }

  loadMore = () => {
    const { loadMore } = this.props
    loadMore?.()
  }

  render () {
    const { columns } = this.state
    const { showMore } = this.props
    return (
      <div className='yonui-table-div' ref={el => { this.tableRef = el }}>
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
