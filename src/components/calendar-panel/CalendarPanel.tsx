import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
interface YonuiCalendarProps extends CalendarProps {
  dateExtra: any
  onClickDay?: (item: object) => void
  scrollToBottom: boolean
  hintDays: string[]
  textColor: any
}
export default class MyComponent extends Component<YonuiCalendarProps, any> {
  tableRef = null
  constructor (props) {
    super(props)
    this.adaptExtra(props.dateExtra)
    const now = new Date()
    this.state = {
      visible: props.visible,
      extra: props.dateExtra,
      now: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      startY: 0,
      touchDistance: 0,
      monthNow: now.getMonth(),
      startDate: null,
      endDate: null
    }
  }

  componentDidMount () {
    this.setState({ visible: true }, () => {
      this.scrollToBottom()
    })
  }

  setTextColor = () => {
    const { textColor = '#EE2233' } = this.props
    this.tableRef && this.tableRef.style.setProperty('--order-color-1', textColor)
  }

  scrollToBottom = () => {
    this.setTextColor()
    // 是否滚动到底部
    // 获取单月节点，执行最后一个节点的scrollIntoView方法
    const { scrollToBottom = true } = this.props
    if (!scrollToBottom) return
    try {
      setTimeout(() => {
        const months = document.querySelectorAll('.single-month')
        const lastIndex = months.length - 1
        months[lastIndex]?.scrollIntoView()
      }, 10)
    } catch (e) {
      console.log(e)
    }
  }

  shouldComponentUpdate (nextProps) {
    // Object.keys(nextProps.dateExtra).length !== Object.keys(this.props.dateExtra).length
    if (JSON.stringify(nextProps.dateExtra) !== JSON.stringify(this.props.dateExtra)) {
      this.adaptExtra(nextProps.dateExtra)
      // 暂时通过visible触发calendar重新执行getDateExtra, 其他属性变化不触发calendar重新执行, 其他方式？？？
      // antd-mobile => calendar => rmc-calendar
      const changeVisivle = () => ({ visible: !this.state.visible })
      // setState回调中再次setState
      this.setState(changeVisivle(), () => {
        this.setState(changeVisivle(), () => {
          this.scrollToBottom()
        })
      })
    }
    return true
  }

  extra = []

  adaptExtra = (extra = {}) => {
    // extra中的角标信息
    Object.keys(extra).forEach((key) => {
      const info = extra[key];
      const date = new Date(key);
      if (!Number.isNaN(+date) && extra[+date] !== info) {
        this.extra[+date] = info;
      }
    })
  }

  onSelect = (value, state) => {
    // 点击事件
    this.setState({ startDate: null, endDate: null })
    let isRange = false
    if (state[0] && state[1] === undefined) {
      isRange = true
    }
    const range1 = value
    const range2 = state[0]
    const range = range1 < range2 ? [range1, range2] : [range2, range1]
    // { isRange: boolean 是否范围选择, range: date[startDate, endDate] 选择的范围, now: date 当前点击的时间 }
    const res = {
      isRange: isRange,
      range: range,
      now: value
    }
    // 范围选择的区间保存到state, getDateExtra中通过区间给cell添加class，修改选择样式
    this.setState({ startDate: range[0], endDate: range[1] })
    this.props.onClickDay?.(res)
  }

  getDateExtra = date => {
    const hintDays = this.props.hintDays || []
    const { startDate, endDate, now } = this.state
    // 样式优先级升高
    // 浅红色样式
    hintDays.forEach(hintDay => {
      if (+new Date(hintDay) === +date) {
        if (!this.extra[+date]) {
          this.extra[+date] = {}
        }
        this.extra[+date].cellCls = 'lightred'
      }
    })
    // 当天样式
    if (+now === +date) {
      if (!this.extra[+date]) {
        this.extra[+date] = {}
      }
      this.extra[+date].cellCls = 'today'
    }
    // 范围选择时在选择的范围内
    const isInRange = startDate < date && endDate > date
    if (isInRange) {
      if (!this.extra[+date]) {
        this.extra[+date] = {}
      }
      this.extra[+date].cellCls = 'inRange'
    }
    // 范围选择开始日期
    if (startDate && +startDate === +date) {
      if (!this.extra[+date]) {
        this.extra[+date] = {}
      }
      this.extra[+date].cellCls = 'rangeStart'
    }
    // 范围选择结束日期
    if (endDate && +endDate === +date) {
      if (!this.extra[+date]) {
        this.extra[+date] = {}
      }
      this.extra[+date].cellCls = 'rangeEnd'
    }
    return this.extra[+date]
  }

  render () {
    const { maxDate, minDate, defaultDate, defaultTimeValue, defaultValue } = this.props
    const { visible } = this.state
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : (defaultDate || minDateTrs)
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    if (defaultValue?.length) {
      defaultValue[0] = (typeof defaultValue[0] === 'string') ? new Date(defaultValue[0]) : defaultValue[0]
      if (defaultValue[1]) {
        delete defaultValue[1]
        defaultValue.length = 1
      }
    }
    // 月份间隔
    const maxYear = new Date(maxDateTrs).getFullYear();
    const maxMonth = new Date(maxDateTrs).getMonth();
    const minYear = new Date(minDateTrs).getFullYear();
    const minMonth = new Date(minDateTrs).getMonth();
    const initalMonths = (maxYear - minYear) * 12 + maxMonth - minMonth + 1;
    if (!visible) return null
    return (
      <div
        className='am-calendar-panel'
        ref={el => { this.tableRef = el }}
        // onTouchStart={this.onTouchStart}
        // onTouchEnd={this.onTouchEnd}
      >
        <Calendar
          {...this.props}
          visible={visible}
          onSelect={this.onSelect}
          initalMonths={initalMonths}
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
