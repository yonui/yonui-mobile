import React, { Component } from 'react'
import { Modal, Button } from 'antd-mobile'
import { isJSON } from '../_utils'
export interface DataItem {
  text?: any
  [key: string]: any
  delete?: boolean
}
export interface ListPanelPickerProps {
  visible: boolean
  header?: string
  data: any
  onClose: () => void
  onSelect: (object: DataItem) => void
  style?: object
  model?: any
}
interface ListPanelPickerState {
  open: boolean
}
export default class ListPanelPicker extends Component<ListPanelPickerProps, ListPanelPickerState> {
  constructor (props: ListPanelPickerProps) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount () {
    const { visible } = this.props
    this.setState({
      open: visible
    })
  }

  UNSAFE_componentWillReceiveProps (nextProps: ListPanelPickerProps) {
    this.setState({
      open: nextProps.visible
    })
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
    const { model } = this.props
    model?.setVisible(false)
    this.setState({
      open: false
    })
  }

  onClick = (object: DataItem) => {
    this.props.onSelect && this.props.onSelect(object)
    this.setState({
      open: false
    })
  }

  render () {
    const { data, header, style } = this.props
    const { open } = this.state
    const adaptedData = isJSON(data) ? JSON.parse(data) : data
    return (
      <Modal visible={open} popup animationType='slide-up' style={style} className='mdf-modal'>
        <div className='am-list-panel-picker'>
          {header && <div className='header'>{header}</div>}
          <div className='content'>
            {adaptedData.map((i, index) => (
              <div key={index} className={`content-item ${i.delete ? 'delete' : ''}`} onClick={() => { this.onClick(i) }}>{i && i.text}</div>
            ))}
          </div>
          <div className='footer'><Button onClick={this.onClose}>取消</Button></div>
        </div>
      </Modal>
    )
  }
}
