# Radio 基础组件-选项
## 如何使用

```
import { Radio } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 tag: tag类型 list: 列表类型 | 'tag'/'list' | 'list' | false
canMultiple | 是否多选 | boolean | false | false
label | 标题 | string | 无 | false
onClick | 点击后回调 | (data) => void | 无 | false
onChange | 值改变后回调 | (selectedValue, selectedData) => void | 无 | false
dataSource | 数据源 | dataType[] | [] | false
checkedValue | 已选中数据 | string[] | [] | false
tagSize | tag类型的tag尺寸 | 'sm'/ 'lg'/'md'/'default' | 'sm' | false
labelStyle | 标题样式 | React.CSSProperties | 无 | false
itemsStyle | 选项样式 | React.CSSProperties | 无 | false
disabled | 是否禁用 | boolean | false | false
singleLine | 单行显示 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
className | 样式class | string | 无 | false
