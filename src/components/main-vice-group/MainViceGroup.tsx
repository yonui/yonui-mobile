
import React, { Component } from 'react'
import classnames from 'classnames'

interface MainViceGroupProps {
  children?: JSX.Element[] | JSX.Element
  className?: string
  style?: React.CSSProperties
  drawerHeight?: number
  onShow?: () => void
  groupType?: string
  drawerWidth?: number
  // onPageWillUnmount?: () => void
}

export default class MainViceGroup extends Component<MainViceGroupProps> {
  componentDidMount () {
    this.props.onShow && this.props.onShow()
    if (this.props.groupType === 'drawer') {
      this.setDrawerSize(this.props.drawerWidth, this.props.drawerHeight)
    }
  }

  componentWillMount () {
    // this.props.onPageWillUnmount && this.props.onPageWillUnmount()
  }

  setDrawerSize = (width: number, height: number) => {
    const drawerA = document.querySelector('[uitype="groupcontainer"]')
    const drawerR = document.querySelector('.ant-drawer-content-wrapper')
    const newStyleText = `width: ${width}px; height: ${height}px; min-height: 0px`
    drawerA && drawerA.setAttribute('style', newStyleText)
    drawerR && drawerR.setAttribute('style', newStyleText)
  }

  render () {
    const { children, className, style, groupType, drawerWidth, drawerHeight } = this.props
    let customStyle: React.CSSProperties = {}
    if (style) {
      customStyle = style
    }
    if (drawerHeight !== 256) {
      if (!Object.prototype.hasOwnProperty.call(customStyle, 'height')) {
        customStyle.height = `${drawerHeight}px`
      }
    }
    if (groupType === 'drawer') {
      this.setDrawerSize(drawerWidth, drawerHeight)
    }
    const cls = classnames([className, 'am-c-group-container'])
    return (
      <div style={customStyle} className={cls}>
        {children || ''}
      </div>
    )
  }
}
