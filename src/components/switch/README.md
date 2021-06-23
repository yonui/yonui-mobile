# README
## Switch 基础组件-开关
## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
required | 是否必填 | boolean | false | false
defaultValue | 默认值 | boolean | false | false
checked | 初始值 | boolean | false | false
visible | 是否可见 | boolean | true | false
disabled | 是否禁用 | boolean | false | false
onChange | 改变后回调 | (checked: bool): void | 无 | false
color | 颜色 | string | '#4dd865' | false
name | 名字 | string | 无 | false
platform | 平台 | 'android'/'ios' | 'ios' | false
onClick | 点击后回调 | (checked: bool): void | 无 | false
