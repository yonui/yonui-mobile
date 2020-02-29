import React, { Component } from 'react'
import classnames from 'classnames'
import { Popover, Icon } from 'antd-mobile'
import Button from '../button'
interface ToolBarProps {
  className?: string
  style?: object
  values: Array<string>
  selectedIndex?: number
  onChange?: (val: string, num: number) => void
  onValueChange?: (val: string) => void
  placement?: 'topRight' | 'bottomRight'
  mode?: 'text' | 'button'
  btnsType?: Array<string | undefined>

}
interface ToolBarState {
  visiable: boolean
}
export default class ToolBar extends Component<ToolBarProps, ToolBarState> {
  constructor(props: ToolBarProps) {
    super(props)

    this.state = {
      visiable: false
    }
  }

  static defaultProps = {
    values: [],
    mode: 'text',
    // btnsType: ['default','default','default','primary']
  }

  handleVisibleChange = (visiable: boolean) => {
    console.log(visiable)
    this.setState({
      visiable: visiable
    })
  }

  parseObj = ( param:any ) => typeof param === 'string' ? JSON.parse(param) : param

  renderItem = (item: string, index: number, style: object, popoverItem: boolean, selectedIndex?: number) => {
    const { mode, btnsType = [] } = this.props;
    switch (mode) {
      case 'button': {
        const cls = classnames({
          'tool-bar-btn': !popoverItem,
          'tool-bar-popover-btn': popoverItem,
        })
        const type = btnsType[index] || 'primary'
        return <Button className={cls} style={style} content={item} type={type} size='small'  onClick={() => { this.onClickItem(item, index) }}/>
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
          {item}
        </div>
      }
    }
  }

  renderItems = (values: Array<string>, selectedIndex?: number) => {
    const { placement } = this.props
    const length = values.length
    if (length <= 5) {
      const style = { width: `${100 / length}%` }
      return values.map((item, index) => this.renderItem(item, index, style, false, selectedIndex))
    }
    const style = { width: '20%' }
    const items = []
    const overlay: any[] = []
    values.forEach((item, index) => {
      if (index < 4) {
        items.push(this.renderItem(item, index, style, false, selectedIndex))
      }
      else {
        overlay.push(this.renderItem(item, index, {}, true, selectedIndex))
      }
    })
    const cls = classnames('tool-bar-item', {
      'tool-bar-item-selected': selectedIndex && selectedIndex > 3
    })
    const popoverItem = <Popover overlay={<div className='tool-bar-popover'>{overlay}</div>} placement={placement} onVisibleChange={this.handleVisibleChange} visible={this.state.visiable}>
      <div className={cls} style={style}>
        <Icon type='ellipsis' />
      </div>
    </Popover>
    items.push(popoverItem)
    return items

  }

  onClickItem = (value: string, index: number) => {
    const { onChange, onValueChange } = this.props
    this.handleVisibleChange(false)
    onChange && onChange(value, index);
    onValueChange && onValueChange(value);
  }
  render() {
    const { className, style, values, selectedIndex, ...other } = this.props
    const cls = classnames('libraui-tool-bar', className)
    // console.log(values)
    const val = this.parseObj(values)
    console.log(val)
    debugger
    return (
      <div className={cls} style={style} >
        {this.renderItems(val, selectedIndex)}
      </div>
    )
  }
}
