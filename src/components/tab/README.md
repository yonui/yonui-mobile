# Tab 基础组件-页签
## 如何使用

```
import { Tab } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
pageSize | Tab分页尺寸 | number | 3 | false
icons | 右侧按钮 | Array<JSX.Element/string >/JSX.Element/string | 无 | false
splitLine | 外部边框线 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false
iconsOccupy | icon浮动占位 | boolean | true | false
iconsClassName | icon样式class | string | 无 | false
iconsStyle | icon样式style | object | 无 | false
icon1 | 右1图标，icons为空时起作用 | string | 无 | false
icon2 | 右2图标，icons为空时起作用 | string | 无 | false
icon3 | 右3图标，icons为空时起作用 | string | 无 | false
onIcon1Click | 右1图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon2Click | 右2图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon3Click | 右3图标点击时回调，icons为空时起作用 | () => void | 无 | false
onTabClick | tab页选中后回调 | (tab: any, index: number) => void | 无 | false
mode | 模式 | string | 'normal' | false
nid | 编辑态id | string | 无 | false
uitype | ui类型 | string | 无 | false

