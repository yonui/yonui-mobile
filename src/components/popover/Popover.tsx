import React from 'react'
import { Popover } from 'antd-mobile'
import classNames from 'classnames'
import { PopoverPropsType } from 'antd-mobile/lib/popover/PropsType'

const Item = Popover.Item

export interface popProps extends PopoverPropsType, React.defaultProps {
  dark?: boolean
  data?: any[]
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

  onSelect = (node: any, index?: number) => {
    const { onSelect, onVisibleChange } = this.props
    onVisibleChange?.(false)
    onSelect ? onSelect(node, index) : this.toUrl(node)
  }

  toUrl = (node: any) => {
    const { data } = this.props
    const nodeItem = data.find(item => {
      return item.key === node.key
    })
    nodeItem?.url && (window.location.href = nodeItem.url)
  }

  render () {
    const { className = '', overlayClassName = '', dark = true, data, size, style } = this.props
    const popClassName = classNames({ 'am-popover-dark': dark, 'am-popover-size-sm': size === 'sm', 'am-popover-size-md': size === 'md' }, className, overlayClassName)
    const overlayDom: any = []
    if (data && Array.isArray(data)) {
      data.forEach((item: any) => {
        if (item.icon) {
          overlayDom.push(<Item key={item.key} icon={<img src={item.icon || ''} className='am-icon am-icon-xs' alt='' />} style={style}>
            {item.text || ''}
          </Item>)
        } else {
          overlayDom.push(<Item key={item.key} style={style}>
            {item.text || ''}
          </Item>)
        }
      })
    }
    return <Popover overlayClassName={popClassName} overlay={overlayDom} {...this.props} onSelect={this.onSelect}>
      <div className='yonui-popover-default-content'>{this.props.children}</div>
    </Popover>
  }
}

export default PopoverControl
