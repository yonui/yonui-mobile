/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import TemplateFont, {TemplateContainer} from '../index';
import TemplateImage from '../../listviewYSItemImage'
import {Flex} from 'antd-mobile'
import '../style';
import  '../../listviewYSItemImage/style/index'

import './demo.less';



export default class Demo1 extends React.Component {
  constructor(props) {
   super(props)
  }

  render() {
    return (
      <TemplateContainer>
        <Flex >
          <TemplateImage width={140}></TemplateImage>
          
          <Flex.Item>
            <div className="nowrap" >
              <TemplateFont title={null} value="100002049469" fontBold ></TemplateFont>
              <TemplateFont title={null} value="创维30C1" fontBold ></TemplateFont>
            </div>
            <TemplateFont title="sku" value="SLT3219"  ></TemplateFont>
          </Flex.Item>
         
          <TemplateImage type={'stamp'} width={140}></TemplateImage>
        </Flex>
        <Flex >
          <div style={{width:'50%'}}>
            <TemplateFont title="进库时间" value="今天12：00"  ></TemplateFont>
            <TemplateFont title="进库时间" value="今天12：00"  ></TemplateFont>
          </div>
          <div style={{width:'50%'}}>
            <TemplateFont textAlign="right"  icon={<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583295603582&di=4dd66ab9b0c88189c6c1815fcc692685&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F45%2F3cb88b7d_E370645_765affc4.png%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng"></img>}  title="采购" value="140箱"  ></TemplateFont>
            <TemplateFont textAlign="right"   icon={<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583295603582&di=4dd66ab9b0c88189c6c1815fcc692685&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F45%2F3cb88b7d_E370645_765affc4.png%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng"></img>}  title="入库" value="35箱子"  ></TemplateFont>
          </div>
        </Flex>
      </TemplateContainer>
      
    );
  }
}
