/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const data = [{
    key: 1,
    icon: '',
    type: '通知',
    title: '小喇叭文本测试测试',
    url: 'https://www.baidu.com'
  },
  {
    key: 2,
    icon: '',
    type: '新公告',
    title: '小喇叭文本测试测试长度超出后滚动吧小喇叭文本测试测试长度超出后滚动吧',
    url: ''
  },
  {
    key: 3,
    icon: '',
    type: '新公告',
    title: '新公告新公告',
    url: ''
  },
  {
    key: 4,
    icon: '',
    type: '通知',
    title: '这是一条新通知',
    url: ''
  }]
export default class Demo extends Component {
    render() {
        return (
          <div style={{background: '#d3d3d3'}}>
            <MyComponent
              data={data}
              titleEllipsis={true}
            />
            <div style={{height: '1rem'}}></div>
            <MyComponent
              data={[data[1]]}
              titleEllipsis={true}
            />
            <div style={{height: '1rem'}}></div>
            <MyComponent
              data={[data[1]]}
              titleEllipsis={false}
            />
            <div style={{height: '1rem'}}></div>
          </div>
        )
    }
}
