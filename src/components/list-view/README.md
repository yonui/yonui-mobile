# ListView 基础组件-长列表
## 如何使用

```
import { ListView } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
refreshing | 是否处于下拉刷新状态 | boolean | false | false
dataSource | ListView.DataSource 实例 | ListViewDataSource | 无 | false
onEndReached | 滚动到底部时回调 | () => void | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onRowClick | 某行点击时回调 | (e, rowID) => void | 无 | false
height | 高度 | number | 600 | false
onScroll | 滚动时回调 | () => void | 无 | false
footerContent | 页面底部文案 | string | 无 | false
children | 子项 | React.ReactElement[] | 无 | false
initialListSize | 指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 | number | 10 | false
showNum | 显示的数据量 | number | 10 | false
pageSize | 每次渲染的行数 | number | 4 | false
value | 如果value不为空,说明是受控组件,渲染时取children里的数据 | any[] | 无 | false
showPullToReresh | 是否开启下拉刷新功能 | boolean | true | false
placeholdHeight | 页面底部文案高度 | number | 0 | false
