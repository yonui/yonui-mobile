
import React, { Component } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
export interface CalendarPanelProps extends CalendarProps {
  dateInfo?: any
  style?: object
  onSelect?: (value) => void
}
export default class CalendarPanel extends Component<CalendarPanelProps, any> {
  constructor (props) {
    super(props)
    const { dateInfo = {} } = props
    const disabledDates = this.getDisabledDays(dateInfo)
    this.state = {
      disabledDates: disabledDates,
      value: props.value
    }
  }

  getDisabledDays = (dateInfo) => {
    const disabledDates = []
    for (const key in dateInfo) {
      if (dateInfo[key]?.disable) {
        disabledDates.push(new Date(key))
      }
    }
    return disabledDates
  }

  hasDisabledDays = (range) => {
    const { disabledDates } = this.state
    let hasDisabled = false
    for (let i = 0; i < disabledDates.length; i++) {
      if (range[0] <= disabledDates[i] && range[1] >= disabledDates[i]) {
        hasDisabled = true
        break
      }
    }
    return hasDisabled
  }

  getKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  tileContent = ({ date, view }) => {
    const { dateInfo = {} } = this.props
    const key = this.getKey(date)
    const info = dateInfo[key]
    return (
      <span className='info'>
        {view === 'month' && info?.info}
      </span>
    )
  }

  tileDisabled = ({ date, view }) => {
    const { dateInfo = {} } = this.props
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
      this.setState({
        value: value
      })
      const selectedDays = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000))
      const selectInfo = { start: startDate, end: endDate, days: selectedDays }
      onSelect?.(selectInfo)
      if (this.hasDisabledDays(value)) {
        console.log('包含禁用日期')
        this.setState({
          value: null
        })
      }
      // console.log('start:', startDate, 'end:', endDate, 'days:', selectedDays)
    } else {
      onSelect?.(value)
    }
  }

  render () {
    const { selectRange, style } = this.props
    let { returnValue = 'start' } = this.props
    const { value } = this.state
    console.log('render-value', value)
    if (selectRange) returnValue = 'range'
    return (
      <div style={style} className='mdf-calendar-panel'>
        <Calendar
          {...this.props}
          className='am-calendar-panel am-calendar-panel-range'
          returnValue={returnValue}
          onChange={this.onChange}
          tileClassName='am-calendar-panel-item'
          tileContent={this.tileContent}
          tileDisabled={this.tileDisabled}
          value={value}
          minDetail='month'
          locale='zh'
        />
      </div>
    )
  }
}
