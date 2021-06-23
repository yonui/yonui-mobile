# README
## InputBox 基础组件-输入框母本
## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
type | 类型 | 'text'/'number'/'tel'/'password' | 'text' | false
pattern | 输入过程中的校验规则 | RegExp | 无 | false
finalPattern | 焦点离开时的校验规则 | RegExp | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
textAlign | 文字对齐方向 | 'left'/'right'/'center' | 'left' | false
placeholder | 占位符 | string | 无 | false
maxLength | 最长长度 | number | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
required | 是否必填 | boolean | false | false
bCanModify | 是否可修改 | boolean | 无 | false
disabled | 是否可修改 | boolean | 无 | false
mReadOnly | 是否可修改 | boolean | 无 | false
check | 是否启用校验 | boolean | 无 | false
customCheck | 自定义校验函数 | (value: string, final?: boolean) => boolean | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
onBlur | 失去焦点时回调 | (value: string) => void | 无 | false
onChange | 修改时回调 | (value: string) => void | 无 | false
onClickClear | 点击清空时回调 | (value: string) => void | 无 | false
onError | 校验错误时回调 | (value: string, pattern: { reg?: RegExp, text?: string }) => void | 无 | false
onSuccess | 校验成功时回调 | React.CSSProperties | 无 | false
beforeRender | 渲染前回调 | (value: string) => string | 无 | false
afterChange | 修改后回调 | (value: string) => string | 无 | false
