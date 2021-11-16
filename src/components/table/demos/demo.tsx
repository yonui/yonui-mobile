/**
 * @name: Table
 * @description: 表格
 */
import React, { Component } from 'react'
import Table from '../index'
import '../style'
// 表头
// width为列宽比
var columnsss = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 1
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 1,
    sortField: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 2
  }
];
const columns1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 1,
    render: (value, row, index) => {
      console.log('value:', value, 'row:', row, 'index:', index)
      return value
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 1,
    sortField: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 2
  },
  {
    title: 'Address1',
    dataIndex: 'address',
    width: 2
  }
];
// 数据
const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '2' },
  { name: 'Rose', age: 36, address: 'some where', key: '3' },
  { name: 'Jack', age: 28, address: 'some where', key: '4' },
  { name: 'Rose', age: 36, address: 'some where', key: '5' },
  { name: 'Rose', age: 36, address: 'some where', key: '6' },
  { name: 'Rose', age: 38, address: 'some where', key: '7' }
];
// 标签颜色 [第一, 第二, 第三, 第四及以后]
const orderSpanColors = ['pink', 'skyblue', 'red', 'yellow']

// 点击排序事件
const onSort = (column) => {
  console.log('order', column)
}

// 点击查看更多
const onLoadMore = () => {
  console.log('loadMore')
}

export default class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: columnsss
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ columns: columns1 })
    }, 10000);

    setTimeout(() => {
      this.setState({ columns: columns1 })
    }, 11000);
  }

  render() {
    const { columns } = this.state
    return (
      <div style={{background:'red'}}>
        <Table
          title='标题242341234sdfaf'
          // startOrder={2}
          columns={columns}
          data={data}
          addOrderColumn={true} // 添加序号列
          // orderSpanColors={orderSpanColors}
          onSort={onSort}
          // showMore={true}
          highlighted={true}
          loadMore={onLoadMore}
        />
        {/* <Table
          columns={columns1}
          data={data}
          addOrderColumn={true} // 添加序号列
          // orderSpanColors={orderSpanColors}
          onSort={onSort}
          // showMore={true}
          loadMore={onLoadMore}
          style={{height: '3.3rem'}}
        /> */}
      </div>
    )
  }
}
