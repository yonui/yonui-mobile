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
minDate | 最小可选日期 | Date/string | 无 | false
maxDate | 最大可选日期 | Date/string | 无 | false
value | 当前选中时间 | string[] | 无 | false
minuteStep | 分钟数递增步长设置 | Number | 30 | false
onOk | 点击选中时执行的回调 | (date: Object) => void | 无 | false
onDismiss | 点击取消时执行的回调 | () => void | 无 | false
