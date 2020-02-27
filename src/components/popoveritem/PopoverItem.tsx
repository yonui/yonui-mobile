/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Popover, Icon } from 'antd-mobile'
import { manifestPopoverItem as manifest,ReactWrapper } from './manifest'
// todo 未配置 onChange
const Item  = Popover.Item;

function Control(props:any){
  return <Item {...props}>{props.children||props.label}</Item>
}
export default ReactWrapper(Control,manifest);
