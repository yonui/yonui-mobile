import React, { Component } from 'react'
import { DatePickerView, Modal } from 'antd-mobile'
// import { DatePickerProps } from 'antd-mobile/lib/date-picker-view/PropsType'
export interface DatePanelPickerProps{
  visible: boolean
  header?: string
  minDate?: Date | string
  maxDate?: Date | string
  value?: Date | string
  onDismiss: () => void
  onOk: (date: Object) => void
}
export default class DatePanelPicker extends Component<DatePanelPickerProps, any> {
  constructor (props: any) {
    super(props)
    const { value, minDate } = props
    const valueTrs = (value && typeof value === 'string') ? new Date(value.replace(/-/g, '/')) : value
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate.replace(/-/g, '/')) : minDate
    this.state = {
      date: valueTrs || (minDateTrs || new Date(2000, 1, 1, 0, 0, 0))
    }
  }

  onChange =(date: Object) => {
    this.setState({
      date
    })
  }

  onOk = () => {
    const { date } = this.state
    this.props.onOk && this.props.onOk(date)
  }

  onDismiss = () => {
    this.props.onDismiss && this.props.onDismiss()
  }

  render () {
    const { visible, minDate, maxDate, value, ...restProps } = this.props
    const minDateTrs = (typeof minDate === 'string') ? new Date(minDate.replace(/-/g, '/')) : minDate
    const maxDateTrs = (typeof maxDate === 'string') ? new Date(maxDate.replace(/-/g, '/')) : maxDate
    const valueTrs = (typeof value === 'string') ? new Date(value.replace(/-/g, '/')) : value
    return (
      <Modal
        visible={visible}
        popup
        animationType='slide-up'>
        <div className='am-date-panel-picker'>
          <div className='operation'>
            <div className='item cancel' onClick={this.onDismiss}>取消</div>
            <div className='item confirm' onClick={this.onOk}>确认</div>
          </div>
          <DatePickerView
            {...restProps}
            onChange={this.onChange}
            minDate={minDateTrs}
            maxDate={maxDateTrs}
            value={valueTrs}
          />
        </div>
      </Modal>
    )
  }
}
