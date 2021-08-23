# SimpleList 基础组件-简单列表组件
## 如何使用

```
import { SimpleList } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
dataSource | 数据 | any[] | 无 | false
renderRow | 每行渲染函数,如果传此参数择按照此项展开,没有择渲染childern | (rowData, sectionId, rowId) => React.ReactChild | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onReachFoot | 下拉到底回调 | () => void | 无 | false
pullToRefresh | 是否下拉刷新 | boolean | true | false
loadingText | 等待时文案 | string | '' | false
completeText | 完成时文案 | string | '' | false
reservedHeight | 上部保留高度 | number | 0 | false
children | 子项 | React.ReactChildren | 无 | false
editable | 可编辑 | boolean | false | false
hasMore | 是否展示更多 | boolean | true | false
