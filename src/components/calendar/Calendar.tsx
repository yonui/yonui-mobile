import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
export default class MyComponent extends Component<CalendarProps> {
  constructor (props: Readonly<{}>) {
    super(props)

    this.state = {

    }
  }

  render () {
    const { maxDate, minDate, defaultDate, defaultValue, type } = this.props
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
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
        minDate={minDateTrs}
        maxDate={maxDateTrs}/>
    )
  }
}
