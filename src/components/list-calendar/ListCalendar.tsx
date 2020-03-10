import React from 'react'
import Calendar from '../calendar'
import { Flex, Icon, InputItem } from 'antd-mobile'
import List from '../list-copy'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
import { dateFormat } from '../_utils'
export declare type SelectDateType = [Date, Date] | [Date];
export interface ListCalendarProps extends CalendarProps {
  label?: string
  required?: boolean
  value?: SelectDateType
  arrow?: boolean
  format?: string
  disabled?: boolean
}
interface ListCalendarStates {
  visible?: boolean
}
export default class ListCalendar extends React.Component<ListCalendarProps, ListCalendarStates> {
  static defaultProps = {
    type: 'one',
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
    this.props.onConfirm && this.props.onConfirm(startDateTime, endDateTime)
    this.setState({
      visible: false
    })
  }

  render () {
    const { visible } = this.state
    const { label, required, type, arrow, value, format, maxDate, minDate, defaultDate, defaultTimeValue } = this.props
    if (value && value.length) {
      value[0] = (typeof value[0] === 'string') ? new Date(value[0]) : value[0]
      if (value[1]) {
        if (type === 'one') {
          delete value[1]
          value.length = 1
        } else {
          value[1] = (typeof value[1] === 'string') ? new Date(value[1]) : value[1]
        }
      }
    }
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    const start = (value && value.length) ? dateFormat(value[0], format || 'yyyy-MM-dd') : ''
    const end = (value && value.length && value[1]) ? dateFormat(value[1], format || 'yyyy-MM-dd') : ''
    const requiredCls = required ? 'required' : ''
    return (
      <List className='list-calendar'>
        {type === 'one' ? <List onClick={this.handClick.bind(this)}>
          <InputItem
            placeholder='选择日期'
            disabled
            clear
            value={start}
            extra={arrow && <Icon type='right'/>}>
            <div className={`form-label ${requiredCls}`}>{label}</div>
          </InputItem>
        </List>
          : <div className='list-calendar-range'>
            <div className={`form-label ${requiredCls} form-label-calendar`}>{label}</div>
            <Flex className='calendar-range' onClick={this.handClick.bind(this)}>
              <Flex.Item>
                <InputItem placeholder='开始日期' disabled clear value={start}/>
              </Flex.Item> - <Flex.Item>
                <InputItem placeholder='结束日期' disabled clear value={end}/>
              </Flex.Item>
            </Flex>
          </div>}
        <Calendar
          {...this.props}
          prefixCls='am-calendar'
          defaultDate={defaultDateTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          defaultTimeValue={defaultTimeValueTrs}
          visible={visible}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          defaultValue={value}/>
      </List>
    )
  }
}
