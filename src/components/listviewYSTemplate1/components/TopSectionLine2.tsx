import React, { Component } from 'react'
import { Flex } from 'antd-mobile'

const BottomLeftPreClas = 'top-bottom-left';
const BottomRightPreClas = 'top-bottom-right';
interface TopSectionLine2Props {
  width?: number,
  height?: number,
  right?: number,
  top?: number
}
export default class TopSectionLine2 extends Component<TopSectionLine2Props, any>{
  BottomLeftSection = () =>{
    return(
      <Flex.Item className={BottomLeftPreClas}>
        <div>
         
          <span className='title'>计划到货：</span>
          <span className='content'> 今天13:30</span>
        </div>
        <div>
          <span className='title'>到货时间：</span>
          <span className='content'> 今天13:28</span>
        </div>
      </Flex.Item>
    )
  }

  BootmRightSection = () =>{
    return(
      <Flex.Item className={BottomRightPreClas}>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583295603582&di=4dd66ab9b0c88189c6c1815fcc692685&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F45%2F3cb88b7d_E370645_765affc4.png%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng"></img>
          <span className='title'>采购：</span>
          <span className='content'> 140箱</span>
        </div>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583295603582&di=4dd66ab9b0c88189c6c1815fcc692685&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F45%2F3cb88b7d_E370645_765affc4.png%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng"></img>
          <span className='title'>入库：</span>
          <span className='content'> 23箱</span>
        </div>
      </Flex.Item>
    )
  }
  render() {
    return (
      <Flex>
        {this.BottomLeftSection()}
        {this.BootmRightSection()}
      </Flex>

    )
  }
}
