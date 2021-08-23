# DateTimeRange 基础组件-时间范围选择
## 如何使用

```
import { DateTimeRange } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标题 | string | 无 | false
required | 是否必填 | boolean | false | false
value | 初始值 | [Date, Date]/[Date] | 无 | false
format | 日期格式 | string | 'yyyy-MM-dd' | false
disabled | 是否禁用 | boolean | false | false
mode | 模式 | 'default'/'range' | 'default' | false
onChangeDate | 日期修改后回调 | (time: [string, string]) => void | 无 | false
onStartChange | 开始日期修改后回调 | (time?: string) => void | 无 | false
onEndChange | 结束日期修改后回调 | (time?: string) => void | 无 | false
splitLine | 显示分割线 | boolean | false | false
startLabel | 开始日期文案 | string | 无 | false
endLabel | 结束日期文案 | string | 无 | false
enterDirection | 入场方向 | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 取消时回调 | () => void | 无 | false
onClear | 清除时回调 | () => void | false | false
pickTime | 是否可以选择时间 | boolean | true | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | (prop: HeaderPropsType) => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
style | 样式style | React.CSSProperties | 无 | false
title | 标题 | string | 无 | false
type | 弹出日历样式 | 'one'/'range' | 'range' | false
defaultDate | 显示开始日期 | Date | 无 | false
getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData | 无 | false
infiniteOpt | 无限滚动优化（大范围选择） | boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | 无 | false
onSelect | 选中时回调 | (date: Date, state?: [Date/undefined, Date/undefined]) => SelectDateType/void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 'normal' | false
defaultTimeValue | 默认时间 | Date | 无 | false
timePickerPrefixCls | timePicker样式前缀 | string | 无 | false
timePickerPickerPrefixCls | timePickerPicker样式前缀 | string | 无 | false
