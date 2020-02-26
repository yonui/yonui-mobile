

import React from 'react'
import { Popover } from 'antd-mobile'
import classNames from 'classnames';
import {manifest,ReactWrapper} from './manifest'

function PopoverControl(props:any){
  console.log('props');
let popClassName= classNames({'am-popover-dark':props.mode && props.mode==='dark'},props.className,props.overlayClassName)
return <Popover {...props} mask={false}  overlayClassName={popClassName}>{props.children || ''}</Popover>
}
export default ReactWrapper(PopoverControl,manifest)