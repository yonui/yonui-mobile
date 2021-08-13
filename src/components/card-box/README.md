# Cardbox 基础组件-卡片容器
## 如何使用

```
import { Cardbox } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
onDelete | 删除时回调 | () => void | 无 | false
onShowMore | 点击更多时回调 | () => void | 无 | false
onCloseMore | 收起更多时回调 | () => void | 无 | false
label | 标签名字,displayStyle为slideable时起作用 | string | '明细' | false
splitLine | 标题跟内容分割线 | boolean | true | false
rightStyle | 右侧按钮样式,displayStyle为slideable时起作用 | React.CSSProperties | 无 | false
viewStatus | 卡片样式 | 'default'/'select'/'selected'/'detail'/'browse' | 'default' | false
displayStyle | 展示方式 normal: 普通 detail: 详细 slideable: 滑动(移动端) extra: 查看更多 editable: 可编辑 | 'normal'/'detail'/'slideable'/'extra'/'editable' | 无 | false
showDeleteIcon | 是否展示标题和删除按钮,displayStyle为detail时起作用 | boolean | true | false
showTitleExtraIcon | 是否展示标题左侧图标,displayStyle为detail时起作用 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false

