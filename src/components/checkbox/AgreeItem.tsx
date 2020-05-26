
import React from 'react'
import { Checkbox } from 'antd-mobile'
// import { manifestAgreeItem as manifest, ReactWrapper } from './manifest'
import { getClassName } from './util'

const AgreeItem = Checkbox.AgreeItem
function AgreeItemControl (props: any) {
  if (props.mode) {
    const _className = getClassName(props)
    return <AgreeItem {...props} className={_className} />
  }
  return <AgreeItem {...props} />
}

export default AgreeItemControl
