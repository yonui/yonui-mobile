# TextareaItem 多行输入
**API**

| TextareaItem |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 说明 | 类型 | 默认值 |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | (): void |  无  |
| autoHeight       | 高度自适应, autoHeight 和 rows 请二选一    | bool  | false  |
| name   | textarea 的 name       | String |   -  |
| prefixListCls   |   列表 className 前缀      | String |  `am-list`  |
| title   | 文案说明        | String/node |  '' |
