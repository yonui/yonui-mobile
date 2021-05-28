/**
 * @name: Tab组件
 * @description: 页签
 */
import React, { Component } from 'react'
import Table from '../index'
import '../style'
// 表头
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 1
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 1,
    orderField: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 2
  }
];
// 数据
const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
];
// 标签颜色 [第一, 第二, 第三, 第四及以后]
const orderSpanColors = ['pink', 'skyblue', 'red', 'yellow']

// 点击排序事件
const onSort = (column) => {
  console.log('order', column)
}

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Table
        columns={columns}
        data={data}
        addOrderColumn={false} // 添加序号列
        orderSpanColors={[]}
        onSort={onSort}
        />
      </div>
    )
  }
}
