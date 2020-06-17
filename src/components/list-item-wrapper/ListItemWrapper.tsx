import React, { Component } from 'react'
import classnames from 'classnames'
export interface ListItemWrapperProps extends React.defaultProps{
  splitLine?: boolean
  singleLine?: boolean
  required?: boolean
  notRequired?: boolean
  label?: React.ReactNode
  subLabel?: string
  labelCls?: string
  labelStyle?: React.CSSProperties
  contentCls?: string
  contentStyle?: React.CSSProperties
  error?: boolean
  errorText?: React.ReactNode
  showExtraLabelIcon?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export default class ListItemWrapper extends Component<ListItemWrapperProps> {
  static defaultProps = {
    // errorText: '填写信息有误!请重新填写'
  }

  static getListItemProps: (props: any, other?: any) => {}
  static manifestProps: any
  static getFilterProps: any

  render () {
    const {
      splitLine = true, singleLine, label, labelCls, labelStyle,
      contentCls, contentStyle, className, style, children,
      required, nid, uitype, onClick, error, errorText,
      showExtraLabelIcon, subLabel, notRequired = true
    } = this.props
    const cls = classnames('list-item-wrapper', className, `${singleLine ? 'single-line' : 'multiple-line'}`, {
      'list-item-wrapper-split': splitLine
    })
    const errorCls = classnames('list-item-wrapper-error', {
      hidden: !error
    })
    const _required = required ?? !notRequired
    const _labelCls = classnames('list-item-wrapper-label', labelCls, { required: _required, 'list-item-wrapper-label-extra-icon': showExtraLabelIcon })
    const _contentCls = classnames('list-item-wrapper-content', contentCls)
    return (
      <div className='list-item-wrapper-box'>
        <div className={cls} style={style} nid={nid} uitype={uitype} onClick={onClick}>
          <div className={_labelCls} style={labelStyle}>
            {label}
            {subLabel && <span className='list-item-wrapper-label-sub'>{subLabel}</span>}
          </div>
          <div className={_contentCls} style={contentStyle}>
            {children}
          </div>
        </div>
        <div className={errorCls}>
          {errorText || '填写信息有误!请重新填写'}
        </div>
      </div>
    )
  }
}
