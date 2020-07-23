
import React, { Component } from 'react'
import classnames from 'classnames'

interface MainViceGroupProps {
  children?: JSX.Element[] | JSX.Element
  className?: string
  style?: React.CSSProperties
  drawerHeight?: number
}

export default class MainViceGroup extends Component<MainViceGroupProps> {
  render () {
    const { children, className, style, drawerHeight } = this.props
    if (drawerHeight !== 256) {
      style.height = `${drawerHeight}px`
    }
    const cls = classnames([className, 'am-c-group-container'])
    return (
      <div style={style} className={cls}>
        {children || ''}
      </div>
    )
  }
}
