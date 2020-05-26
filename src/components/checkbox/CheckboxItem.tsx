
import React from 'react'
import { Checkbox } from 'antd-mobile'
// import { manifestCheckBoxItem as manifest, ReactWrapper } from './manifest'
import { getClassName } from './util'
function CheckboxItemControl (props: any) {
  if (props.mode) {
    const _className = getClassName(props)
    return <Checkbox.CheckboxItem {...props} className={_className} />
  }
  return <Checkbox.CheckboxItem {...props} />
}

export default CheckboxItemControl
