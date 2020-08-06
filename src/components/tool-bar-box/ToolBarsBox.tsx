import React, { Component } from 'react'
import classnames from 'classnames'
interface ToolBarBoxProps extends React.defaultProps{
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
    const { children = [], layout, runTime, className, style, nid, uitype } = this.props
    const childrenLength = Array.isArray(children) ? Math.min(children.length, 5) : 1
    // const _length = layout === 'vertical' ? 1 : childrenLength
    const wrapperCls = classnames('yonui-mobile-tool-bars-wrapper')
    const cls = classnames(className, 'yonui-mobile-tool-bars-2', layout, {
      'yonui-mobile-tool-bars-runtime': runTime
    })
    const btnNum = Array.isArray(children) ? children.length : 1
    let showBtnNum = 0
    if (btnNum !== 1) {
      for (let i = 0; i < btnNum; i++) {
        if (children[i].props.visible) {
          showBtnNum++
        }
      }
    } else {
      if (children.props.visible) {
        showBtnNum++
      }
    }
    let newChildren = []
    if (btnNum !== 1) {
      for (let i = 0; i < btnNum; i++) {
        let item = <div className={classnames(`length-${Math.min(showBtnNum,5)}`)}>{children[i]}</div>
        if (children[i].props.visible) {
          newChildren.push(item)
        }
      }
    } else {
      let item = <div className={classnames(`length-${Math.min(showBtnNum,5)}`)}>{children}</div>
      if (children.props.visible) {
        newChildren.push(item)
      }
    }
    return (
      <div className={cls} style={style} nid={nid} uitype={uitype}>
        <div className={wrapperCls}>
          {newChildren}
        </div>
      </div>
    )
  }
}
