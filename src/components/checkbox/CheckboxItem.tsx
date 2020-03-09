
import React from 'react'
import { Checkbox } from 'antd-mobile'
import { manifestCheckBoxItem as manifest, ReactWrapper } from './manifest'
import { getClassName } from './util'
function CheckboxItemControl (props: any) {
  if (props.mode) {
    const _className = getClassName(props)
    return <Checkbox.CheckboxItem {...props} className={_className}></Checkbox.CheckboxItem>
  }
  return <Checkbox.CheckboxItem {...props} ></Checkbox.CheckboxItem>
}

export default ReactWrapper(CheckboxItemControl, manifest)
