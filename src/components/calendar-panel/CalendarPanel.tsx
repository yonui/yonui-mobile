import React, { useState } from 'react'
import classnames from 'classnames'

const groupByNum = (data = [], groupNum = 1) => {
  const result = Array.apply(null, {
    length: Math.ceil(data.length / groupNum)
  }).map((_, i) => {
    return data.slice(i * groupNum, (i + 1) * groupNum)
  })
  return result
}

function DateCell (props) {
  const { date, classname, onClick } = props
  const cls = classnames('cell', classname)
  return <div className={cls} onClick={() => { onClick?.(date) }} style={{ flex: '0 0 14%', textAlign: 'center' }}>{date}</div>
}

function SingleMonthContent (props) {
  const { firstDay, dateNum, onClick, selectedDate } = props
  const dateChildren = []
  for (let i = 0; i < firstDay.getDay(); i++) {
    dateChildren.unshift(<DateCell key={`p${i}`} />)
  }
  for (let i = 0; i < dateNum; i++) {
    if (selectedDate == (i + 1)) {
      dateChildren.push(<DateCell onClick={onClick} classname='selected' key={`d${i}`} date={i + 1} />)
    } else {
      dateChildren.push(<DateCell onClick={onClick} key={`d${i}`} date={i + 1} />)
    }
  }
  const dateArray = groupByNum(dateChildren, 7)
  return dateArray.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className='row' style={{ display: 'flex' }}>
        {row}
      </div>
    )
  })
}

function SingleMonth (props) {
  const { year, month, onClick, selectedDate } = props
  const date = new Date(`${year}/${month}/1`)
  const newMonth = month + 1
  const nextDate = new Date(`${newMonth > 12 ? year + 1 : year}/${newMonth % 12}/1`)
  const firstDay = date
  const lastDay = new Date(nextDate.getTime() - 1000 * 60 * 60 * 24)
  const dateNum = (lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24) + 1
  const _onClick = (date) => {
    onClick?.(`${year}/${month}/${date}`)
  }
  const selectedDateArr = selectedDate?.split('/') || []
  const selected = selectedDateArr[0] == year && selectedDateArr[1] == month ? selectedDateArr[2] : ''
  return (
    <div className='single-month' style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='title'>
        {`${year}年${month}月`}
      </div>
      <div className='content' style={{ display: 'flex', flexDirection: 'column' }}>
        <SingleMonthContent
          dateNum={dateNum}
          firstDay={firstDay}
          onClick={_onClick}
          selectedDate={selected}
        />
      </div>
    </div>
  )
}

const weekTitleText = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
}

function WeekTitle (props) {
  const weekTitle = new Array(7)
  for (let i = 0; i < 7; i++) {
    weekTitle.push((<div style={{ flex: '0 0 14%', textAlign: 'center' }} key={i}>{weekTitleText[i]}</div>))
  }
  return (
    <div className='week-bar' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {weekTitle}
    </div>
  )
}

export default function CalendarPanel (props) {
  // 记录选择日期
  const [selectedDate, setSelectedDate] = useState('')
  const _onClick = (date) => {
    console.log(`点击了${date}`)
    setSelectedDate(date)
  }
  console.log('selectedDate', selectedDate)
  return (
    <div className='yonui-calendar-panel'>
      <WeekTitle />
      <div className='date-content'>
        <SingleMonth
          year={2020}
          month={2}
          onClick={_onClick}
          selectedDate={selectedDate}
        />
        <SingleMonth
          year={2021}
          month={2}
          onClick={_onClick}
        />
        <SingleMonth
          year={2021}
          month={3}
        />
        <SingleMonth
          year={2021}
          month={4}
        />
      </div>
    </div>
  )
}
