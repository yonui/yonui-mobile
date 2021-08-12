# TimeRangePicker 基础组件-时间选择器
## 如何使用

```
import { TimeRangePicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
visible | 是否显示 | boolean | false | false
minDate | 最小日期 | Date/string | 无 | false
maxDate | 最大日期 | Date/string | 无 | false
value | 当前选中时间 | string[] | 无 | false
minuteStep | 分钟的步长 | number | 30 | false
mode | 日期选择格式 time: 时间 datetime: 日期时间 date: 日期 year: 年 month: 年月 | 'time'/'datetime'/'date'/'year'/'month' | 无 | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
startTime | 开始时间 | string | 无 | false
endTime | 结束时间 | string | 无 | false
onOk | 选中时回调 | (date) => void | 无 | false
onDismiss | 取消时回调 | () => void | 无 | false
