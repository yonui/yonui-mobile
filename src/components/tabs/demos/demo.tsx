/**
 * @name: Tabs组件
 * @description: 页签
 */
import React, { Component } from 'react';
import Tabs from '../index';
import { Icon } from 'antd-mobile'
import WhiteSpace from '../../white-space';
import '../style';
import './demo.less';
const fixedTabs1 = [
  { title: '聊天', key: '1-1' },
  { title: '文件', key: '1-2' }
];
const fixedTabs2 = [
  { title: '聊天', key: '2-1' },
  { title: '文件', key: '2-2' },
  { title: '图片', key: '2-3' },
];

const fixedTabs3 = [
  { title: '聊天', key: '3-1' },
  { title: '文件', key: '3-2' },
  { title: '图片', key: '3-3' },
  { title: '动态', key: '3-4' },
];

const fixedTabs4 = [
  { title: '聊天', key: '4-1' },
  { title: '文件', key: '4-2' },
  { title: '图片', key: '4-3' },
  { title: '动态', key: '4-4' },
  { title: '其他', key: '4-5' },
];
const fixedTabs5 = [
  { title: '聊天', key: '5-1' },
  { title: '文件', key: '5-2' },
  { title: '图片', key: '5-3' },
  { title: '动态', key: '5-4' },
  { title: '其他', key: '5-5' },
  { title: '更多', key: '5-6' },
];
export default class Demo extends Component {
  render () {
    return (
      <div>
        <div>导航</div>
        <WhiteSpace/>
        <Tabs tabs={fixedTabs1} icons={['check','ellipsis']} gather={true} splitLine={false}>
        </Tabs>
        <WhiteSpace/>
        <div>固定Tab</div>
        <WhiteSpace/>
        <Tabs tabs={fixedTabs1}></Tabs>
        <WhiteSpace/>
        <Tabs tabs={fixedTabs2}></Tabs>
        <WhiteSpace/>
        <Tabs tabs={fixedTabs3} animated={false} useOnPan={false}>
        {
            fixedTabs3.map( (item : any)=> {return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
              {item.title}
            </div>)})
          }
        </Tabs>
        <WhiteSpace/>
        <Tabs tabs={fixedTabs4} icons={[<Icon type='check'/>,<Icon type='ellipsis'/>]} >
          {
            fixedTabs4.map( (item : any)=> {return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
              {item.title}
            </div>)})
          }
        </Tabs>
        <WhiteSpace/>
        <WhiteSpace/>
        <div>滑动Tab</div>
        <span>超过5个选项时自动滑动</span>
        <Tabs tabs={fixedTabs5} icons={[<Icon type='check'/>,<Icon type='ellipsis'/>]}>
          {
            fixedTabs5.map( (item : any)=> {return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
              {item.title}
            </div>)})
          }
        </Tabs>
        <WhiteSpace/>
        <span>自定义单屏页签个数</span>
        <Tabs tabs={fixedTabs5} pageSize={3}>
        {
            fixedTabs5.map( (item : any)=> {return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem', backgroundColor: '#fff' }} key={item.key}>
              {item.title}
            </div>)})
          }
        </Tabs>
        <Tabs />
      </div>
    )
  }
}
