# Label 基础组件-标签
## 如何使用

```
import { Label } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标签文字 | string | 无 |false
spareLabel | 备用标签 | string | 无 | false
textAlign | 文字对齐方向 | 'left'/'right'/'center' | 'left' | false
leftIcon | 左侧按钮 | React.ReactNode | 无 | false
rightIcon | 右侧按钮 | React.ReactNode | 无 | false
textClamp | 文字指定行数 | number | 无 | false
textLangth | 标签最长字数,超出加... | number | 无 | false
visible | 是否可见 | boolean | true | false
prefix | 标签前缀 | string | 无 | false
suffix | 标签后缀 | string | 无 | false
dataSource | 关联数据的数据源 | string | 无 | false
controlType | 关联数据的数据源类型 | string | 无 | false
multiple | 关联数据的数据源是否多选 | boolean | false | false
dateMode | 关联数据的数据源若为日期类型,日期类型的格式 | string | 'picker-date' | false
showZero | 标签为0时的显示开关 | boolean | false | false
showTitle | 是否展示备用标签 | boolean | false | false

