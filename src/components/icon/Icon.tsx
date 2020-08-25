import React from 'react'
import classnames from 'classnames'
import loadSprite from './loadSprite'
import { IconPropsType } from './PropsType'
import { Omit } from '../_utils/types'

export type SvgProps = Omit<
React.HTMLProps<SVGSVGElement>,
'size' | 'type'
>
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<SVGSVGElement>
  visible?: boolean
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    visible: true
  }

  componentDidMount () {
    console.log(this.props.type)
    loadSprite(this.props.type)
  }

  render () {
    const { type, className, size, style, visible, ...restProps } = this.props
    const cls = classnames(
      className,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`
    )
    if (!visible) return null
    return (
      <svg
        className={cls}
        {...restProps}
        style={{
          ...style
        }}>
        <use xlinkHref={`#${type}`} />
      </svg>
    )
  }
}
