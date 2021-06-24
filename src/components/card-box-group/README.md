# CardBoxGroup 基础组件-卡片容器组
## 如何使用

```
import { CardBoxGroup } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
splitLine | 是否有分割线 | boolean | false | false
dataSource | 数据，若为空则直接渲染children | any[] | 无 | false
renderRow | 每行的渲染函数 | (rowData: object, sectionID: number, rowID: number) => void | 无 | false
