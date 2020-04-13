import React from 'react'
import { DatePicker, Calendar, Icon } from 'antd-mobile'
import { DatePickerPropsType } from 'antd-mobile/lib/date-picker/PropsType'
import { dateFormat } from '../_utils'
import Wrapper from '../list-item-wrapper'
import classnames from 'classnames'
export interface ListDatePickerProps extends DatePickerPropsType {
  label?: string
  required?: boolean
  arrow?: boolean
  style?: object
  dateMode?: 'picker-date' | 'picker-time' | 'picker-datetime' | 'picker-year' | 'picker-month' | 'calendar-date' | 'calendar-datetime'
  splitLine?: boolean
  onChangeDate?: (dateTime?: string) => void
  onCancel?: () => void
}
interface ListDatePickerState {
  visible?: boolean
  _value?: Date
}

enum DateFormatMap {
  date = 'yyyy-MM-dd',
  time = 'HH:mm',
  dateTime = 'yyyy-MM-dd HH:mm',
  year = 'yyyy',
  month = 'yyyy-MM'
}

const modeToFormat = (mode?: string) => {
  switch (mode) {
    case 'picker-year': {
      return DateFormatMap.year
    }
    case 'picker-month': {
      return DateFormatMap.month
    }
    case 'picker-time': {
      return DateFormatMap.time
    }
    case 'picker-datetime':
    case 'calendar-datetime': {
      return DateFormatMap.dateTime
    }
    case 'picker-date':
    case 'calendar-date':
    default: {
      return DateFormatMap.date
    }
  }
}

class ListDatePicker extends React.Component<ListDatePickerProps, ListDatePickerState> {
  static defaultProps = {
    arrow: true,
    dateMode: 'picker-date'
  }

  constructor (props: ListDatePickerProps) {
    super(props)
    this.state = {
      visible: false,
      _value: undefined
    }
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
    if (!dateTime) return
    const { onChangeDate, format, dateMode } = this.props
    const _format = format || modeToFormat(dateMode)
    const _dateTime = typeof _format === 'string' ? dateFormat(dateTime, _format) : _format(dateTime)
    onChangeDate && onChangeDate(_dateTime)
    this.setState({
      visible: false,
      _value: dateTime
    })
    console.log(_dateTime)
  }

  render () {
    const { label, required, value, minDate, maxDate, arrow, disabled, style, dateMode, onCancel, format, extra, title, splitLine, ...restProps } = this.props
    const { visible, _value } = this.state
    const valueTrs = (value === undefined) ? _value : ((value && typeof value === 'string') ? new Date(value) : value)
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const typeAndMode = dateMode?.split('-') || []
    // const fmt = (format && typeof format === 'string') ? format : ((format && value ? format(value) : 'yyyy-MM-dd'))
    const fmt = format ? (typeof format === 'string' ? format : (value && format(value))) : modeToFormat(dateMode)
    const labelCls = classnames('date-time-picker-label')
    const valueCls = classnames('date-time-picker-value')
    if (typeAndMode[0] === 'calendar') {
      return (<Wrapper className='date-time-picker' style={style} splitLine={splitLine} singleLine label={label} required={required}>
        <div className={valueCls} onClick = {!disabled ? this.onOpenCalendar : undefined}>
          {valueTrs ? dateFormat(valueTrs, fmt || 'yyyy-MM-dd') : extra}
          <Icon type='right'/>
        </div>
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
      </Wrapper>)
    } else {
      return (
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
          <Wrapper className={`date-time-picker ${(disabled || !arrow) && 'no-arrow'}`} style={style} splitLine={splitLine} label={label} labelCls={labelCls} required={required} singleLine>
            <div className={valueCls} onClick = {!disabled ? this.onOpenCalendar : undefined}>
              {valueTrs ? dateFormat(valueTrs, fmt || 'yyyy-MM-dd') : extra}
              <Icon type='right'/>
            </div>
          </Wrapper>
        </DatePicker>
      )
    }
  }
}
export default ListDatePicker
