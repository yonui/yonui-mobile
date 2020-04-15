import React, { Component } from 'react'
import classnames from 'classnames'
interface ToolBarBoxProps {
  children?: JSX.Element[] | JSX.Element
  length?: number
}
export default class ToolBarBox extends Component<ToolBarBoxProps> {
  render () {
    const { children = [], length } = this.props
    const _length = length === undefined ? (Array.isArray(children) ? children.filter(item => item.props.visible).length : (children.props.visible ? 1 : 0)) : length
    // const length = Array.isArray(children) ? Math.min(children.length, 5) : 1
    const wrapperCls = classnames('yonui-mobile-tool-bars-wrapper', `length-${_length}`)
    return (
      <div className='yonui-mobile-tool-bars-2'>
        <div className={wrapperCls}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
