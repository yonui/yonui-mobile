# README
## CalendarPanel 基础组件-日历面板 
## API
属性 | 说明 | 默认值 | 示例
----|-----|------|------
tileDisabled | 传递函数以确定某一天是否应显示为已禁用 |	n/a	| Function: ({activeStartDate, date, view }) => date.getDay|() === 0
selectRange	| 用户是否应选择构成一个范围的两个日期，而不仅仅是一个日期。注意：无论返回值设置如何，此功能都将使React日历返回数组具有两个日期。|false|	true
value	| 日历值|n/a	|Date: new Date() 一个日期数组: [new Date(2017, 0, 1), new Date(2017, 7, 1)]]
onChange	| 当用户在可用的最详细视图上单击项目（日视图、月视图等）时调用的函数。|	n/a	|(value, event) => alert('New date is: ', value)
maxDate | 最大日期 | n/a | new Date()
minDate | 最小日期 | n/a | new Date()