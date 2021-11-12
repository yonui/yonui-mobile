# Table 基础组件-表格
## 如何使用

```
import { Table } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
title | 标题 | string | 标题 | false
columns | 表头定义 | any[] | [] | false
data | 内容定义 | any[] | 无 | false
orderSpanColors | 序号列颜色 | string[] | [] | false
addOrderColumn | 是否添加序号列 | boolean | true | false
startOrder | 序号起始值 | nunmber | 1 | false
loadMore | 点击加载更多时回调 | () => void | 无 | false
onSort | 某列排序时回调 | (column) => void | 无 | false

## column API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
title | 标题 | string | 标题 | true
dataIndex | 标识(对应data中key值) | string | 标识 | true
width | 列宽比 | number | 1 | false
sortField | 是否展示排序 | boolean | false | false

