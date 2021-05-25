
import React, { Component } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { Icon } from 'antd-mobile'
export interface CalendarPanelProps extends CalendarProps {
  dateInfo?: any
  style?: object
}
export default class CalendarPanel extends Component<CalendarPanelProps, any> {
  constructor (props: CalendarProps) {
    super(props)
    this.state = {}
  }

  onChange = (date: any) => {
    this.props.onChange && this.props.onChange(date)
  }

  onClickDay = (value) => {
    console.log('clickDay', value)
  }

  getKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  tileContent = ({ date, view }) => {
    const { dateInfo } = this.props
    const key = this.getKey(date)
    const info = dateInfo[key]
    return (view === 'month' && info?.info)
  }

  tileDisabled = ({ date, view }) => {
    const { dateInfo } = this.props
    const key = this.getKey(date)
    const info = dateInfo[key]
    return view === 'month' && info?.disable
  }

  render () {
    const { maxDate, minDate, selectRange, style } = this.props
    let { value } = this.props
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
    return (
      <div style={style} className='mdf-calendar-panel'>
        <Calendar
          {...this.props}
          className={`am-calendar-panel ${this.props.selectRange ? 'am-calendar-panel-range' : ''}`}
          onClickDay={this.onClickDay}
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
