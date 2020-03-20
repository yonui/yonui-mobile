import React, { Component } from 'react'
import { Drawer } from 'antd-mobile'
import Toolbar from '../tool-bars'
import classnames from 'classnames'

export interface FilterProps {
  open: boolean
  onOpenChange?: () => void
  btn1?: string
  btn2?: string
  onBtn1Click?: () => void
  onBtn2Click?: () => void
  mode?: 'text'|'button'
  btnsType?: Array<'next' | 'primary' | undefined>
  position?: 'left' | 'right'
  className?: string
}

export interface FilterState {
  selectedKey: number
}

export default class Filter extends Component<FilterProps, FilterState> {
  constructor (props: FilterProps) {
    super(props)
    this.state = {
      selectedKey: -1
    }
  }

  static defaultProps = {
    open: true,
    btn1: '重置',
    btn2: '确定',
    position: 'right'
  }

  onClickFooter= (val: string, index: number) => {
    const { onBtn1Click, onBtn2Click } = this.props
    this.setState({
      selectedKey: index
    })
    if (index === 0) {
      onBtn1Click && onBtn1Click()
    } else {
      onBtn2Click && onBtn2Click()
    }
  }

  getSidebarFooter: () => React.ReactNode = () => {
    const { btn1, btn2, mode = 'button', btnsType = ['next', 'primary'] } = this.props
    const { selectedKey } = this.state
    return <Toolbar className='yonui-filter-sidebar-footer' values={[btn1, btn2]} mode={mode} btnsType={btnsType} onChange={this.onClickFooter} selectedIndex={selectedKey} />
  }

  getSidebar = (children: React.ReactNode) => {
    const footer = this.getSidebarFooter()
    return <div className='yonui-filter-sidebar'>

      <div className='yonui-filter-sidebar-content'>
        {children}
      </div>
      {footer}
    </div>
  }

  render () {
    const { open, onOpenChange, children, position, className, ...other } = this.props
    const cls = classnames(className, 'yonui-filter')
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
