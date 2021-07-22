# Input 基础组件-输入框
## 如何使用

```
import { Input } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
subuitype | ui类型，根据不同的类型进行展示数据的格式化 | 'text'/'password'/'idCard'/'email'/'ipAddress'/'bankCard16'/'bankCard19'/'customized'/'' | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则名称 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
formatReg | 数据格式化，value会按照formatReg的展示格式展示 | string | 无 | false
hiddenChart | 配合formatReg使用，表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用，表示要替换的字符 | string | '' | false
checkMask | 中间校验规则 | string | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
onBlur | 失去焦点时回调 | (value: string) => void | 无 | false
onChange | 修改时回调 | (value: string) => void | 无 | false
onClickClear | 点击清空时回调 | (value: string) => void | 无 | false
onError | 校验错误时回调 | (value: string, pattern: { reg?: RegExp, text?: string }) => void | 无 | false
onSuccess | 校验成功时回调 | React.CSSProperties | 无 | false
visible | 是否可见 | boolean | true | false
splitLine | 分割线 | boolean | false | false
singleLine | 是否单行展示 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
