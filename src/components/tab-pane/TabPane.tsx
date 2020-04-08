import React, { Component } from 'react'
import classnames from 'classnames'
interface TabPaneProps {
  children: any
  key: string
  label: string
  className?: string
  style?: object
  height?: string
  width?: string
  bgColor?: string
  marginBottom?: string
}

export default class MyComponent extends Component<TabPaneProps> {
  static defaultProps = {
    code: '',
    height: '100px'
  }

  render () {
    const { children, key, className, style, height, width, bgColor, marginBottom, ...other } = this.props
    const cls = classnames(className, 'yonui-tabpane')
    const sty = { width, height, 'background-color': bgColor, marginBottom, ...style }
    return (
      <div key={key} className={cls} style={sty} {...other}>
        {children}
      </div>
    )
  }
}
