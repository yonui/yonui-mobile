import React from 'react'
import { List, DatePicker } from 'antd-mobile'
import { DatePickerPropsType } from 'antd-mobile/lib/date-picker/PropsType'
export interface ListDatePickerProps extends DatePickerPropsType{
  label?: string
  required?: boolean
  arrow?: boolean
}
class ListDatePicker extends React.Component<ListDatePickerProps> {
  render () {
    const { label, required, value, minDate, maxDate, arrow, ...restProps } = this.props
    const requiredCls = required ? 'required' : ''
    const valueTrs = (value && typeof value === 'string') ? new Date(value) : value
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    if (!this.props.format || this.props.format === '') {
      delete restProps.format
    }
    return (
      <List className={`list-date-picker ${!arrow && 'no-arrow'}`}>
        <DatePicker
          {...restProps}
          value={valueTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}>
          <List.Item
            arrow={arrow ? 'horizontal' : ''}
            className={`from-label ${requiredCls}`}>
            {label}
          </List.Item>
        </DatePicker>
      </List>
    )
  }
}
export default ListDatePicker
