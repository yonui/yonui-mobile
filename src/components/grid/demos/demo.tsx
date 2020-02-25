/**
 * @name: Grid
 * @description: 宫格组件
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
const image = [
  'https://i.yonyou.com/website/img/%E4%BC%81%E4%B8%9A%E9%A6%86%E9%A2%84%E7%BA%A6.png',
  'https://i.yonyou.com/website/img/%E5%9C%A8%E7%BA%BF%E5%AE%A1%E6%89%B9%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E8%AE%BE%E5%A4%87%E7%94%B3%E8%AF%B7.png',
  'https://i.yonyou.com/website/img/%E4%BC%81%E4%B8%9A%E6%96%87%E5%8C%96.png',
  'https://i.yonyou.com/website/img/%E9%87%87%E8%B4%AD%E6%8C%87%E6%A0%87%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E5%95%86%E5%8A%A1%E7%94%9F%E4%BA%A7.png',
  'https://i.yonyou.com/website/img/%E5%B7%A5%E6%97%B6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E4%BC%99%E4%BC%B4%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E4%BC%99%E4%BC%B4%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png'
]
const texts = [
  '采购订单',
  "考勤",
  '审批',
  '工资',
  '日志',
  '公告',
  '项目',
  '云盘',
  '文档'
]
const nums = [
  88,
  18,
  0,
  44,
  55,
  8,
  89,
  190,
  5

]
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: image[i],
  text: texts[i],
  number: nums[i]
}))
export default class Demo1 extends Component {
  render () {
    return (
      <div className='grid-demo'>
        <div className="sub-title">数字模式</div>
        <MyComponent
          data={data}
          full={false}
          mode='number'
          style={{background: "linear-gradient(to bottom, rgb(228, 56, 56) 0%, rgb(255, 255, 255) 100%)"}}
          isCarousel={true}
          transparent={true}
          columnNum={4}/>
        <div className="sub-title">图片模式</div>
        <MyComponent
          full={false}
          isCarousel={true}
          data={data}
          columnNum={4}/>
        <div className="sub-title">图片有外边框</div>
        <MyComponent
          full={true}
          isCarousel={true}
          transparent={true}
          data={data}
          outContent={true}
          columnNum={4}/>
      </div>
    )
  }
}
