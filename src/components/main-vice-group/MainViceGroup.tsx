
import React, { Component } from 'react'
import classnames from 'classnames'

interface MainViceGroupProps {
  children?: JSX.Element[] | JSX.Element
  className?: string
  style?: React.CSSProperties
  drawerHeight?: number
  onPageDidMount?: () => void
  onPageWillUnmount?: () => void
}

export default class MainViceGroup extends Component<MainViceGroupProps> {
  componentDidMount () {
    this.props.onPageDidMount && this.props.onPageDidMount()
  }

  componentWillUnmount () {
    this.props.onPageWillUnmount && this.props.onPageWillUnmount()
  }

  render () {
    const { children, className, style, drawerHeight } = this.props
    let customStyle: React.CSSProperties = {}
    if (style) {
      customStyle = style
    }
    if (drawerHeight !== 256) {
      if (!Object.prototype.hasOwnProperty.call(customStyle, 'height')) {
        customStyle.height = `${drawerHeight}px`
      }
    }
    const cls = classnames([className, 'am-c-group-container'])
    return (
      <div style={customStyle} className={cls}>
        {children || ''}
      </div>
    )
  }
}
