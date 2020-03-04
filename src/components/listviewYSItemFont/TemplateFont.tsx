import React, { Component } from 'react'
import { Flex,Icon } from 'antd-mobile'
import classnames from 'classnames';
import { manifestFont as manifest, ReactWrapper } from './manifest'

interface YSTemplateProps {
  // type: string,//必须是image，boldFont, stamp，normalColumn中一个
  fontBold?:boolean,
  title?:string,
  value:string,
  icon?:string,
  textAlign?:string,
}
const TopMiddlePreClas = 'font-section';

class TemplateFont extends Component<YSTemplateProps, any>{
  public static defaultProps = { 

  }

  render() {
    const {fontBold,title,value,icon,textAlign='left' } = this.props;
    return (
      <div className={TopMiddlePreClas} style={{textAlign:textAlign}}>
        <div className={fontBold?'main-title':'sub-title'}>
          {icon? icon:null}
          {title?<span className="title">{title}：</span>:null}
          {value?<span className="value">{value}</span>:null}
        </div>
      </div>
    )
  }
}

export default ReactWrapper(TemplateFont, manifest)