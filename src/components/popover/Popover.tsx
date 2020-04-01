
import React from 'react'
import { Popover } from 'antd-mobile'
import classNames from 'classnames'
import { PopoverPropsType } from 'antd-mobile/lib/popover/PropsType'
const Item = Popover.Item

// export declare type overlayDataType = [icon, value] | [Date];
export interface popProps extends PopoverPropsType{
  dark?: boolean
  overlayData?: string[]
  className?: string
  content?: React.ReactNode
  overlayClassName: string
  size: string
  onVisibleChange?: any
  placement?: 'top' | 'bottom' | 'bottomLeft' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomRight'
}
class PopoverControl extends React.Component<popProps, any> {
  public static defaultProps = {
    placement: 'bottomLeft',
    size: 'sm',
    dark: true
  }

  render () {
    const { className = '', overlayClassName = '', dark = true, overlayData, size } = this.props
    const popClassName = classNames({ 'am-popover-dark': dark, 'am-popover-size-sm': size === 'sm', 'am-popover-size-md': size === 'md' }, className, overlayClassName)
    const overlayDom: any = []
    if (overlayData && Array.isArray(overlayData)) {
      overlayData.forEach((item: any, key: any) => {
        if (item.icon) {
          overlayDom.push(<Item key={key} icon={<img src={item.icon || ''} className='am-icon am-icon-xs' alt='' />} >{item.label || ''}</Item>)
        } else {
          overlayDom.push(<Item key={key} >{item.label || ''}</Item>)
        }
      })
    }
    return (
      <Popover overlayClassName={popClassName} {...this.props} onVisibleChange={this.props.onVisibleChange} overlay={overlayDom}><div>{this.props.children}</div></Popover>
    )
  }
}

export default PopoverControl
