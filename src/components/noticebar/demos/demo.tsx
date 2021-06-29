/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const data = [/* {
    key: 1,
    icon: '',
    type: '通知',
    title: '小喇叭文本测试测试',
    url: 'https://www.baidu.com'
  }, */
  {
    key: 2,
    icon: '',
    type: '新公告',
    title: '小喇叭文本测试测试长度超出后滚动吧小喇叭文本测试测试长度超出后滚动吧',
    url: ''
  }]
export default class Demo extends Component {
    render() {
        return (
            <MyComponent
              data={data}
            />
        )
    }
}
