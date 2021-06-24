# ListView 基础组件-长列表
## 如何使用

```
import { ListView } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
refreshing | 是否显示下拉刷新 | boolean | false | false
showSeparator | 是否显示分隔符 | boolean | false | false
dataSource | ListView.DataSource 实例 | ListViewDataSource | 无 | false
onEndReached | 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足10个像素的距离时调用 | (event?) => {} | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onRowClick | 某行点击时回调 | (e: React.MouseEvent, rowID: any) => void | 无 | false
height | 高度 | number | 600 | false
onScroll | 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制 | e => {} | 无 | false
initialListSize | 指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 | number | 10 | false
showNum | 显示的数据数量 | number | 无 | false
pageSize | 每次事件循环（每帧）渲染的行数 | number | 4 | false
value | 如果value不为空，说明是受控组件，渲染时取 children[rowId] | any[] | 无 | false
showPullToReresh | 是否显示下拉刷新 | boolean | true | false
placeholdHeight | 占位符高度 | number | 0 | false
