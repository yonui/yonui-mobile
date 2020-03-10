import React from 'react'
import { Radio } from 'antd-mobile'

import { manifest, ReactWrapper } from './manifest'

function RadioControl (props: any) {
  //  if(props && props.mode === 'circle'){
  //    let _className = props.className? props.className + 'am-raido-circle':'am-raido-circle'
  //    return <Radio {...props} className={_className}>{props.name || props.children}</Radio>
  //  }
  // console.log('radio的默认属性props.defaultChecked',props.defaultChecked);
  return <Radio {...props}>{props.name || props.children}</Radio>
}
export default ReactWrapper(RadioControl, manifest)
