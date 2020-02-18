
import React from 'react'
import { Checkbox } from 'antd-mobile'
import {manifest,ReactWrapper} from './manifest'
import {getClassName} from './util';

function CheckboxControl(props:any){
  if(props.mode){
    let _className = getClassName(props);
    return <Checkbox {...props} className={_className} ></Checkbox>
  }
  return <Checkbox {...props}></Checkbox>
}
export default ReactWrapper(CheckboxControl, manifest)
