# InputNumber 基础组件-数字输入框
## 如何使用

```
import { InputNumber } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
maxLength | 最长长度 | number | 无 | false
mode | 模式 | 'normal'/'percent'/'permillage'/'int' | 'normal' | false
value | 初始值 | string/number | 无 | false
defaultValue | 默认值 | string/number | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则错误文案 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
precision | 小数精度 | number | 2 | false
formatReg | 格式化,value会按照formatReg的格式包装 | string | 无 | false
hiddenChart | 配合formatReg使用,表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用,表示要替换的字符 | string | '' | false
checkMask | 输入过程中校验规则 | string | 无 | false
placeholder | 占位符 | string | 无 | false
min | 最小值 | number/string | 无 | false
max | 最大值 | number/string | 无 | false
suffix | 前缀 | string | 无 | false
prefix | 后缀 | string | 无 | false
thousands | 是否有千分位的逗号 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
inputBgColor | 背景颜色 | string | '' | false
bIsNull | 是否允许为空 | boolean | false | false
scaleValue | 规模值,输入值之后自动乘规模值 | number | 1 | false
visible | 是否可见 | boolean | true | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
onBlur | 失去焦点时回调 | (value) => void | 无 | false
onChange | 修改时回调 | (value) => void | 无 | false
onClickClear | 点击清空时回调 | (value) => void | 无 | false
onError | 校验错误时回调 | (value, pattern: { reg, text }) => void | 无 | false
onSuccess | 校验成功时回调 | (value) => void | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
