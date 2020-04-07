import React, { Component } from 'react'
import classnames from 'classnames'
interface ToolBarBoxProps {
  children?: JSX.Element[] | JSX.Element
}
export default class ToolBarBox extends Component<ToolBarBoxProps> {
  render () {
    const { children = [] } = this.props
    const length = Array.isArray(children) ? Math.min(children.length, 5) : 1
    const wrapperCls = classnames('yonui-mobile-tool-bars-wrapper', `length-${length}`)
    return (
      <div className='yonui-mobile-tool-bars-2'>
        <div className={wrapperCls}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
