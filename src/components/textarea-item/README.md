# Textarea 基础组件-多行文本
## 如何使用

```
import { Textarea } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
required | 是否必填 | boolean | false | true
maxLength | 最长字数 | number | 无 | false
mReadOnly | 是否制度 | boolean | false | false
visible | 是否可见 | boolean | true | false
className | 样式class | string | 无 | false
title | 文案说明 | String/node | '' | false
name | 文本框name | string | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
placeholder | 占位符 | string | 无 | false
clear | 是否可清空 | boolean | false | false
rows | 显示几行 | number | 3 | false
error | 是否显示错误 | boolean | false | false
onErrorClick | 点击报错 icon 触发的回调 | () => void | 无 | false
autoHeight | 高度自适应, autoHeight 和 rows 请二选一 | boolean | false | false
editable | 是否可编辑 | boolean | true | false
disabled | 是否禁用 | boolean | false | false
labelNumber | 定宽枚举值：num * @input-label-width: 34px，可用2-7之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | 5 | false
onChange | 修改后回调 | (val: string) => void | 无 | false
afterChange | 修改后回调 | (val: string) => void | 无 | false
onBlur | 失去焦点后回调 | (val: string) => void | 无 | false
onFocus | 获取焦点后回调 | (val: string) => void | 无 | false
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
