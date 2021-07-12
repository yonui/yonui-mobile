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
  placement: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}
class PopoverControl extends React.Component<PopoverProps, PopoverState> {
  popoverRef: any
  constructor (props: PopoverProps) {
    super(props)
    this.state = {
      visible: false,
      placement: 'bottom'
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

  onVisibleChange = (visible) => {
    if (visible) {
      const refClientRect = this.popoverRef.getBoundingClientRect()
      if (refClientRect.left < 40) {
        this.setState({
          placement: 'bottomLeft'
        })
      } else if (document.body.clientWidth - refClientRect.left < 40) {
        this.setState({
          placement: 'bottomRight'
        })
      } else {
        this.setState({
          placement: 'bottom'
        })
      }
      window.addEventListener('click', this.handleClick);
    } else {
      window.removeEventListener('click', this.handleClick)
    }
  }

  handleClick = (e) => {
    if (e.target.className === 'am-popover-mask') {
      this.setState({
        visible: false
      })
      e.stopPropagation();
    }
  }

  render () {
    const { data, nid, uitype } = this.props
    const overlayDom: any = []
    let classname = 'yonui-popover-default-content'
    if (data && Array.isArray(data)) {
      data.forEach((item: any, index: number) => {
        const popItem = <div className='yonui-popover-item' key={item.key} onClick={() => this.onSelect(item, index)}>
          {item.icon ? <img src={item.icon || ''} className='am-icon am-icon-xs' alt='' /> : null}
          <div className='yonui-popover-item-text'>{item.text || ''}</div>
        </div>
        overlayDom.push(popItem)
      })
    }
    if (typeof nid === 'undefined') {
      classname = 'yonui-popover-default-content-runtime'
    }
    return <Popover visible={this.state.visible} overlay={overlayDom} placement={this.state.placement} onVisibleChange={this.onVisibleChange} mask>
      <span ref={el => (this.popoverRef = el)} className={classname} nid={nid} uitype={uitype}>
        {this.props.children}
      </span>
    </Popover>
  }
}

export default PopoverControl
