import React, { Component } from 'react'
import { PickerView } from 'antd-mobile'
// import { DatePickerProps } from 'antd-mobile/lib/date-picker-view/PropsType'
export interface TimePickerProps {
  hoursData?: number[]
  minutesData?: number[]
  onConfirm?: (value) => void
  onCancel?: () => void
}
const defaultData = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  [0, 10, 20, 30, 40, 50]
]

export default class DatePanelPicker extends Component<TimePickerProps, any> {
  constructor (props) {
    super(props)
    const { hoursData = defaultData[0], minutesData = defaultData[1] } = props
    this.state = {
      value: null,
      hoursData: hoursData,
      minutesData: minutesData,
      startValue: [hoursData[0], minutesData[0]],
      endValue: [hoursData[0], minutesData[0]]
    }
  }

  adaptTimeData = (data, type) => {
    let adaptedData = []
    if (type === 'hour') {
      adaptedData = data.map(item => {
        return { label: `${item}时`, value: item }
      })
    } else if (type === 'minute') {
      adaptedData = data.map(item => {
        return { label: `${item}分`, value: item }
      })
    }
    return adaptedData
  }

  getPickerData = (type) => {
    const { hoursData, minutesData, startValue } = this.state
    const newHoursData = this.adaptTimeData(hoursData, 'hour')
    const newMinutesData = this.adaptTimeData(minutesData, 'minute')
    if (type === 'start') {
      return [newHoursData, newMinutesData]
    } else if (type === 'end') {
      const hindex = hoursData.indexOf(startValue[0])
      const mindex = minutesData.indexOf(startValue[1])
      return [newHoursData.splice(hindex, hoursData.length - hindex), newMinutesData.splice(mindex, minutesData.length - mindex)]
    }
  }

  onChange = (value, type) => {
    if (type === 'start') {
      this.setState({
        startValue: value,
      })
      const { endValue, startValue } = this.state
      let endHour = endValue[0]
      let endMinutes = endValue[1]
      endHour = endHour < startValue[0] ? startValue[0] : endHour
      endMinutes = endMinutes < startValue[1] ? startValue[1] : endMinutes
      this.setState({
        endValue: [endHour, endMinutes]
      })
    } else if (type === 'end') {
      this.setState({
        endValue: value
      })
    }
  }

  onCancel = () => {
    this.props.onCancel?.()
  }

  onConfirm = () => {
    const { startValue, endValue } = this.state
    startValue.splice(2, 1)
    const res = { startTime: startValue, endTime: endValue }
    this.props.onConfirm?.(res)
  }

  render () {
    const { startValue, endValue } = this.state
    return (
      <div className='yonui-time-range'>
        <div className='yonui-time-range-header'>
          <span className='yonui-time-range-header-cancel' onClick={this.onCancel}>取消</span>
          <span className='yonui-time-range-header-confirm' onClick={this.onConfirm}>确定</span>
        </div>
        <div className='yonui-time-range-body'>
          <PickerView
            onChange={value => this.onChange(value, 'start')}
            value={startValue}
            data={this.getPickerData('start').concat([[{ label: '到', value: '' }]])}
            cascade={false}
          />
          <PickerView
            onChange={value => this.onChange(value, 'end')}
            value={endValue}
            data={this.getPickerData('end')}
            cascade={false}
          />
        </div>

      </div>

    )
  }
}
