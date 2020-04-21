import * as React from 'react'
declare module '*.less'
declare module '*.css'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
// 拓展react模块定义，新增nid和uitype属性
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    nid?: string
    uitype?: string
  }

  interface defaultProps {
    className?: string
    style?: React.CSSProperties
    nid?: string
    uitype?: string
  }

  interface inputItemProps {
    label?: string
    disabled?: boolean
    splitLine?: boolean
    singleLine?: boolean
    required?: boolean
    value?: string | number
  }
}
