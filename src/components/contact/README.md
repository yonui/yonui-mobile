# README

联系方式组件，支持通过设置mode，区分座机、手机、邮箱。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| label         | 标题文本 | 否 | string | '电话' |
| singleLine | 是否单行展示 | 否 | boolean | true |
| mode         | 联系方式类型 | 否 | 'telephone' / 'mobilephone' / 'email' | 'telephone' |
| area | 是否显示国际区号(当mode为telephone和mobilephone时生效) | 否 | boolean | false |
| isSelect | 是否显示选择邮箱后缀(当mode为email时生效) | 否 | boolean | false |
| dataSource | 国际区号数据源(当mode为telephone和mobilephone时生效) | 否 | dataSourceType | - |
| emailDataSource | 邮箱后缀数据源(当mode为email时生效) | 否 | emailType | - |

``` typescript
type dataSourceType = Array<{ short: string, name: string, en: string, tel: string, pinyin: string }>

type emailType = Array<{type: string}>
```
