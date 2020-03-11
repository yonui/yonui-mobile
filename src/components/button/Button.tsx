import React from 'react'
import classnames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import Icon from '../icon'

export interface ButtonProps {
  prefixCls?: string
  content?: string
  type?: 'primary' | 'warning' | 'ghost' | 'default' | 'text'
  size?: 'large' | 'small'
  inline?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode | string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  className?: string
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
    type: 'default',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    icon: null,
    style: {}
  }

  render () {
    const {
      prefixCls,
      children,
      content,
      type,
      size,
      inline,
      disabled,
      loading,
      icon,
      style,
      onClick,
      className,
      ...restProps
    } = this.props

    const iconType: any = loading ? 'loading' : icon
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-default`]: type === 'default',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-text`]: type === 'text',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType
    })

    const kids = React.Children.map(children, insertSpace)
    let iconEl
    if (typeof iconType === 'string') {
      iconEl = (
        <Icon
          aria-hidden="true"
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
        disabled={disabled}>
        <a
          role="button"
          className={wrapCls}
          {...restProps}
          style={style}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}>
          {iconEl}
          {kids || content}
        </a>
      </TouchFeedback>
    )
  }
}

export default Button
