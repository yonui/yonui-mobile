import React, { Component } from 'react'
import classnames from 'classnames'
interface FooterProps {
  children?: React.ReactChildren
  className?: string
  style?: React.CSSProperties
}
export default class MyComponent extends Component<FooterProps> {
  render () {
    const { children, className, style } = this.props
    const cls = classnames(className, 'am-footer')
    return (
      <div className={cls} style={style}>
        {children}
      </div>
    )
  }
}
