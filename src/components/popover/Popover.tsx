import React from 'react'
import { Popover } from 'antd-mobile'

const Item = Popover.Item
interface PopoverProps extends React.defaultProps {
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
    onSelect ? onSelect(node, index) : this.toUrl(node)
    this.setState({
      visible: false
    })
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
      data.forEach((item: any) => {
        if (item.icon) {
          overlayDom.push(<Item key={item.key} icon={<img src={item.icon || ''} className='am-icon am-icon-xs' alt='' />}>
            {item.text || ''}
          </Item>)
        } else {
          overlayDom.push(<Item key={item.key}>
            {item.text || ''}
          </Item>)
        }
      })
    }
    return <div className='yonui-popover-default-content' nid={nid} uitype={uitype}>
      <Popover visible={this.state.visible} overlay={overlayDom} onSelect={this.onSelect} onVisibleChange={() => alert('点击了')}>
        <span>{this.props.children}</span>
      </Popover>
    </div>
  }
}

export default PopoverControl
