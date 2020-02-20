import React from 'react'
import Calendar from '../calendar'
import { Flex, Icon, InputItem } from 'antd-mobile'
import List from '../list'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
import { dateFormat } from '../_utils'
export declare type SelectDateType = [Date, Date] | [Date];
export interface ListCalendarProps extends CalendarProps {
  label?: string
  required?: boolean
  value?: SelectDateType
  arrow?: boolean
  format?: string
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
    const { label, required, type, arrow, value, format } = this.props
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
          visible={visible}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          defaultValue={value}/>
      </List>
    )
  }
}
