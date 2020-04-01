# README

```js
interface InputNumberPorps {
  label?: string
  precision?: number
  type?: 'normal' | 'money' | 'integer'
  min?: number | string
  max?: number | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  thousands?: boolean
  defaultValue?: number | string
  value?: number | string
  disabled?: boolean
  placeholder?: string
  autoFill?: boolean
  textAlign?: 'left' | 'center' | 'right'
  inputWrapperWidth?: string
  labelWidth?: string
  onChange?: (value: string) => void
}
```
