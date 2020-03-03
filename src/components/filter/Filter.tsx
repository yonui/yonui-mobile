import React, { Component } from 'react'
import { Drawer, Button } from 'antd-mobile'
import classnames from 'classnames'
const data = {
  reset: '重置',
  confirm: '确定'
}
export interface FilterProps {
  open: boolean
  onOpenChange?: () => void
  btn1?: string
  btn2?: string
  onBtn1Click: () => void
  onBtn2Click: () => void
  position?: 'left' | 'right'
  className?: string
}
export default class Filter extends Component<FilterProps> {

  static defaultProps = {
    open: false,
    btn1: '重置',
    btn2: '确定',
    position: 'right',
    onBtn1Click: () => {},
    onBtn2Click: () => {},
  }

  onOpen = () => {

  }

  getSidebarFooter: () => React.ReactNode = () => {
    const { onBtn1Click, onBtn2Click, btn1, btn2 } = this.props
    return <div className='libraui-filter-sidebar-footer'>
      <span className='sidebar-footer-reset' onClick={onBtn1Click}>{btn1}</span>
      <span className='sidebar-footer-confirm' onClick={onBtn2Click}>{btn2}</span>
    </div>
  }

  getSidebar = (children: React.ReactNode) => {
    const footer = this.getSidebarFooter();
    return <div className='libraui-filter-sidebar'>

      <div className='libraui-filter-sidebar-content'>
        {children}
      </div>
      {footer}
    </div>
  }

  render() {
    const { open, onOpenChange, children, position, className, ...other } = this.props
    const cls = classnames(className,'libraui-filter')
    return (
      <Drawer
        className={cls}
        enableDragHandle
        sidebar={this.getSidebar(children)}
        open={open}
        onOpenChange={onOpenChange}
        position={position}
        {...other}
      >
      </Drawer>
    )
  }
}
