/**
 * @name: SimpleList
 * @description: 简单列表组件
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const dataSource = Array(20).fill('').map((item, index) => ({
  name: index.toString(),
  age: index.toString()
}))
const dataSource2 = Array(200).fill('').map((item, index) => ({
  name: index.toString(),
  age: index.toString()
}))

const renderer = (item: any) => {
  return <div>
    <div>name {item.name}</div>
    <div>age: {item.age}</div>
  </div>
}
export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: dataSource
    }
  }

  render() {
    return (
      <div>
        <div style={{ height: 50 }}></div>
        <MyComponent
          dataSource={this.state.data} renderRow={renderer} onRefresh={() => { this.setState({ data: dataSource2 }) }}
          onReachFoot={() => { console.log('xx') }} editable={true}
        />
      </div>
    )
  }
}
