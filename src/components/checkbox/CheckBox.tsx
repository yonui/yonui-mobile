// function CheckboxControl (props: any) {
//   if (props.mode) {
//     const _className = getClassName(props)
//     return <Checkbox {...props} className={_className} ></Checkbox>
//   }
//   return <Checkbox {...props}></Checkbox>
// }
// export default CheckboxControl

import React, { Component } from 'react'
import classnames from 'classnames'
// const checkboxWarpPrefixCls = 'am-checkbox'
import DefaultSelectedImg from './style/selected.png'
import DefaultUnSelectedImg from './style/unselected.png'
import CircleSelectedImg from './style/circleSelected.png'
import CircleUnSelectedImg from './style/circleUnSelected.png'

interface CheckboxControlProps extends React.defaultProps{
  mode?: string
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  type?: 'default' | 'circle'
  content?: string
  onChange?: (value: boolean) => void
}

interface CheckboxState {
  _checked: boolean
}
// export default class CheckboxControl extends Component<CheckboxControlProps> {
//   onChange = (event: any) => {
//     const { onChange } = this.props
//     onChange && onChange(event && event.target && event.target.checked)
export default class CheckboxControl extends Component<CheckboxControlProps, CheckboxState> {
  constructor (props: CheckboxControlProps) {
    super(props)
    this.state = {
      _checked: props.defaultChecked || false
    }
  }

  _onChange = () => {
    const { onChange, disabled } = this.props
    const { _checked } = this.state
    if (disabled) return
    this.setState({
      _checked: !_checked
    })
    onChange?.(_checked)
  }

  render () {
    const { className, content, nid, uitype, checked, disabled, type } = this.props
    const { _checked } = this.state
    const cls = classnames(className, 'yonui-checkbox-wrapper')
    const labelCls = classnames('yonui-checkbox-text', 'form-label', { disabled })
    const __c = checked === undefined ? _checked : checked
    const SelectedImg = type === 'circle' ? CircleSelectedImg : DefaultSelectedImg
    const UnSelectedImg = type === 'circle' ? CircleUnSelectedImg : DefaultUnSelectedImg
    return (
      <span className={cls} nid={nid} uitype={uitype} onClick={this._onChange}>
        {/* <Checkbox className={cls} {...other}>{content}</Checkbox> */}
        {/* <div className='yonui-checkbox-icon'> */}
        {__c ? <img className='yonui-checkbox-icon' src={SelectedImg} /> : <img className='yonui-checkbox-icon' src={UnSelectedImg} />}
        {/* </div> */}
        <div className={labelCls}>
          {content}
        </div>
      </span>
    )
  }
}
