import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
interface YonuiCalenderProps extends CalendarProps {
  dateExtra: any
}
export default class MyComponent extends Component<YonuiCalenderProps> {
  componentDidMount () {
    const { dateExtra: extra = {} } = this.props
    Object.keys(extra).forEach((key) => {
      const info = extra[key];
      const date = new Date(key);
      if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
      }
    })
    this.extra = extra
  }

  extra={}

  getDateExtra = date => this.extra[+date]

  render () {
    const { maxDate, minDate, defaultDate, defaultValue, defaultTimeValue, type } = this.props
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    if (defaultValue && defaultValue.length) {
      defaultValue[0] = (typeof defaultValue[0] === 'string') ? new Date(defaultValue[0]) : defaultValue[0]
      if (defaultValue[1]) {
        if (type === 'one') {
          delete defaultValue[1]
          defaultValue.length = 1
        } else {
          defaultValue[1] = (typeof defaultValue[1] === 'string') ? new Date(defaultValue[1]) : defaultValue[1]
        }
      }
    }
    return (
      <Calendar
        {...this.props}
        prefixCls='am-calendar'
        defaultDate={defaultDateTrs}
        defaultValue={defaultValue}
        defaultTimeValue={defaultTimeValueTrs}
        minDate={minDateTrs}
        maxDate={maxDateTrs}
        getDateExtra={this.getDateExtra}
      />
    )
  }
}
