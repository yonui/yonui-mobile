# README
## ListCalendar 基础组件-日历输入框
**API**

| ListCalendar |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 类型 | 默认值 | 说明 |
| label | string | - |  标签 |
|enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal' \| 'vertical'| vertical | false|
|onCancel | 关闭时回调 | () => void | | false|
|onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void | | false|
|pickTime|是否选择时间 | boolean | false | false|
|prefixCls| 样式前缀 | string | rmc-calendar | false|
|renderShortcut | 替换快捷选择栏 需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | | false|
|renderHeader | 替换标题栏 | () => React.ReactNode | | false|
|showShortcut | 快捷日期选择 | boolean | false | false|
|title | header title | string | {locale.title}|false|
|type | 选择类型 one: 单日 range: 日期区间 | 'one' \| 'range'| range | false|
|defaultDate | 显示开始日期 | Date | today | false|
|getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData | | false|
|infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false|
|initalMonths | 初始化月个数 | number | 6 | false|
|maxDate | 最大日期 | Date | | false|
|minDate | 最小日期 | Date | | false|
|onSelect | 选择区间回调 | (date: Date, state?: \[Date | undefined, Date | undefined\]) => \[Date, Date\] \| \[Date\] \| void | | false|
|onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | | false|
|rowSize | 行大小 | 'normal' \| 'xl' | | false|
|value | 日历选择范围的值 | \[Date, Date\] \| \[Date\] | | false|
|defaultTimeValue | 默认时间选择值 | Date | | false|
| required | boolean | false | 是否必填 |
| arrow | boolean | false| 是否显示右侧箭头|
| format| string | 'yyyy-MM-dd' |设置日期格式|