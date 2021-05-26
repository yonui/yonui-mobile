
import React, { Component } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { Icon } from 'antd-mobile'
export interface CalendarPanelProps extends CalendarProps {
  dateInfo?: any
  style?: object
  onSelect?: (value) => void
}
export default class CalendarPanel extends Component<CalendarPanelProps, any> {
  constructor (props: CalendarProps) {
    super(props)
    this.state = {}
  }

  getKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  tileContent = ({ date, view }) => {
    const { dateInfo } = this.props
    const key = this.getKey(date)
    const info = dateInfo[key]
    return (
      <span className='info'>
        {view === 'month' && info?.info}
      </span>
    )
  }

  tileDisabled = ({ date, view }) => {
    const { dateInfo } = this.props
    const key = this.getKey(date)
    const info = dateInfo[key]
    return view === 'month' && info?.disable
  }

  // 获取信息
  onChange = value => {
    const { selectRange, onSelect } = this.props
    // range
    if (selectRange) {
      const startDate = value[0]
      const endDate = value[1]
      const selectedDays = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000))
      const selectInfo = { start: startDate, end: endDate, days: selectedDays }
      onSelect?.(selectInfo)
      console.log('start:', startDate, 'end:', endDate, 'days:', selectedDays)
    } else {
      const date = value
      onSelect?.(value)
      console.log('select:', date)
    }
  }

  render () {
    const { maxDate, minDate, selectRange, style } = this.props
    let { value, returnValue = 'start' } = this.props
    if (selectRange && Array.isArray(value)) {
      value[0] = (typeof value[0] === 'string') ? new Date(value[0]) : value[0]
      if (value[1]) {
        value[1] = (typeof value[1] === 'string') ? new Date(value[1]) : value[1]
      }
    } else {
      if (Array.isArray(value)) {
        value = (typeof value[0] === 'string') ? new Date(value[0]) : value[0]
      } else {
        value = (typeof value === 'string') ? new Date(value) : value
      }
    }
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    if (selectRange) returnValue = 'range'
    return (
      <div style={style} className='mdf-calendar-panel'>
        <Calendar
          {...this.props}
          className={`am-calendar-panel ${this.props.selectRange ? 'am-calendar-panel-range' : ''}`}
          returnValue={returnValue}
          onChange={this.onChange}
          tileContent={this.tileContent}
          tileDisabled={this.tileDisabled}
          value={value}
          tileClassName='am-calendar-panel-item'
          minDetail='year'
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          locale='zh'
          prevLabel={<Icon type='left' />}
          nextLabel={<Icon type='right' />}
        />
      </div>
    )
  }
}
