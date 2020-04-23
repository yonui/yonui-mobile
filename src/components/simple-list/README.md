# README

一个简单的列表组件，支持下拉刷新和触底加载。大数据浏览时使用会产生性能问题。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| dataSource         | 列表数据源                 | 是   | array                                | []     |
| pullToRefresh | 是否启用下拉刷新 | 否 | boolean | true |
| footerText | 底部区域文本，为空时不展示底部文字 | 否 | string | '' |
| split | 列表项之间的分隔符号，分为无、分割线和分隔块 | 否 | 'none'\|'line'\|'blank' | 'line' |
| height | 列表高度 | 否 | number | - |
| reserverdHeight | 列表底部预留高度，设置height属性时无效 | 否 | number | - |
| renderRow | 渲染每一行数据的方法，参数为数据源的每一项 | 是 | (item: any, dataSource any[], index: number) => React.ReactChild | - |
| onRefresh | 触发下拉刷新事件的回调 | 否 | () => void | - |
| onReachFoot | 页面滑动到底部时的回调 | 否 | () => void | - |

