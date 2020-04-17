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
  error?: boolean
  errorText?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export default class ListItemWrapper extends Component<ListItemWrapperProps> {
  static defaultProps = {
    // errorText: '填写信息有误!请重新填写'
  }

  render () {
    const { splitLine = true, singleLine, label, labelCls, labelStyle, contentCls, contentStyle, className, style, children, required, nid, uitype, onClick, error, errorText } = this.props
    const cls = classnames('list-item-wrapper', className, `${singleLine ? 'single-line' : 'multiple-line'}`, {
      'list-item-wrapper-split': splitLine
    })
    const errorCls = classnames('list-item-wrapper-error', {
      hidden: !error
    })
    const _labelCls = classnames('list-item-wrapper-label', labelCls, { required })
    const _contentCls = classnames('list-item-wrapper-content', contentCls)
    return (
      <React.Fragment>
        <div className={cls} style={style} nid={nid} uitype={uitype} onClick = {onClick}>
          <div className={_labelCls} style={labelStyle}>
            {label}
          </div>
          <div className={_contentCls} style={contentStyle}>
            {children}
          </div>
        </div>
        <div className={errorCls}>
          {errorText || '填写信息有误!请重新填写'}
        </div>
      </React.Fragment>
    )
  }
}
