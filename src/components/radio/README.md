# README

选项组件，支持单选和多选，支持标签和列表两种形态。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| dataSource         | 渲染类型，支持标签和列表形式 | 否 | 'tag'\|'list'                  | 'tag' |
| isMultiple | 是否启用下拉刷新 | 否 | boolean | true |
| label | 底部区域文本，为空时不展示底部文字 | 否 | string | '' |
| dataSource | 数据源 | 是 | dataType[] | - |
| checkedValue | 已经选择数据的value数组 | 否 | number | - |
| tagSize | 渲染类型为标签时，标签的尺寸 | 否 | 'sm'\|'md'\|'g'\|'default' | 'default' |
| disabled | 禁用 | 否 | boolean | false |
| singleLine | 当行展示 | 否 | boolean | false |
| splitLine | 是否展示分割线 | 否 | boolean | true |
| required | 是否必填项 | 否 | boolean | false |
| onClick | 点击某个选项时的回调 | 否 | (selectedValue: string[], selectedData: dataType[]) => void | false |
| onChange | 选项值改变时的回调，列表多选时为确定时的回调 | 否 | (selectedValue: string[], selectedData: dataType[]) => void | false |

```typescript
interface dataType { text: string, value: string, disabled?: boolean }
```

