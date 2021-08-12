# CalendarPanel 基础组件-日历面板 
## 如何使用

```
import { CalendarPanel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false
onClear | 清除时回调 | () => void | 无 | false
onConfirm | 确认时回调 | (startDateTime, endDateTime) => void | 无 | false
pickTime | 是否选择时间 | boolean | false | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut为true | (select: (startDate, endDate) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | () => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
title | 头部标题 | string | '日期选择' | false
type | 选择类型 one: 单日 range: 日期区间 | 'one'/'range'| 'range' | false
visible | 是否显示 | boolean | false | false
defaultValue | 默认日历选择范围 | [Date, Date]/[Date] | 无 | false
defaultDate | 显示开始日期 | Date/string | today | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date) => void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 无 | false
defaultTimeValue | 默认时间选择值 | Date | 无 | false
dateExtra | 日期扩展数据 | Object | {} | false
onClickDay | 选择日期时回调 | ({isRange, range, now}) => void | 无 | false
scrollToBottom | 是否自动滚到底部 | boolean | false | false
hintDays | 应用默认样式(浅红色)的日期 | string[] | [] | false
