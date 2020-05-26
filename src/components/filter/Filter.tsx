import React, { Component } from 'react'
import { Drawer } from 'antd-mobile'
import Toolbar from '../tool-bars'
import classnames from 'classnames'

interface valueItem {key?: string, value: string, theme?: string}
export interface FilterProps extends React.defaultProps{
  open: boolean
  onOpenChange?: () => void
  btn1: valueItem
  btn2: valueItem
  onBtn1Click?: () => void
  onBtn2Click?: () => void
  mode?: 'text'|'button'
  btnsType?: Array<'next' | 'primary' | undefined>
  position?: 'left' | 'right'
}

export interface FilterState {
  selectedKey: string
}

export default class Filter extends Component<FilterProps, FilterState> {
  constructor (props: FilterProps) {
    super(props)
    this.state = {
      selectedKey: ''
    }
  }

  static defaultProps = {
    open: true,
    btn1: { value: '重置' },
    btn2: { value: '确定' },
    position: 'right'
  }

  onClickFooter= (val: valueItem, index: number) => {
    const { onBtn1Click, onBtn2Click } = this.props
    this.setState({
      selectedKey: val.key || ''
    })
    if (index === 0) {
      onBtn1Click && onBtn1Click()
    } else {
      onBtn2Click && onBtn2Click()
    }
  }

  getSidebarFooter: () => React.ReactNode = () => {
    const { btn1, btn2, mode = 'button' } = this.props
    const { selectedKey } = this.state
    return <Toolbar className='yonui-filter-sidebar-footer' values={[btn1, btn2]} mode={mode} onChange={this.onClickFooter} selectedKey={selectedKey} />
  }

  getSidebar = (children: React.ReactNode, nid?: string, uitype?: string) => {
    const footer = this.getSidebarFooter()
    return <div className='yonui-filter-sidebar' nid={nid} uitype={uitype}>
      <div className='yonui-filter-sidebar-content'>
        {children}
      </div>
      {footer}
    </div>
  }

  render () {
    const { open, onOpenChange, children, position, className, nid, uitype, ...other } = this.props
    const cls = classnames(className, 'yonui-filter')
    return (
      <Drawer
        className={cls}
        enableDragHandle
        sidebar={this.getSidebar(children, nid, uitype)}
        open={open}
        onOpenChange={onOpenChange}
        position={position}
        {...other}
      />
    )
  }
}
