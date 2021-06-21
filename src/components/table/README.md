# README
## Table 基础组件-表格
## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
columns | 表头定义 | Object[](格式见demo) | [] | false
data | 内容定义 | Object[](格式见demo) | [] | false
orderSpanColors | 列颜色 | string[] | [] | false
addOrderColumn | 是否添加序号列 | boolean | true | false
showMore | 是否展示加载更多 | boolean | false | false
loadMore | 点击加载更多的回调 | ():void | 无 | false
onSort | 点击某列排序的回调 | (column):void | 无 | false

