# README
## Cardbox 基础组件-卡片容器
## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
onDelete | 删除时回调 | () => void | 无 | false
onShowMore | 点击更多时回调 | () => void | 无 | false
onCloseMore | 收起更多时回调 | () => void | 无 | false
label | 标签名字 | string | '明细' | false
splitLine | 是否显示分割线 | boolean | true | false
rightStyle | 右侧按钮样式,displayStyle为slideable(可滑动删除)时起作用 | React.CSSProperties | 无 | false
viewStatus | 卡片样式 | 'default'/'select'/'selected'/'detail'/'browse' | 'default' | false
displayStyle | 展示方式 | 'normal'/'detail'/'slideable'/'extra'/'editable'/'listDetail' | 无 | false
selected | 是否选中,displayStyle为editable时起作用 | boolean | 无 | false
showDeleteIcon | 是否展示删除图标,displayStyle为detail时起作用 | boolean | true | false
showTitleExtraIcon | 是否展示标题图标,displayStyle为detail时起作用 | boolean | false | false

