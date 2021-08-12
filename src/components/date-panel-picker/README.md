# TimeRangePiker 基础组件-时间选择器
## 如何使用

```
import { TimeRangePiker } from 'yonui-mobile';

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
onOk | 选中时回调 | (date) => void | 无 | false
onDismiss | 取消时回调 | () => void | 无 | false
