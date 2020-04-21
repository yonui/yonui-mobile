import React, { Component } from 'react'
import classnames from 'classnames'
interface ToolBarBoxProps {
  children?: JSX.Element[] | JSX.Element
  length?: number
  layout?: 'vertical' | 'horizontal'
  runTime?: boolean
}
export default class ToolBarBox extends Component<ToolBarBoxProps> {
  static defaultProps = {
    layout: 'horizontal'
  }

  render () {
    const { children = [], layout, runTime } = this.props
    const childrenLength = Array.isArray(children) ? Math.min(children.length, 5) : 1
    // const _length = layout === 'vertical' ? 1 : childrenLength
    const wrapperCls = classnames('yonui-mobile-tool-bars-wrapper')
    const cls = classnames('yonui-mobile-tool-bars-2', layout, `length-${childrenLength}`, {
      'yonui-mobile-tool-bars-runtime': runTime
    })
    return (
      <div className={cls}>
        <div className={wrapperCls}>
          {children}
        </div>
      </div>
    )
  }
}
