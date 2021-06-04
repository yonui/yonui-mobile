import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
interface YonuiCalenderProps extends CalendarProps {
  dateExtra: any
  onClickDay: any
}
export default class MyComponent extends Component<YonuiCalenderProps> {
  constructor (props) {
    super(props)
    this.state = {
      visible: props.visible,
      extra: props.dateExtra
    }
  }

  shouldComponentUpdate (nextProps) {
    if (Object.keys(nextProps.dateExtra).length !== Object.keys(this.props.dateExtra).length) {
      this.setState({
        visible: !this.state.visible
      }, () => {
        this.setState({
          visible: !this.state.visible
        })
      })
    }
    return true
  }

  extra = []

  adaptExtra = () => {
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

  onSelect = (value, state) => {
    let isRange = false
    if (state[0] && state[1] === undefined) {
      isRange = true
    }
    const range1 = value
    const range2 = state[0]
    const range = range1 < range2 ? [range1, range2] : [range2, range1]
    const res = {
      isRange: isRange,
      range: range,
      now: value
    }
    this.props.onClickDay?.(res)
  }

  getDateExtra = date => {
    console.log('this.extra', this.extra)
    return this.extra[+date]
  }

  render () {
    const { maxDate, minDate, defaultDate, defaultTimeValue, type, defaultValue, dateExtra } = this.props
    const { visible } = this.state
    this.adaptExtra()
    console.log('extra', dateExtra, 'defaultValue', defaultValue)
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
      <div className='am-calendar-panel'>
        <Calendar
          {...this.props}
          visible={visible}
          onSelect={this.onSelect}
          prefixCls='am-calendar'
          defaultDate={defaultDateTrs}
          defaultValue={defaultValue}
          defaultTimeValue={defaultTimeValueTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          getDateExtra={this.getDateExtra}
        />
      </div>
    )
  }
}
