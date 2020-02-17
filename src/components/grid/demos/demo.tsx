/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  text: `中文${i}`,
}));
export default class Demo1 extends Component {
  render() {
    return (
      <div className='grid-demo'>
        <div className="sub-title">默认,无边框</div>
        < MyComponent data={data} hasLine={false} columnNum={5}/>   
        <div className="sub-title">有外框内容</div>
        < MyComponent data={data1} columnNum={5} hasLine={false} outContent={true}/>
      </div>
    )
  }
}
