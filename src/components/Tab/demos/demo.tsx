/**
 * @name: Tab组件
 * @description: 页签
 */
import React, { Component } from 'react'
import Tab from '../index'
import { Icon } from 'antd-mobile'
import '../style'
import './demo.less'
const fixedTabs1 = [
  { title: '聊天', key: '1-1' },
  { title: '文件', key: '1-2' }
]
const fixedTabs2 = [
  { title: '聊天', key: '2-1' },
  { title: '文件', key: '2-2' },
  { title: '图片', key: '2-3' }
]

const fixedTabs3 = [
  { title: '聊天聊天聊天', key: '3-1' },
  { title: '文件文件文件', key: '3-2' },
  { title: '图片图片图片', key: '3-3' },
  { title: '动态动态动态', key: '3-4' }
]

const fixedTabs4 = [
  { title: '聊天', key: '4-1' },
  { title: '文件', key: '4-2' },
  { title: '图片', key: '4-3' },
  { title: '动态', key: '4-4' },
  { title: '其他', key: '4-5' }
]
const fixedTabs5 = [
  { title: '聊天', key: '5-1' },
  { title: '文件', key: '5-2' },
  { title: '图片', key: '5-3' },
  { title: '动态', key: '5-4' },
  { title: '其他', key: '5-5' },
  { title: '更多', key: '5-6' }
]
export default class Demo extends Component {
  render () {
    return (
      <div>
        <div>导航</div>
        <br/>
        <Tab tabs={fixedTabs1} icons={['search', <Icon type='plus' size='sm'/>]} gather={true} splitLine={false} iconsOccupy={false}>
        </Tab>
        <br/>
        <div>固定Tab</div>
        <br/>
        <Tab tabs={fixedTabs1}></Tab>
        <br/>
        <Tab tabs={fixedTabs2}></Tab>
        <br/>
        <Tab tabs={fixedTabs3} animated={false} useOnPan={false} pageSize={3}>
          {
            fixedTabs3.map((item: any) => {
              return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
                {item.title}
              </div>)
            })
          }
        </Tab>
        <br/>
        <Tab tabs={fixedTabs4} icons={[<Icon type='check'/>, <Icon type='ellipsis'/>]} >
          {
            fixedTabs4.map((item: any) => {
              return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
                {item.title}
              </div>)
            })
          }
        </Tab>
        <br/>
        <br/>
        <div>滑动Tab</div>
        <span>超过5个选项时自动滑动</span>
        <Tab tabs={fixedTabs5} icons={[<Icon type='check'/>, <Icon type='ellipsis'/>]}>
          {
            fixedTabs5.map((item: any) => {
              return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
                {item.title}
              </div>)
            })
          }
        </Tab>
        <br/>
        <span>自定义单屏页签个数</span>
        <Tab tabs={fixedTabs5} pageSize={3} swipeable={true}>
          {
            fixedTabs5.map((item: any) => {
              return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
                {item.title}
              </div>)
            })
          }
        </Tab>
      </div>
    )
  }
}
