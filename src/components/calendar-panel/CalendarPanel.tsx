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
    const now = new Date()
    this.state = {
      visible: props.visible,
      extra: props.dateExtra,
      now: new Date(now.getFullYear(), now.getMonth(), now.getDate())
    }
  }

  shouldComponentUpdate (nextProps) {
    // Object.keys(nextProps.dateExtra).length !== Object.keys(this.props.dateExtra).length
    if (JSON.stringify(nextProps.dateExtra) !== JSON.stringify(this.props.dateExtra)) {
      this.adaptExtra(nextProps.dateExtra)
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

  adaptExtra = (extra = {}) => {
    Object.keys(extra).forEach((key) => {
      const info = extra[key];
      const date = new Date(key);
      if (!Number.isNaN(+date) && extra[+date] !== info) {
        this.extra[+date] = info;
      }
    })
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
    const now = this.state.now
    if (+now === +date) {
      console.log('now', now, 'date', date)
      if (!this.extra[+date]) {
        this.extra[+date] = {}
      }
      const info = this.extra[+date].info
      this.extra[+date].cellRender = date => {
        return (
          <>
            <div className='date-wrapper'>
              <span className='left' />
              <div className='date'>今</div>
              <span className='right' />
            </div>
            <div className='info'>{info}</div>
          </>
        )
      }
    }
    return this.extra[+date]
  }

  render () {
    const { maxDate, minDate, defaultDate, defaultTimeValue, type, defaultValue } = this.props
    const { visible } = this.state
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
    if (!visible) return null
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
