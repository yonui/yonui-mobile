import React from 'react'

const temp = (dateNum, firstDay) => {
  const dateChildren = new Array(dateNum)
  console.log('zzz', dateChildren)
  for (let i = 0; i < dateNum; i++) {
    dateChildren.push((<div style={{ flex: '0 0 14%', textAlign: 'center' }} key={i}>{i + 1}</div>))
  }
  for (let i = 0; i < firstDay.getDay(); i++) {
    dateChildren.unshift((<div style={{ flex: '0 0 14%', textAlign: 'center' }} key={i} />))
  }
  return dateChildren
}

const getSingleMonth = (year, month) => {
  const date = new Date(`${year}/${month}/1`)
  const newMonth = month + 1
  const nextDate = new Date(`${newMonth > 12 ? year + 1 : year}/${newMonth % 12}/1`)
  const firstDay = date
  const lastDay = new Date(nextDate.getTime() - 1000 * 60 * 60 * 24)
  const dateNum = (lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24) + 1
  return (
    <div className='single-month'>
      <div className='row'>
        {`${year}年${month}月`}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {temp(dateNum, firstDay)}
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

const getWeekTitle = () => {
  const weekTitle = new Array(7)
  for (let i = 0; i < 7; i++) {
    weekTitle.push((<div style={{ flex: '0 0 14%', textAlign: 'center' }} key={i}>{weekTitleText[i]}</div>))
  }
  return weekTitle
}
export default function CalendarPanel (props) {
  return (
    <div className='yonui-calendar-panel'>
      <div className='week-bar' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {getWeekTitle()}
      </div>
      <div className='date-content'>
        <div className='single-month'>
          {getSingleMonth(2020, 2)}
        </div>
        <div className='single-month'>
          {getSingleMonth(2021, 2)}
        </div>
        <div className='single-month'>
          {getSingleMonth(2021, 6)}
        </div>
        <div className='single-month'>
          {getSingleMonth(2021, 7)}
        </div>
        <div className='single-month'>
          {getSingleMonth(2021, 8)}
        </div>
      </div>
    </div>
  )
}
