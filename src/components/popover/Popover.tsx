

import React, { ReactChild } from 'react'
import { Popover,Icon } from 'antd-mobile'
import classNames from 'classnames';
import { manifest, ReactWrapper } from './manifest'
import { PopoverPropsType } from 'antd-mobile/lib/popover/PropsType'
const Item = Popover.Item;

// export declare type overlayDataType = [icon, value] | [Date];
export interface popProps extends PopoverPropsType{
  dark?: boolean;
  overlayData?: string[];
  className?: string;
  content?: React.ReactNode;
  overlayClassName: string;
}
class PopoverControl extends React.Component<popProps, any>{
  render() {
    const {className='',overlayClassName='',dark=false,overlayData,...extraProps} = this.props
    let popClassName = classNames({ 'am-popover-dark': dark }, className, overlayClassName)
    let overlayDom: any = [];
    if (overlayData && Array.isArray(overlayData)) {
      overlayData.forEach((item: any, key: any) => {
        overlayDom.push(<Item key={key} icon={item.icon} >{item.label || ''}</Item>)
      })
    }
  return(
    <Popover overlayClassName={popClassName} {...this.props}  overlay={overlayDom}><div>{this.props.children}</div></Popover>
  )
  }
}

export default ReactWrapper(PopoverControl, manifest)