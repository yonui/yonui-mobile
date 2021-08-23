# ListItemWrapper 基础组件-组件左侧标题
## 如何使用

```
import { ListItemWrapper } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
notRequired | 是否不必填 | boolean | true | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
regRuleText | 正则校验出错提示文案 | React.ReactNode | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
onClick | 点击标签回调 | (event) => void | 无 | false
className| 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false
