import React from 'react'
import classnames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import Icon from '../icon'
export interface ButtonProps extends React.defaultProps{
  prefixCls?: string
  content?: string
  mode?: 'primary' | 'warning' | 'ghost' | 'default' | 'text' | 'toolbar-default' | 'toolbar-primary'
  type?: 'primary' | 'warning' | 'ghost' | 'default' | 'text' | 'toolbar-default' | 'toolbar-primary'
  size?: 'large' | 'small'
  inline?: boolean
  disabled?: boolean
  mReadOnly?: boolean
  visible?: boolean
  loading?: boolean
  icon?: React.ReactNode | string
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
    size: 'small',
    inline: false,
    disabled: false,
    visible: true,
    loading: false,
    icon: null,
    style: {}
  }

  render () {
    const {
      prefixCls,
      children,
      content,
      mode,
      type,
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
      [`${prefixCls}-icon`]: !!iconType
    })

    const kids = React.Children.map(children, insertSpace)
    let iconEl
    if (iconType && typeof iconType === 'string') {
      iconEl = (
        <Icon
          aria-hidden='true'
          type={iconType}
          size={size === 'small' ? 'xxs' : 'md'}
          className={`${prefixCls}-icon`} />
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
    return (
      <TouchFeedback
        activeClassName={`${prefixCls}-active`}
        disabled={disabled || mReadOnly}>
        <a
          role='button'
          className={wrapCls}
          {...restProps}
          style={style}
          onClick={disabled || mReadOnly ? undefined : onClick}
          aria-disabled={disabled || mReadOnly}
          aria-visible={visible}>
          {iconEl}
          {(kids && kids.length) ? kids : content}
        </a>
      </TouchFeedback>
    )
  }
}

export default Button
