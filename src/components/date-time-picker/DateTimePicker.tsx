import React from 'react'
import { DatePicker, Calendar, Icon } from 'antd-mobile'
// import { DatePickerPropsType } from 'antd-mobile/lib/date-picker/PropsType'
import { dateFormat, formatStringToDate } from '../_utils'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
import moment from 'moment'
export interface ListDatePickerProps extends ListItemWrapperProps{
  dateMode?: 'picker-date' | 'picker-time' | 'picker-datetime' | 'picker-year' | 'picker-month' | 'calendar-date' | 'calendar-datetime'
  minDate?: Date | string
  maxDate?: Date | string
  defaultValue?: Date | string
  format?: string
  disabled?: boolean
  value?: Date | string
  extra?: string
  title?: string
  visible?: boolean
  onChangeDate?: (dateTime?: string) => void
  onCancel?: () => void
}
interface ListDatePickerState {
  aVisible?: boolean
  _value?: Date
  minDate?: Date | string
  maxDate?: Date | string
}

enum DateFormatMap {
  date = 'YYYY-MM-DD',
  time = 'HH:mm',
  dateTime = 'YYYY-MM-DD HH:mm',
  year = 'YYYY',
  month = 'YYYY-MM'
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
    dateMode: 'picker-date',
    visible: true
  }

  constructor (props: ListDatePickerProps) {
    super(props)
    this.state = {
      aVisible: false,
      _value: formatStringToDate(props.defaultValue),
      minDate: this.props.minDate,
      maxDate: this.props.maxDate
    }
  }

  componentDidMount () {
    if (this.props.model)
      this.props.model.addListener(this);
  }

  componentDidUpdate () {
    if (this.props.model)
      this.props.model.addListener(this);
  }

  componentWillUnmount () {
    if (this.props.model)
      this.props.model.removeListener(this);
  }

  setRange (e) {
    this.setState({
      minDate: e?.minDate,
      maxDate: e?.maxDate
    })
  }

  onOpenCalendar = () => {
    this.setState({
      aVisible: true
    })
  }

  onCancel = () => {
    this.props.onCancel && this.props.onCancel()
    this.setState({
      aVisible: false
    })
  }

  handClick = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({
      aVisible: true
    })
  }

  onConfirm = (dateTime?: Date) => {
    if (!dateTime) return
    const { onChangeDate, format, dateMode } = this.props
    let _format = format || modeToFormat(dateMode)
    _format = this._formatHandler(_format)
    // console.log(moment(dateTime), moment(dateTime).format('YYYY-MM-DD HH:mm'))s
    onChangeDate?.(moment(dateTime).format(_format))
    this.setState({
      aVisible: false,
      _value: dateTime
    })
  }

  _formatHandler = (_format?: string) => {
    if (_format === DateFormatMap.year || _format === DateFormatMap.month) {
      return DateFormatMap.date
    } else {
      return _format
    }
  }

  render () {
    const { label, required, value, disabled, mReadOnly, style, dateMode, onCancel, format, extra, title, splitLine, labelCls: lbc, visible, ...restProps } = this.props
    const { aVisible, _value, minDate, maxDate } = this.state
    if (!visible) return null
    const defaultValue = (_value && typeof _value === 'string') ? new Date(_value) : _value
    let valueTrs
    if (dateMode === 'picker-time' && !/\/|-/.test(value + '')) {
      valueTrs = (value === '' || value === undefined) ? _value : formatStringToDate(`1970/01/01 ${value}`)
    } else {
      valueTrs = (value === '' || value === undefined) ? _value : formatStringToDate(value)
    }
    const minDateTrs = dateMode === 'picker-time' ? undefined : formatStringToDate(minDate)
    const maxDateTrs = dateMode === 'picker-time' ? undefined : formatStringToDate(maxDate)
    const typeAndMode = dateMode?.split('-') || []
    const fmt = format || modeToFormat(dateMode)
    const labelCls = classnames(lbc, 'date-time-picker-label')
    const valueCls = classnames('date-time-picker-value', {
      'date-time-picker-value-read-only': mReadOnly,
      'date-time-picker-value-disabled': !mReadOnly && disabled
    })
    if (typeAndMode[0] === 'calendar') {
      const wrapperProps = getListItemProps(this.props, {
        labelCls,
        className: 'date-time-picker',
        singleLine: true,
        onClick: !(disabled || mReadOnly) ? this.onOpenCalendar : undefined
      })
      return (<>
        <Wrapper {...wrapperProps}>
          <div className={valueCls}>
            {valueTrs ? dateFormat(valueTrs, fmt) : extra}
            {!(disabled || mReadOnly) && <Icon style={{ color: '#bfbfbf', marginRight: '-6px' }} type='right' />}
          </div>
        </Wrapper>
        <span className='date-time-picker-calendar-wrapper'>
          <Calendar
            // {...restProps}
            title='title'
            defaultValue={[defaultValue]}
            minDate={minDateTrs}
            maxDate={maxDateTrs}
            visible={aVisible}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
            pickTime={typeAndMode[1] === 'datetime'}
            type='one'
          />
        </span>
      </>)
    } else {
      const wrapperProps = getListItemProps(this.props, {
        className: `date-time-picker ${(disabled || mReadOnly) && 'no-arrow'}`,
        singleLine: true,
        onClick: !(disabled || mReadOnly) ? this.onOpenCalendar : undefined
      })
      return (
        <DatePicker
          {...restProps}
          defaultValue={defaultValue}
          title={title}
          extra={extra}
          format={format}
          disabled={disabled || mReadOnly}
          value={valueTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          mode={typeAndMode[1]}
          onOk={this.onConfirm}
          onDismiss={this.onCancel}
        >
          <Wrapper {...wrapperProps}>
            <div className={valueCls}>
              {/* {valueTrs ? dateFormat(valueTrs, fmt || 'yyyy-MM-dd') : dateFormat(new Date(),fmt || 'yyyy-MM-dd')} */}
              {valueTrs ? moment(valueTrs).format(fmt || 'yyyy-MM-DD') : extra}
              {!(disabled || mReadOnly) && <Icon style={{ color: '#bfbfbf', marginRight: '-6px' }} type='right' />}
            </div>
          </Wrapper>
        </DatePicker>
      )
    }
  }
}
export default ListDatePicker
