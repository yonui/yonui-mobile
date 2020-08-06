# README
## Input 基础组件-输入框
**API**

| Input |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 类型 | 默认值 | 说明 |
| type | string | text | 可以是银行卡bankCard; 手机号phone(此时最大长度固定为11,maxLength设置无效); 密码password; 数字number(为了尽量唤起带小数点的数字键盘，此类型并不是原生 number，而是'<'input type="text" pattern="[0-9]*"'/>'); digit(表示原生的 number 类型); money(带小数点的模拟的数字键盘) 以及其他标准 html input type 类型 |
| label | string | - |  标签 |
| defaultValue | string | - |  设置初始默认值 |
| value | string | - |  value 值|
| placeholder | string | '' |  placeholder |
| labelNumber | number | 5 | 标签的文字个数，可用2-7之间的数字 |
| maxLength |	number | 无。除money类型外，仅当text, email, search, password, tel, or url 有效。| 最大长度 |
| required | boolean | false | 是否必填 |
| editable | boolean | true | 是否可编辑 |
| disabled | boolean | false | 是否禁用 |
| clear | boolean | false | 是否带清除功能(仅editable为true,disabled为false才生效) |
| singleLine | boolean | false | 是否单行展示 |
| singleLineCenter | boolean | false | 是否单行展示，并集中对齐 |
<!-- | extra	| string or node | '' | 右边注释 | -->
| onChange | (val: string): void | - | change 事件触发的回调函数 |
| onBlur | (val: string): void | - | blur 事件触发的回调函数 |	
| onFocus |	(val: string): void	| - | focus 事件触发的回调函数 |
