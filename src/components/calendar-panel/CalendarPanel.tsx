import React from 'react'

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
        {`${year}年${month}月, 共${dateNum}天, 第一天${firstDay}星期${firstDay.getDay()}, 最后一天${lastDay}星期${lastDay.getDay()}`}
      </div>
    </div>
  )
}

export default function CalendarPanel (props) {
  const now = new Date()
  const fullyear = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()

  return (
    <div className='yonui-calendar-panel'>
      <div className='calendar-panel-year-month'>{`${fullyear}年${month}月${date}日`}</div>
      <div className='week-bar'>星期</div>
      <div className='date-content'>日期
        <div className='single-month'>一个月
          {getSingleMonth(2021, 7)}
        </div>
      </div>
    </div>
  )
}
