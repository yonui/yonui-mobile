import React, { Component } from 'react'
import classnames from 'classnames'
export interface ListItemWrapperProps extends React.defaultProps {
  splitLine?: boolean
  singleLine?: boolean
  singleLineCenter?: boolean
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
  regRuleText?: React.ReactNode
  showExtraLabelIcon?: boolean
  previewMode?: 'design' | 'edit' | 'browse'
  mReadOnly?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export default class ListItemWrapper extends Component<ListItemWrapperProps> {
  static defaultProps = {
    // errorText: '填写信息有误!请重新填写'
  }

  static getListItemProps: (props: any, other?: any) => {}
  static manifestProps: any
  static getFilterProps: any

  getStyleByMode = (previewMode) => {
    if (previewMode === 'design' || previewMode === 'edit') {
      return { color: '#555555' }
    } else if (previewMode === 'browse') {
      return { color: '#888888' }
    }
  }

  render () {
    const {
      splitLine = true,
      singleLine,
      singleLineCenter,
      label,
      labelCls,
      labelStyle,
      contentCls,
      contentStyle,
      className,
      style,
      children,
      required,
      nid,
      uitype,
      onClick,
      error,
      errorText,
      regRuleText,
      showExtraLabelIcon,
      subLabel,
      notRequired = true,
      mReadOnly,
      disabled
    } = this.props
    let classNameWrapper = 'list-item-wrapper-split';
    if (nid) {
      classNameWrapper = 'list-item-wrapper-designer'
    }
    let previewMode
    if (nid) {
      previewMode = 'design'
    } else {
      // 列表浏览时没有mReadOnly属性
      previewMode = (mReadOnly || disabled) ? 'browse' : 'edit'
    }
    const cls = classnames(
      'list-item-wrapper',
      className,
      `${singleLine || singleLineCenter ? 'single-line' : 'multiple-line'}`,
      {
        [classNameWrapper]: splitLine
      },
      {
        'single-line-center': singleLineCenter
      }
    )
    const errorCls = classnames('list-item-wrapper-error', {
      hidden: !error
    })
    const _required = required ?? !notRequired
    const _labelCls = classnames('list-item-wrapper-label', labelCls, {
      required: _required,
      'list-item-wrapper-label-extra-icon': showExtraLabelIcon
    })
    const _contentCls = classnames('list-item-wrapper-content', contentCls)
    return (
      <div className='list-item-wrapper-box'>
        <div className={cls} style={style} nid={nid} uitype={uitype} onClick={onClick}>
          <div className={_labelCls} style={{ ...labelStyle, ...this.getStyleByMode(previewMode) }}>
            {label}
            {subLabel && <span className='list-item-wrapper-label-sub'>{subLabel}</span>}
          </div>
          <div className={_contentCls} style={contentStyle}>
            {children}
          </div>
        </div>
        <div className={errorCls}>{errorText || regRuleText || '填写信息有误!请重新填写'}</div>
      </div>
    )
  }
}
