import React, { Component } from 'react'
import classnames from 'classnames'
interface TabPaneProps {
  children: any
  key: string
  label: string
  className?: string
  style?: object
  minHeight?: string
  width?: string
  bgColor?: string
  marginBottom?: string
}

export default class MyComponent extends Component<TabPaneProps> {
  static defaultProps = {
    code: '',
    minHeight: 0
  }

  render () {
    const { children, key, className, style, minHeight, width, bgColor, marginBottom, ...other } = this.props
    const cls = classnames(className, 'yonui-tabpane')
    const sty = { width, minHeight, 'background-color': bgColor, marginBottom, ...style }
    return (
      <div key={key} className={cls} style={sty} {...other}>
        {children}
      </div>
    )
  }
}
