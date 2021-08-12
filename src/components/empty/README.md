# Empty 基础组件-空页面
## 如何使用

```
import { Empty } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 noData: 无数据 client: 404 blankPage: 空白页 error: 错误 review: 审核中 server: 500 noNetwork: 无网络 | 'noData'/'client'/'blankPage'/'error'/'review'/'server'/'noNetwork' | 'noData' | false
message | 显示信息 | string | '暂无文件' | false
style | 样式style | React.CSSProperties | 无 | false
