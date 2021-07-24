import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
interface YonuiCalenderProps extends CalendarProps {
  dateExtra: any
  onClickDay: any
  scrollToBottom: boolean
  hintDays: string[]
}
export default class MyComponent extends Component<YonuiCalenderProps, any> {
  constructor (props) {
    super(props)
    this.adaptExtra(props.dateExtra)
    const now = new Date()
    this.state = {
      visible: false,
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

  scrollToBottom = () => {
    // 是否滚动到底部
    // 获取单月节点，执行最后一个节点的scrollIntoView方法
    const { scrollToBottom = false } = this.props
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

  // onTouchStart = (e) => {
  //   e.preventDefault();
  //   const touch = e.touches[0]
  //   const startY = touch.pageY
  //   this.setState({
  //     startY: startY
  //   })
  // }

  // onTouchMove = (e) => {
  //   e.preventDefault();
  //   const touch = e.touches[0]
  //   const moveY = touch.pageY
  //   console.log('move', moveY)
  // }

  // onTouchEnd = (e) => {
  //   e.preventDefault()
  //   const singleMonth = document.querySelector('.single-month')
  //   const touch = e.changedTouches[0]
  //   const startY = this.state.startY
  //   const endY = touch.pageY
  //   let touchDistance = this.state.touchDistance
  //   console.log('一个月距离', singleMonth.clientHeight)
  //   if (startY - endY > singleMonth.clientHeight) {
  //     console.log('滑动距离超过一个月', startY - endY)
  //   }
  //   console.log('滑动距离小于一个月', startY - endY)
  //   touchDistance = Math.floor(touchDistance + startY - endY)
  //   this.setState({
  //     touchDistance: touchDistance
  //   })
  //   console.log('相对初始位置距离', touchDistance)
  //   // const wrapper = document.querySelector('.wrapper')
  //   // console.log('moveEnd', wrapper.scrollTop)
  //   const monthStart = this.props.defaultDate.getMonth() + 1
  //   const monthNow = monthStart + touchDistance / singleMonth.clientHeight + 1
  //   this.props.onPull?.(monthStart, Math.floor(monthNow))
  // }

  render () {
    const { maxDate, minDate, defaultDate, defaultTimeValue, type, defaultValue } = this.props
    const { visible } = this.state
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    if (defaultValue?.length) {
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
      <div
        className='am-calendar-panel'
        // onTouchStart={this.onTouchStart}
        // onTouchEnd={this.onTouchEnd}
      >
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
