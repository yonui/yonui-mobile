import React, { Component } from 'react'
import { Modal } from 'antd-mobile'
import classnames from 'classnames'
export interface PanelProps {
  className?: string
  style?: object
  show: boolean
  onClose?: () => void
  title?: string
  cancelButtonText?: string
  options?: Array<Array<{ icon: React.ReactNode, title: string }>> | Array<{ icon: React.ReactNode | string, title: string }>
  type?: 'slideable' | 'fixed'
  callback?: (col: number, row: number) => void
}
export default class Panel extends Component<PanelProps> {
  static defaultProps = {
    show: true,
    title: '',
    cancelButtonText: '取消',
    type: 'fixed'
  }

  callbackFun = (col: number, row: number) => {
    const { callback } = this.props
    callback && callback(col, row)
  }

  renderTitle = (title?: string) => {
    return <div className='panel-title'>
      {title}
    </div>
  }

  renderItem = (item: { icon: React.ReactNode, title: string }, row: number, col: number) => {
    const iconELe = typeof item.icon === 'string' ? <img src={item.icon} style={{ width: '100%' }} /> : item.icon
    return <div className='panel-content-item'>
      <div className='item-icon-wrapper' onClick={() => { this.callbackFun(col, row) }}>
        <div className='item-icon'>
          {iconELe}
        </div>
      </div>

      <div className='item-icon-title'>{item.title}</div>
    </div>
  }

  renderItems = (items: any[], row: number) => {
    const res = items.map((item, index) => {
      return this.renderItem(item, row, index)
    })
    const cls = classnames('panel-content-items', {
      'panel-content-more': res.length > 5
    })
    return <div className={cls}>
      {res}
    </div>
  }

  renderContent = (options?: Array<Array<{ icon: React.ReactNode | string, title: string }>>) => {
    if (!options) return null
    const content = options.map((item, index) => this.renderItems(item, index))
    return <div className='panel-content'>
      {content}
    </div>
  }

  renderFooter = (text?: string) => {
    return <div className='panel-footer' onClick={this.props.onClose}>
      {text}
    </div>
  }

  render () {
    const { show, onClose, title, cancelButtonText, className, style, options, type, ...other } = this.props
    const cls = classnames(className, 'yonui-panel', `yonui-panel-${type}`)
    let op: any[] = []

    if (options?.every((item: any) => Array.isArray(item))) {
      op = options
    } else if (options?.every((item: any) => item.icon && item.title)) {
      op = [options]
    } else {
      console.error('options must be : Array<Array<{ icon: React.ReactNode | string, title: string }>> |  Array<{ icon: React.ReactNode | string, title: string }> ')
      return null
    }
    return (
      <Modal
        popup
        visible={show}
        onClose={onClose}
        animationType='slide-up'
        // afterClose={() => { alert('afterClose'); }}
        maskClosable={true}
      >
        <div className={cls} style={style} {...other}>
          {this.renderTitle(title)}
          {this.renderContent(op)}
          {this.renderFooter(cancelButtonText)}
        </div>
      </Modal>
    )
  }
}
