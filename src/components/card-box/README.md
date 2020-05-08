# README
卡片容器组件

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| displayStyle       | 展示类型                               | 否   | 'normal'\|'detail'\|'slideable' | 'normal' |
| btnText | 删除按钮文本。slideable模式下有效 | 否   | string                               | '删除' |
| rightStyle | 删除按钮样式。slideable模式下有效 | 否   | number                            | {} |
| label | 标题文本，detail模式下有效             | 否   | string                              | '' |
| showDeleteIcon | 是否展示删除按钮，detail模式下有效 | 否   | boolean | true |
| showTitleExtraIcon | 是否展示标题左侧图标，detail模式下有效 | 否 | boolean | false |
| onDelete | 删除事件。detail/slideable模式下有效 | 否 | ()=>void |  |

