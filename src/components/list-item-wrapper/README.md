# README
列表行容器组件，用来规范同类组件样式。

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| label  | 标题                            | 否   | string |  |
| subLabel | 副标题文本 | 否   | string                               |  |
| required | 是否必填 | 否   | boolean                     | false |
| splitLine | 是否展示分割线             | 否   | boolean                 | true |
| singleLine | 是否单行展示 | 否   | boolean | false |
| labelCls | 标题className | 否 | string |  |
| labelStyle | 标题style属性 | 否 | React.CSSProperties |  |
| contentCls | 内容className | 否 | string | |
| contentStyle | 内容style属性 | 否 | React.CSSProperties | |
| error | 是否错误 | 否 | boolean | false |
| errorText | 错误提示文本 | 否 | string | '填写信息有误!请重新填写' |
| showExtraLabelIcon | 是否展示标题左侧图标 | 否 | boolean | false |
| onClick | 行点击事件 | 否 | (*event*: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | |

