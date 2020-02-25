# README
## ListPanelPicker 基础组件-操作列表
**API**

| ListPanelPicker |  |  |  |
| :---: | --- | --- | --- |
属性 | 说明 | 类型 | 默认值 |
visible | 是否显示 | boolean | false |
header | 头部的值 | string | - |
data | 传入的列表数据 | Array<{key, text, delete?}>,delete为true,操作列表项颜色为红色,key为主键,text为显示文本 | [] |
onClose | 关闭时回调 | () => void | |
onClick | 点击时回调 | (object: DataItem) => void | |