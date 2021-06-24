# Mobile 基础组件-联系方式
## 如何使用

```
import { Mobile } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标签 | string | '电话' | false
singleLine | 是否单行展示 | boolean | true | false
area | 是否选择国际区号 | boolean | false | false
isSelect | 是否选择邮箱后缀 | boolean | 无 | false
mode | 模式 | 'telephone'/'mobilephone'/'email' | 'telephone' | false
dataSource | 数据源 | dataSourceType | 无 | false
emailDataSource | 邮箱数据源 | emailType | 无 | false
onChange | 变化后回调 | (value: string) => void | 无 | false
onBlur | 失去焦点是回调 | (value: string) => void | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
required | 是否必填 | boolean | false | false
bIsNull | 是否允许为空 | boolean | false | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
notVerify | 是否需要校验格式，暂时用于查询组件设置为true不需要校验 | boolean | false | false
visible | 是否可见 | boolean | true | false
splitLine | 是否展示分割线 | boolean | false | false
