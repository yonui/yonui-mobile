// function CheckboxControl (props: any) {
//   if (props.mode) {
//     const _className = getClassName(props)
//     return <Checkbox {...props} className={_className} ></Checkbox>
//   }
//   return <Checkbox {...props}></Checkbox>
// }
// export default CheckboxControl

import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'
import classnames from 'classnames'
const checkboxWarpPrefixCls = 'am-checkbox'
interface CheckboxControlProps extends React.defaultProps{
  mode?: string
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  content?: string
  onChange?: () => void
}
export default class CheckboxControl extends Component<CheckboxControlProps> {
  render () {
    const { className, mode, content, children, nid, uitype, ...other } = this.props
    const cls = classnames(className, `${checkboxWarpPrefixCls}-${mode}`)
    return (
      <span className='yonui-checkbox-wrapper' nid={nid} uitype={uitype}>
        <Checkbox className={cls} {...other}>{content}</Checkbox>
      </span>
    )
  }
}
