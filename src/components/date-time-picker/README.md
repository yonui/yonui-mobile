# DateTimePicker 基础组件-日期时间选择
## 如何使用

```
import { DateTimePicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
dateMode | 日期选择模式 | 'picker-date'/'picker-time'/'picker-datetime'/'picker-year'/'picker-month'/'calendar-date'/'calendar-datetime' | 'picker-date' | false
minDate | 最小日期 | Date/string | 无 | false
maxDate | 最大日期 | Date/string | 无 | false
defaultValue | 默认值 | Date/string | 无 | false
format | 日期时间格式 | string | 'YYYY-MM-DD' | false
disabled | 是否禁用 | boolean | false | false
value | 初始值 | Date/string | 无 | false
extra | 显示文案 | string | '请选择' | false
title | 标题 | string | 无 | false
visible | 是否可见 | boolean | true | false
onChangeDate | 选中后回调 | (dateTime) => void | 无 | false
onCancel | 取消后回调 | () => void | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
className| 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
