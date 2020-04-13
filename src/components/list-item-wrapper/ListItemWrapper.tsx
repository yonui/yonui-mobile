import React, { Component } from 'react'
import classnames from 'classnames'
interface ListItemWrapperProps extends React.defaultProps{
  splitLine?: boolean
  singleLine?: boolean
  required?: boolean
  label?: string
  labelCls?: string
  labelStyle?: React.CSSProperties
  contentCls?: string
  contentStyle?: React.CSSProperties
  content?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export default class ListItemWrapper extends Component<ListItemWrapperProps> {
  render () {
    const { splitLine = true, singleLine, label, labelCls, labelStyle, contentCls, contentStyle, className, style, children, required, nid, uitype, onClick } = this.props
    const cls = classnames('list-item-wrapper', className, `${singleLine ? 'single-line' : 'multiple-line'}`, {
      'list-item-wrapper-split': splitLine
    })
    const _labelCls = classnames('list-item-wrapper-label', labelCls, { required })
    const _contentCls = classnames('list-item-wrapper-content', contentCls)
    return (
      <div className={cls} style={style} nid={nid} uitype={uitype} onClick = {onClick}>
        <div className={_labelCls} style={labelStyle}>
          {label}
        </div>
        <div className={_contentCls} style={contentStyle}>
          {children}
        </div>
      </div>
    )
  }
}
