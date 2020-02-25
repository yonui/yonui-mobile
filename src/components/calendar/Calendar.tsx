import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
export default class MyComponent extends Component<CalendarProps> {
    constructor(props: Readonly<{}>) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
      const {maxDate, minDate, defaultDate } = this.props
      const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
      const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
      const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
      return (
        <Calendar 
          {...this.props}
          defaultDate={defaultDateTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}/>
      )
    }
}