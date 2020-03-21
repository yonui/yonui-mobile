import * as React from 'react'
declare module '*.less'
declare module '*.css'

declare module 'react' {
  interface defaultProps {
    className?: string
    style?: React.CSSProperties
  }
}
