# Button 基础组件-按钮
## 如何使用

```
import { Button } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'mdf-button' | false
content | 内容 | string | '' | false
mode | 模式 | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | '' | false
type | 类型 | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | 'toolbar-primary' | false
size | 尺寸 | 'large'/'small' | 'small' | false
inline | 是否行内 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
visible | 是否可见 | boolean | true | false
loading | 是否显示loading等待图标 | boolean | false | false
icon | 图标 | React.ReactNode | string | null | false
onClick | 点击后回调 | (): void | 无 | false
