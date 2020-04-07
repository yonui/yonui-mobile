import React, { Component } from 'react'
import { Modal, Button } from 'antd-mobile'
export interface DataItem {
  text?: any
  [key: string]: any
  delete?: boolean
}
export interface ListPanelPickerProps {
  visible: boolean
  header?: string
  data: DataItem[]
  onClose: () => void
  onClick: (object: DataItem) => void
  style?: object
}
export default class ListPanelPicker extends Component<ListPanelPickerProps> {
  constructor (props: ListPanelPickerProps) {
    super(props)

    this.state = {

    }
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  onClick = (object: DataItem) => {
    this.props.onClick && this.props.onClick(object)
  }

  render () {
    const { visible, data, header, style } = this.props
    return (
      <Modal visible={visible} popup animationType='slide-up' style={style} className='mdf-modal'>
        <div className='am-list-panel-picker'>
          {header && <div className='header'>{header}</div>}
          <div className='content'>
            {data && data.map((i, index) => (
              <div key={index} className={`content-item ${i.delete ? 'delete' : ''}`} onClick={() => { this.onClick(i) }}>{i && i.text}</div>
            ))}
          </div>
          <div className='footer'><Button onClick={this.onClose}>取消</Button></div>
        </div>
      </Modal>
    )
  }
}
