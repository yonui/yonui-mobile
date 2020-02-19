/**
 * @name: Grid
 * @description: 宫格组件
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
        <div className="sub-title">无边框,通栏,itemSize 大</div>
        < MyComponent
          data={data}
          columnNum={4}
          full={true}
          itemSize='lg'/> 
        <div className="sub-title">无边框,通栏,itemSize 中</div>
        < MyComponent
          data={data}
          columnNum={4}
          full={true}
          itemSize='md'/> 
        <div className="sub-title">无边框,通栏,itemSize 小</div>
        < MyComponent
          data={data}
          columnNum={4}
          full={true}/> 
        <div className="sub-title">有外框内容</div>
        < MyComponent
          data={data1}
          columnNum={5}
          outContent={true}/>
        <div className="sub-title">无边框</div>
        < MyComponent 
          data={data}
          columnNum={5}/>
        <div className="sub-title">有边框</div>
        < MyComponent 
          data={data}
          hasLine={true}
          columnNum={5}/>
      </div>
    )
  }
}
