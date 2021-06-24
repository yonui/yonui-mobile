# Search 基础组件-搜索框
## 如何使用

```
import { Search } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'mdf-search' | false
value | 初始值 | string | '' | false
defaultValue | 默认值 | string | '' | false
placeholder | 占位 | string | '输入进行搜索' | false
maxLength | 最长长度 | string | '' | false
autoFocus | 自动获取焦点 | boolean | false | false
disabled | 禁用 | boolean | false | false
color | 字体颜色 | string | '' | false
backgroundColor | 背景颜色 | string | '' | false
searchIconColor | 搜索图标颜色 | string | '' | false
clearIconColor | 清除图标颜色 | string | '' | false
solutionId | 搜索的值包装成的对象的solutionId | number | 无 | false
term | 搜索的值包装成的对象的term | any | 无 | false
onSubmit | 点击搜索时回调 | (value: object) => void | 无 | false
onChange | 搜索框修改时回调 | (value: object) => void | 无 | false
onFocus | 获取焦点时回调 | () => void | 无 | false
onBlur | 失去焦点时回调 | () => void | 无 | false
onClear | 清空时回调 | (value: object) => void | 无 | false
focus | 获取焦点的方法 | Function | 无 | false
clear | 清空的方法 | Function | 无 | false
