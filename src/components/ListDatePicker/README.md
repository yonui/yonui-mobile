# README
## ListCalendar 基础组件-日期输入框
## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  | `new Date(2000, 1, 1, 0, 0, 0)` |
| maxDate   | 最大可选日期 | Date  | `new Date(2030, 1, 1, 23, 59, 59)` |
| use12Hours | 12小时制 | Boolean | false |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| format  | 格式化选中的值 | `(value: Date) => date string` / `format string`(对应 mode 下格式分别为:`YYYY-MM-DD`,`HH:mm`,`YYYY-MM-DD HH:mm`) | - |
| title  | 弹框的标题 | string/React.ReactElement |  无  |
| extra   | 显示文案 | String  |  `请选择`  |
| prefixCls |  class前缀 | string | `am-picker` |
| className |  样式类名 | string | - |
| onOk  | 点击选中时执行的回调 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |
| required | boolean | false | 是否必填 |
注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。