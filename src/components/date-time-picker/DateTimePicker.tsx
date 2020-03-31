import React from 'react'
import { List, DatePicker, Calendar } from 'antd-mobile'
import { DatePickerPropsType } from 'antd-mobile/lib/date-picker/PropsType'
import { dateFormat } from '../_utils'
export interface ListDatePickerProps extends DatePickerPropsType {
  label?: string
  required?: boolean
  arrow?: boolean
  style?: object
  dateMode?: 'picker-date' | 'picker-time' | 'picker-datetime' | 'picker-year' | 'picker-month' | 'calendar-date' | 'calendar-datetime'
  onConfirm?: (dateTime?: Date) => void
  onCancel?: () => void
}

interface ListDatePickerState {
  visible?: boolean
}
class ListDatePicker extends React.Component<ListDatePickerProps, ListDatePickerState> {
  static defaultProps = {
    arrow: true,
    dateMode: 'picker-date'
  }

  state = {
    visible: false
  }

  onOpenCalendar = () => {
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

  onConfirm = (dateTime?: Date) => {
    this.props.onConfirm && this.props.onConfirm(dateTime)
    this.setState({
      visible: false
    })
    console.log(dateTime)
  }

  render () {
    const { label, required, value, minDate, maxDate, arrow, disabled, style, dateMode, onConfirm, onCancel, format, extra, title, ...restProps } = this.props
    const { visible } = this.state
    const requiredCls = required ? 'required' : ''
    const valueTrs = (value && typeof value === 'string') ? new Date(value) : value
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const typeAndMode = dateMode?.split('-') || []
    // const fmt = (format && typeof format === 'string') ? format : ((format && value ? format(value) : 'yyyy-MM-dd'))
    const fmt = format ? (typeof format === 'string' ? format : (value && format(value))) : 'yyyy-MM-dd'
    if (typeAndMode[0] === 'calendar') {
      return (<List className='date-time-picker' style={style}>
        <List >
          <List.Item
            arrow={arrow ? 'horizontal' : ''}
            className={`form-label ${requiredCls}`}
            onClick = {!disabled ? this.onOpenCalendar : undefined}
            extra = { valueTrs ? dateFormat(valueTrs, fmt || 'yyyy-MM-dd') : extra}
          >
            {label}
          </List.Item>
        </List>
        <Calendar
          // {...restProps}
          title='title'
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          visible = {visible}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          pickTime={typeAndMode[1] === 'datetime'}
          type='one'
        />
      </List>)
    } else {
      return <List className={`date-time-picker ${(disabled || !arrow) && 'no-arrow'}`} style={style}>
        <DatePicker
          {...restProps}
          title={title}
          extra={extra}
          format={format}
          disabled={disabled}
          value={valueTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          mode={typeAndMode[1]}
          onOk={this.onConfirm}
          onDismiss={this.onCancel}
        >
          <List.Item
            arrow={arrow ? 'horizontal' : ''}
            className={`form-label ${requiredCls}`}>
            {label}
          </List.Item>
        </DatePicker>
      </List>
    }
  }
}
export default ListDatePicker
