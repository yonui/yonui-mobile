import React from 'react'
import classnames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import Icon from '../icon'
export interface ButtonProps extends React.defaultProps{
  prefixCls?: string
  content?: string
  mode?: 'primary' | 'warning' | 'ghost' | 'default' | 'text' | 'toolbar-default' | 'toolbar-primary'
  type?: 'primary' | 'warning' | 'ghost' | 'default' | 'text' | 'toolbar-default' | 'toolbar-primary'
  iconPosition?: 'top' | 'right' | 'bottom' | 'left'
  size?: 'large' | 'small'
  inline?: boolean
  disabled?: boolean
  mReadOnly?: boolean
  visible?: boolean
  loading?: boolean
  icon?: React.ReactNode | string
  uimeta?: string
  meta?: any
  cBrowseClick?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
function isString (str: any) {
  return typeof str === 'string'
}

function insertSpace (child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' ')
    )
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ')
    }
    return <span>{child}</span>
  }
  return child
}

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'mdf-button',
    content: '',
    type: 'toolbar-primary',
    iconPosition: 'left',
    size: 'small',
    inline: false,
    disabled: false,
    visible: true,
    loading: false,
    icon: null,
    style: {}
  }

  _onClick = e => {
    // e.stopPropagation()
    const { onClick, mReadOnly, disabled, meta } = this.props
    const cBrowseClick = meta?.cBrowseClick
    if (disabled || (!cBrowseClick && mReadOnly)) return
    onClick?.(e)
  }

  render () {
    const {
      prefixCls,
      children,
      content,
      mode,
      type,
      iconPosition,
      size,
      inline,
      disabled,
      visible,
      loading,
      icon,
      style,
      onClick,
      className,
      mReadOnly,
      meta,
      ...restProps
    } = this.props
    if (!visible) return null

    const iconType: any = loading ? 'loading' : icon
    const _mode = mode || type
    const wrapCls = classnames(prefixCls, className, `${prefixCls}-${size}`, {
      [`${prefixCls}-primary`]: _mode === 'primary',
      [`${prefixCls}-default`]: _mode === 'default' || !_mode,
      [`${prefixCls}-ghost`]: _mode === 'ghost',
      [`${prefixCls}-warning`]: _mode === 'warning',
      [`${prefixCls}-text`]: _mode === 'text',
      [`${prefixCls}-toolbar-default`]: _mode === 'toolbar-default',
      [`${prefixCls}-toolbar-primary`]: _mode === 'toolbar-primary',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType,
      [`${prefixCls}-${size}-column`]: iconPosition === 'top' || iconPosition === 'bottom'
    })

    const kids = React.Children.map(children, insertSpace)
    let iconEl
    if (iconType && typeof iconType === 'string') {
      iconEl = (
        <Icon
          aria-hidden='true'
          type={iconType}
          size={size === 'small' ? 'xxs' : 'md'}
          className={`${prefixCls}-icon`}
          nid={restProps.nid}
        />
      )
    } else if (iconType) {
      const rawCls = iconType.props && iconType.props.className
      const cls = classnames(
        'am-icon',
        `${prefixCls}-icon`,
        size === 'small' ? 'am-icon-xxs' : 'am-icon-md'
      )
      iconEl = React.cloneElement(iconType, {
        className: rawCls ? `${rawCls} ${cls}` : cls
      })
    }
    const topPosition = <>
      {iconEl}
      {(kids?.length) ? kids : content}
    </>
    const rightPosition = <>
      {(kids?.length) ? kids : content}{iconEl}
    </>
    const bottomPosition = <>
      {(kids?.length) ? kids : content}
      {iconEl}
    </>
    const leftPosition = <>
      {iconEl}{(kids?.length) ? kids : content}
    </>
    return (
      <TouchFeedback
        activeClassName={`${prefixCls}-active`}
        disabled={disabled || mReadOnly}
      >
        <a
          uimeta={meta && JSON.stringify(meta)}
          role='button'
          className={wrapCls}
          {...restProps}
          style={style}
          onClick={this._onClick}
          aria-disabled={disabled || mReadOnly}
          aria-visible={visible}
        >
          {iconPosition === 'top' && topPosition}
          {iconPosition === 'right' && rightPosition}
          {iconPosition === 'bottom' && bottomPosition}
          {iconPosition === 'left' && leftPosition}
        </a>
      </TouchFeedback>
    )
  }
}

export default Button
