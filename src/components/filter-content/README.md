# README

筛选组件的内容部分



### api

| 属性             | 说明                 | 必填 | 类型                         | 默认值 |
| ---------------- | -------------------- | ---- | ---------------------------- | ------ |
| *title*          | 内容的标题           | 否   | string                       | title  |
| *selectData*     | 选择区域的数据       | 否   | {desc:string,value:string}[] |        |
| *selectedValue*  | 选中的数据值         | 否   | string                       |        |
| *onSelect*       | 选中数据时的回调     | 否   | (value: string)=>void        |        |
| *extraInput*     | 自定义渲染输入的标题 | 否   | string                       |        |
| *extraInputType* | 自定义渲染输入的类型 | 否   | 'tesx' \| 'calendar'         |        |



