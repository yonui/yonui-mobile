import React from 'react'
import { DatePicker, Calendar, Icon } from 'antd-mobile'
// import { DatePickerPropsType } from 'antd-mobile/lib/date-picker/PropsType'
import { dateFormat, formatStringToDate } from '../_utils'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
export interface ListDatePickerProps extends ListItemWrapperProps{
  dateMode?: 'picker-date' | 'picker-time' | 'picker-datetime' | 'picker-year' | 'picker-month' | 'calendar-date' | 'calendar-datetime'
  minDate?: Date | string
  maxDate?: Date | string
  defafultValue?: Date | string
  format?: string
  disabled?: boolean
  value?: Date | string
  extra?: string
  title?: string
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
    // arrow: true,
    dateMode: 'picker-date'
  }

  constructor (props: ListDatePickerProps) {
    super(props)
    this.state = {
      visible: false,
      _value: formatStringToDate(props.defafultValue)
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
    const _dateTime = dateFormat(dateTime, _format)
    onChangeDate && onChangeDate(_dateTime)
    this.setState({
      visible: false,
      _value: dateTime
    })
  }

  render () {
    const { label, required, value, minDate, maxDate, disabled, style, dateMode, onCancel, format, extra, title, splitLine, labelCls: lbc, ...restProps } = this.props
    const { visible, _value } = this.state
    let valueTrs
    if (dateMode === 'picker-time') {
      valueTrs = (value === undefined) ? _value : formatStringToDate(`1970/01/01 ${value}`)
    } else {
      valueTrs = (value === undefined) ? _value : formatStringToDate(value)
    }
    const minDateTrs = dateMode === 'picker-time' ? undefined : formatStringToDate(minDate)
    const maxDateTrs = dateMode === 'picker-time' ? undefined : formatStringToDate(maxDate)
    const typeAndMode = dateMode?.split('-') || []
    const fmt = format || modeToFormat(dateMode)
    const labelCls = classnames(lbc, 'date-time-picker-label')
    const valueCls = classnames('date-time-picker-value', { disabled })
    if (typeAndMode[0] === 'calendar') {
      const wrapperProps = getListItemProps(this.props, {
        labelCls,
        className: 'date-time-picker',
        singleLine: true,
        onClick: !disabled ? this.onOpenCalendar : undefined
      })
      return (<>
        <Wrapper {...wrapperProps}>
          <div className={valueCls}>
            {valueTrs ? dateFormat(valueTrs, fmt) : extra}
            {!disabled && <Icon type='right' />}
          </div>
        </Wrapper>
        <span className='date-time-picker-calendar-wrapper'>
          <Calendar
            // {...restProps}
            title='title'
            minDate={minDateTrs}
            maxDate={maxDateTrs}
            visible={visible}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
            pickTime={typeAndMode[1] === 'datetime'}
            type='one'
          />
        </span>
      </>)
    } else {
      const wrapperProps = getListItemProps(this.props, {
        className: `date-time-picker ${disabled && 'no-arrow'}`,
        singleLine: true,
        onClick: !disabled ? this.onOpenCalendar : undefined
      })
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
          <Wrapper {...wrapperProps}>
            <div className={valueCls}>
              {valueTrs ? dateFormat(valueTrs, fmt || 'yyyy-MM-dd') : extra}
              {!disabled && <Icon type='right' />}
            </div>
          </Wrapper>
        </DatePicker>
      )
    }
  }
}
export default ListDatePicker
