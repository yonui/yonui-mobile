
import React, { Component } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
export interface CalendarPanelProps extends CalendarProps {
  dateInfo?: any
  style?: object
  showHeader?: boolean
  onSelect?: (value) => void
  onCancel?: () => void
  onConfirm?: (value) => void
}
export default class CalendarPanel extends Component<CalendarPanelProps, any> {
  constructor (props) {
    super(props)
    const { dateInfo = {}, value } = props
    const disabledDates = this.getDisabledDays(dateInfo)
    const selectedInfo = this.getSelectedInfo(value)
    this.state = {
      disabledDates: disabledDates,
      value: value,
      selectedInfo: selectedInfo
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

  getSelectedInfo = (value) => {
    const { selectRange } = this.props
    let selectInfo
    if (selectRange) {
      const startDate = value[0]
      const endDate = value[1]
      const selectedDays = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000))
      selectInfo = { start: startDate, end: endDate, days: selectedDays }
    } else {
      selectInfo = value
    }
    return selectInfo
  }

  // 获取信息
  onChange = value => {
    const { selectRange, onSelect } = this.props
    this.setState({
      value: value,
      selectedInfo: value
    })
    // range
    if (selectRange) {
      const selectedInfo = this.getSelectedInfo(value)
      this.setState({
        selectedInfo: selectedInfo
      })
      onSelect?.(selectedInfo)
      if (this.hasDisabledDays(value)) {
        console.log('包含禁用日期')
        this.setState({
          value: null
        })
      }
    } else {
      onSelect?.(value)
    }
  }

  onCancel = () => {
    const { onCancel } = this.props
    onCancel?.()
  }

  onConfirm = () => {
    const { onConfirm } = this.props
    const { selectedInfo } = this.state
    onConfirm?.(selectedInfo)
  }

  render () {
    const { selectRange, style, showHeader = false } = this.props
    let { returnValue = 'start' } = this.props
    const { value } = this.state
    if (selectRange) returnValue = 'range'
    return (
      <div style={style} className='mdf-calendar-panel'>
        {showHeader && <div className='mdf-calendar-panel-header'>
          <span className='mdf-calendar-panel-header-cancel' onClick={this.onCancel}>取消</span>
          <span className='mdf-calendar-panel-header-confirm' onClick={this.onConfirm}>确定</span>
        </div>}
        <Calendar
          {...this.props}
          className='am-calendar-panel am-calendar-panel-range'
          returnValue={returnValue}
          calendarType='US'
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
