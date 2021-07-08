import React from 'react'
import { Popover } from 'antd-mobile'
interface PopoverProps extends React.defaultProps {
  children?: JSX.Element[] | JSX.Element
  data?: any[]
  onLoad?: any
  onSelect?: any
}
interface PopoverState {
  visible: boolean
}
class PopoverControl extends React.Component<PopoverProps, PopoverState> {
  constructor (props: PopoverProps) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onSelect = (node: any, index?: number) => {
    const { onSelect } = this.props
    this.setState({
      visible: false
    })
    if (node.url) {
      this.toUrl(node)
    } else {
      onSelect?.(node, index)
    }
  }

  toUrl = (node: any) => {
    const { data } = this.props
    const nodeItem = data.find(item => {
      return item.key === node.key
    })
    nodeItem?.url && (window.location.href = nodeItem.url)
  }

  render () {
    const { data, nid, uitype } = this.props
    const overlayDom: any = []
    if (data && Array.isArray(data)) {
      data.forEach((item: any, index: number) => {
        const popItem = <div className='yonui-popover-item' key={item.key} onClick={() => this.onSelect(item, index)}>
          {item.icon ? <img src={item.icon || ''} className='am-icon am-icon-xs' alt='' /> : null}
          <div className='yonui-popover-item-text'>{item.text || ''}</div>
        </div>
        overlayDom.push(popItem)
      })
    }
    return <Popover visible={this.state.visible} overlay={overlayDom} placement='bottom'>
      <span className='yonui-popover-default-content' nid={nid} uitype={uitype}>{this.props.children}</span>
    </Popover>
  }
}

export default PopoverControl
