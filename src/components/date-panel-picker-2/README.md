# TimeRange 基础组件-时间选择器
## 如何使用

```
import { TimeRange } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
hoursData | 可选的小时范围 | Number[] | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] | false
minutesData | 可选的分钟范围 | Number[] | [0, 10, 20, 30, 40, 50] | false
onConfirm | 确定是回调 | (value): void | 无 | false
onCancel | 取消时回调 | (): void | 无 | false
