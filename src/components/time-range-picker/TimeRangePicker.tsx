import React, { Component } from 'react'
import { DatePickerView, Modal, Icon } from 'antd-mobile'
import Wrapper, { getListItemProps } from '../list-item-wrapper'
import moment from 'moment'
import classnames from 'classnames'
// import { DatePickerProps } from 'antd-mobile/lib/date-picker-view/PropsType'
export interface DatePanelPickerProps {
  visible?: boolean
  minDate?: Date | string
  maxDate?: Date | string
  value?: string[]
  minuteStep?: number
  mode?: 'time' | 'datetime' | 'date' | 'year' | 'month'
  disabled?: boolean
  mReadOnly?: boolean
  onDismiss?: () => void
  onOk?: (date: Object) => void
}

const DateFormatMap = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  dateTime: 'YYYY-MM-DD HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM'
}

export default class DatePanelPicker extends Component<DatePanelPickerProps, any> {
  constructor (props: any) {
    super(props)
    const { value = [] } = props
    const now = new Date()
    const nowDate = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`
    const nowTime = `${now.getHours()}:${now.getMinutes()}`
    const date = value[0] || nowDate
    const startTime = value[1] || nowTime
    const endTime = value[2] || nowTime
    this.state = {
      startDate: new Date(`${date} ${startTime}`),
      endDate: new Date(`${date} ${endTime}`),
      finalStartDate: new Date(`${date} ${startTime}`),
      finalEndDate: new Date(`${date} ${endTime}`)
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
    const { minuteStep = 5 } = this.props
    const minutes = date.getMinutes()
    const showMinutes = minutes - minutes % minuteStep
    date.setMinutes(showMinutes >= 0 ? showMinutes : 0)
  }

  onOk = () => {
    const { startDate, endDate } = this.state
    this.setState({
      finalStartDate: startDate,
      finalEndDate: endDate
    })
    const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
    const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`
    const date = `${endDate.getFullYear()}/${endDate.getMonth()}/${endDate.getDate()}`
    this.props.onOk && this.props.onOk([date, startTime, endTime])
    this._onClick()
  }

  onDismiss = () => {
    const { finalStartDate, finalEndDate } = this.state
    this.setState({
      startDate: finalStartDate,
      endDate: finalEndDate
    })
    this.props.onDismiss && this.props.onDismiss()
    this._onClick()
  }

  _onClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    const { minDate, maxDate, value, minuteStep = 5, mode = 'time', mReadOnly, disabled, ...restProps } = this.props
    const { startDate, endDate, finalStartDate, finalEndDate, visible } = this.state
    this.valueTrans(startDate)
    this.valueTrans(endDate)
    this.valueTrans(finalStartDate)
    this.valueTrans(finalEndDate)
    const minDateTrs = (typeof minDate === 'string') ? new Date(minDate.replace(/-/g, '/')) : minDate
    const maxDateTrs = (typeof maxDate === 'string') ? new Date(maxDate.replace(/-/g, '/')) : maxDate
    const valueCls = classnames('time-range-picker-value', {
      'time-range-picker-value-read-only': mReadOnly,
      'time-range-picker-value-disabled': !mReadOnly && disabled
    })
    const wrapperProps = getListItemProps(this.props, {
      className: `date-time-picker ${(disabled || mReadOnly) && 'no-arrow'}`,
      singleLine: true,
      onClick: !(disabled || mReadOnly) ? this._onClick : undefined
    })
    return (
      <>
        <Wrapper {...wrapperProps}>
          <div className={valueCls}>
            {finalStartDate && moment(finalStartDate).format(DateFormatMap[mode])} - {finalEndDate && moment(finalEndDate).format(DateFormatMap[mode])}
            {!(disabled || mReadOnly) && <Icon style={{ color: '#bfbfbf', marginRight: '-6px' }} type='right' />}
          </div>
        </Wrapper>
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
                mode={mode}
              />
              <span className='mid-text'>到</span>
              <DatePickerView
                {...restProps}
                onChange={date => this.onChange('end', date)}
                minuteStep={minuteStep}
                value={endDate}
                minDate={startDate}
                maxDate={maxDateTrs}
                mode={mode}
              />
            </div>
          </div>
        </Modal>
      </>
    )
  }
}
