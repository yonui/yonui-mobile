import React from 'react'
import Calendar from '../calendar'
import { Flex, InputItem } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
import { dateFormat } from '../_utils'
import Wrapper from '../list-item-wrapper'
import DateTimePicker from '../date-time-picker'
export declare type SelectDateType = [Date, Date] | [Date];
export interface ListCalendarProps extends CalendarProps {
  label?: string
  required?: boolean
  value?: SelectDateType
  arrow?: boolean
  format?: string
  disabled?: boolean
  mode?: 'default' | 'range'
  onChangeDate?: (time: [string, string]) => void
  onStartChange?: (time?: string) => void
  onEndChange?: (time?: string) => void
  splitLine?: boolean
  startLabel?: string
  endLabel?: string
}
interface ListCalendarStates {
  visible?: boolean
}
export default class ListCalendar extends React.Component<ListCalendarProps, ListCalendarStates> {
  static defaultProps = {
    format: 'yyyy-MM-dd'
  }

  constructor (props: ListCalendarProps) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onClick = () => {
    this.setState({
      visible: true
    })
  }

  onCancel = () => {
    this.props.onCancel && this.props.onCancel()
    this.setState({
      visible: false
    })
  }

  handClick = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({
      visible: true
    })
  }

  onConfirm = (startDateTime: Date, endDateTime: Date) => {
    const { onChangeDate, format = 'yyyy-MM-dd' } = this.props
    onChangeDate && onChangeDate([dateFormat(startDateTime, format), dateFormat(endDateTime, format)])
    this.setState({
      visible: false
    })
  }

  render () {
    const { visible } = this.state
    const { label, required, value, format, maxDate, minDate, defaultDate, defaultTimeValue, style, pickTime, mode = 'default', onStartChange, onEndChange, splitLine, startLabel, endLabel } = this.props
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    const start = (value && value.length && value[0]) ? dateFormat(value[0], format || 'yyyy-MM-dd') : ''
    const end = (value && value.length && value[1]) ? dateFormat(value[1], format || 'yyyy-MM-dd') : ''
    console.log('props is ', this.props)
    if (mode === 'default') {
      const dateMode = pickTime ? 'picker-datetime' : 'picker-date'
      return <div className='date-time-range-wrapper' style={style}>
        <DateTimePicker label={startLabel} dateMode={dateMode} onChangeDate={onStartChange} value={start} required={required} splitLine={splitLine} extra='请选择'/>
        <DateTimePicker label={endLabel} dateMode={dateMode} onChangeDate={onEndChange} value={end} required={required} splitLine={splitLine} extra='请选择'/>
      </div>
    }
    return (
      <div className='date-time-range-wrapper' style={style}>
        <Wrapper className='date-time-range' label={label} required={required} singleLine splitLine={splitLine}>
          <Flex className='calendar-range' onClick={this.handClick.bind(this)}>
            <Flex.Item>
              <InputItem placeholder={startLabel} disabled clear value={start}/>
            </Flex.Item> - <Flex.Item>
              <InputItem placeholder={endLabel} disabled clear value={end}/>
            </Flex.Item>
          </Flex>
        </Wrapper>
        <Calendar
          {...this.props}
          pickTime={pickTime}
          prefixCls='am-calendar'
          defaultDate={defaultDateTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          defaultTimeValue={defaultTimeValueTrs}
          visible={visible}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          defaultValue={value}/>
      </div>
    )
  }
}
