# Input 基础组件-输入框
## 如何使用

```
import { Input } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
subuitype | 类型,根据不同的类型对值格式化 | 'text'/'password'/'idCard'/'email'/'ipAddress'/'bankCard16'/'bankCard19'/'customized'/'' | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则名称 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
formatReg | 数据格式化,value会按照formatReg的展示格式展示 | string | 无 | false
hiddenChart | 配合formatReg使用，表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用，表示要替换的字符 | string | '' | false
checkMask | 输入过程校验规则 | string | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
onBlur | 失去焦点时回调 | (value) => void | 无 | false
onChange | 修改时回调 | (value) => void | 无 | false
onClickClear | 点击清空时回调 | (value) => void | 无 | false
onError | 校验错误时回调 | (value, pattern) => void | 无 | false
onSuccess | 校验成功时回调 | (value) => void | 无 | false
visible | 是否可见 | boolean | true | false
singleLine | 是否单行展示 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (e) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false

maxLength | 计数功能和最长字数限制 | number | 无 | false
mReadOnly | 是否只读 | boolean | false | false
name | 文本框name | string | 无 | false
placeholder | 占位符 | string | 无 | false
clear | 是否可清空 | boolean | false | false
rows | 显示几行 | number | 3 | false
autoHeight | 高度自适应, autoHeight 和 rows 请二选一 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
multilineMode | 多行模式 | boolean | false | false
