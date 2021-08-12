# SharePanel 基础组件-分享栏
## 如何使用

```
import { SharePanel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
show | 是否可见 | boolean | true | false
onClose | 取消时回调 | () => void | 无 | false
title | 标题 | string | '' | false
cancelButtonText | 取消按钮文案 | string | '取消' | false
options | 可选项 | Array<Array<{ icon: React.ReactNode, title: string }>>/Array<{ icon: React.ReactNode/string, title: string }> | 无 | false
type | 类型 slideable: 可滑动 fixed: 固定 | 'slideable'/'fixed' | 'fixed' | false
callback | 选中后回调 | (col, row) => void | 无 | false
