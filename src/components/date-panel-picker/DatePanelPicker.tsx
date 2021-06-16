import React, { Component } from 'react'
import { DatePickerView, Modal } from 'antd-mobile'
// import { DatePickerProps } from 'antd-mobile/lib/date-picker-view/PropsType'
export interface DatePanelPickerProps {
  visible: boolean
  minDate?: Date | string
  maxDate?: Date | string
  value?: string[]
  minuteStep?: number
  onDismiss: () => void
  onOk: (date: Object) => void
}
export default class DatePanelPicker extends Component<DatePanelPickerProps, any> {
  constructor (props: any) {
    super(props)
    const { value = [] } = props
    const now = new Date()
    const nowDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    const nowTime = `${now.getHours()}:${now.getMinutes()}`
    const date = value[0] || nowDate
    const startTime = value[1] || nowTime
    const endTime = value[2] || nowTime
    this.state = {
      startDate: new Date(`${date} ${startTime}`),
      endDate: new Date(`${date} ${endTime}`)
    }
  }

  onChange =(type: string, date: Object) => {
    if (type === 'start') {
      this.setState({
        startDate: date
      })
      const { startDate, endDate } = this.state
      if (startDate > endDate) {
        this.setState({
          endDate: startDate
        })
      }
    } else {
      this.setState({
        endDate: date
      })
    }
  }

  valueTrans =(date) => {
    const { minuteStep = 30 } = this.props
    const minutes = date.getMinutes()
    const showMinutes = minutes - minutes % minuteStep
    date.setMinutes(showMinutes >= 0 ? showMinutes : 0)
  }

  onOk = () => {
    const { startDate, endDate } = this.state
    const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
    const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`
    const date = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
    this.props.onOk && this.props.onOk([date, startTime, endTime])
  }

  onDismiss = () => {
    this.props.onDismiss && this.props.onDismiss()
  }

  render () {
    const { visible, minDate, maxDate, value, minuteStep = 30, ...restProps } = this.props
    const { startDate, endDate } = this.state
    this.valueTrans(startDate)
    this.valueTrans(endDate)
    const minDateTrs = (typeof minDate === 'string') ? new Date(minDate.replace(/-/g, '/')) : minDate
    const maxDateTrs = (typeof maxDate === 'string') ? new Date(maxDate.replace(/-/g, '/')) : maxDate
    return (
      <Modal
        visible={visible}
        popup
        animationType='slide-up'
      >
        <div className='am-date-panel-picker'>
          <div className='operation'>
            <div className='item cancel' onClick={this.onDismiss}>取消</div>
            <div>时间选择</div>
            <div className='item confirm' onClick={this.onOk}>确认</div>
          </div>
          <div className='picker-area'>
            <DatePickerView
              {...restProps}
              onChange={date => this.onChange('start', date)}
              minuteStep={minuteStep}
              value={startDate}
              minDate={minDateTrs}
              maxDate={maxDateTrs}
              mode='time'
            />
            <span className='mid-text'>到</span>
            <DatePickerView
              {...restProps}
              onChange={date => this.onChange('end', date)}
              minuteStep={minuteStep}
              value={endDate}
              minDate={startDate}
              maxDate={maxDateTrs}
              mode='time'
            />
          </div>

        </div>
      </Modal>
    )
  }
}
