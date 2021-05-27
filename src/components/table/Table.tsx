import React, { Component } from 'react'
import RCTable from 'rc-table'
interface yonuiTableProps {
  columns: any
  data: any
  orderSpanColors?: any
  addOrderColumn?: boolean
  onSort?: (column) => void
}
interface yonuiTableStates {
  columns: any
}
export default class Table extends Component<yonuiTableProps, yonuiTableStates> {
  constructor (props) {
    super(props)
    const { columns, addOrderColumn = true } = this.props
    this.adaptColumns(columns)
    if (addOrderColumn) {
      this.addOrderColumn(columns)
    }
    this.state = {
      columns: columns,
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
    const tableEle = document.querySelector('.yonui-table')
    for (let i = 0; i < orderSpanColors.length; i++) {
      orderSpanColors[i] && tableEle.style.setProperty(`--order-color-${i + 1}`, orderSpanColors[i])
    }
  }

  addOrderColumn = columns => {
    const orderColumn = {
      title: '序号',
      dateIndex: 'order',
      key: 'order',
      render: (value, row, index) => <span className={`order-span order-span-${index < 3 ? index + 1 : null}`}>{index}</span>,
      width: 100,
    }
    columns.unshift(orderColumn)
  }

  adaptColumns = columns => {
    columns.forEach(column => {
      if (column.key === undefined) column.key = column.dataIndex
      if (column.orderField) {
        const title = column.title
        column.title = <span>{title}<span onClick={() => this.onSortButtonClick(column)} className='order-button'>⇅</span></span>
      }
    });
  }

  render () {
    const { columns } = this.state
    return (
      <RCTable
        prefixCls='yonui-table'
        columns={columns}
        data={this.props.data}
      />
    )
  }
}
