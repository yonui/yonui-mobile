# Table 基础组件-表格
## 如何使用

```
import { Table } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
columns | 表头定义 | any[] | [] | false
data | 内容定义 | any[] | [] | false
orderSpanColors | 每行序号列颜色 | string[] | [] | false
addOrderColumn | 是否添加序号列 | boolean | true | false
showMore | 是否展示加载更多 | boolean | false | false
loadMore | 点击加载更多的回调 | () => void | 无 | false
onSort | 点击某列排序的回调 | (column) => void | 无 | false

