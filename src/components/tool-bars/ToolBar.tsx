import React, { Component } from 'react'
import classnames from 'classnames'
import { Popover, Icon } from 'antd-mobile'
import Button from '../button'

interface valueItem {key?: string, value: string, theme?: string}
interface ToolBarProps extends React.defaultProps{
  values: valueItem[]
  selectedKey?: string
  onChange?: (val: {key?: string, value: string, theme?: string}, num: number) => void
  onValueChange?: (val: string) => void
  placement?: 'topRight' | 'bottomRight'
  mode?: 'text' | 'button'
}
interface ToolBarState {
  visiable: boolean
  selected: number
}
export default class ToolBar extends Component<ToolBarProps, ToolBarState> {
  constructor (props: ToolBarProps) {
    super(props)

    this.state = {
      visiable: false,
      selected: -1
    }
  }

  static defaultProps = {
    values: [],
    mode: 'text'
  }

  handleVisibleChange = (visiable: boolean) => {
    console.log(visiable)
    this.setState({
      visiable: visiable
    })
  }

  parseObj = (param: any) => typeof param === 'string' ? JSON.parse(param) : param

  renderItem = (item: valueItem, index: number, style: object, popoverItem: boolean, selectedIndex?: number) => {
    const { mode } = this.props
    switch (mode) {
      case 'button': {
        const cls = classnames(
          `tool-bar-btn-${item.theme || 'primary'}`, {
            'tool-bar-btn': !popoverItem,
            'tool-bar-popover-btn': popoverItem
          })
        const type = item.theme === 'next' ? 'default' : 'primary'
        return <div className='button-wrapper' style={style}><Button className={cls} content={item.value} type={type} size='small' onClick={() => { this.onClickItem(item, index) }} /></div>
      }
      case 'text':
      default: {
        const cls = classnames({
          'tool-bar-item': !popoverItem,
          'tool-bar-item-selected': !popoverItem && selectedIndex === index,
          'tool-bar-popover-item': popoverItem,
          'tool-bar-popover-item-selected': popoverItem && selectedIndex === index
        })
        return <div className={cls} style={style} key={index} onClick={() => { this.onClickItem(item, index) }}>
          {item.value}
        </div>
      }
    }
  }

  renderItems = (values: valueItem[], selectedKey?: string) => {
    const { placement, mode = 'text' } = this.props
    const { selected } = this.state
    let selectedIndex = values.findIndex((item, index) => (item.key === selectedKey || selectedKey === index.toString()))
    selectedIndex = selectedKey && selectedIndex !== -1 ? selectedIndex : selected
    const length = values.length
    if (length <= 5 && mode === 'text') {
      const style = { width: `${100 / length}%` }
      return values.map((item, index) => this.renderItem(item, index, style, false, selectedIndex))
    } else if (mode === 'button') {
      const style = { width: `${100 / length}%`, 'min-width': '22%' }
      // const style = {}
      return values.map((item, index) => this.renderItem(item, index, style, false, selectedIndex))
    }
    const style = { width: '25%' }
    const items = []
    const overlay: any[] = []
    values.forEach((item, index) => {
      if (index < 4) {
        items.push(this.renderItem(item, index, style, false, selectedIndex))
      } else {
        overlay.push(this.renderItem(item, index, {}, true, selectedIndex))
      }
    })
    const cls = classnames('tool-bar-item', 'tool-bar-item-icon', {
      'tool-bar-item-selected': selectedIndex > 3
    })
    const popoverItem = <Popover overlay={<div className='tool-bar-popover'>{overlay}</div>} placement={placement} onVisibleChange={this.handleVisibleChange} visible={this.state.visiable}>
      <div className={cls}>
        <Icon type='ellipsis' />
      </div>
    </Popover>
    items.push(popoverItem)
    return items
  }

  onClickItem = (value: {key?: string, value: string, theme?: string}, index: number) => {
    const { onChange, onValueChange } = this.props
    this.handleVisibleChange(false)
    this.setState({
      selected: index
    })
    onChange && onChange({ key: index.toString(), ...value }, index)
    onValueChange && onValueChange(value.value)
  }

  render () {
    const { className, style, values, selectedKey, mode } = this.props
    const cls = classnames('yonui-tool-bar', className, { 'yonui-tool-bar-slide': mode === 'button' && values.length > 4 })
    const val = this.parseObj(values)
    return (
      <div className={cls} style={style}>
        {this.renderItems(val, selectedKey)}
      </div>
    )
  }
}
