import React from 'react'
import classnames from 'classnames'
import { loadSprite, loadSpriteForDesign } from './loadSprite'
import { IconPropsType } from './PropsType'
import { Omit } from '../_utils/types'
import axios from 'axios'

export type SvgProps = Omit<
React.HTMLProps<SVGSVGElement>,
'size' | 'type'
>
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<SVGSVGElement>
  visible?: boolean
}
let cls = null
let defaultClass = ''
export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    visible: true
  }

  componentDidMount () {
    // loadSprite(this.props?.data?.penguin) // 测试demo
    const { nid, type, className, size } = this.props
    if (nid) { // 设计态
      loadSpriteForDesign(type)
    } else {
      defaultClass = 'am-icon-default' // 运行时icon图标显示反转180°
      console.log('------- icon type: ', type)
      if (type) {
        const _url = `${window.DOMAIN_PREFIX || ''}/iconfont/geticonsvg?type=${type}`
        axios.get(_url, {
          withCredentials: true
        }).then(res => {
          console.log('------- icon return res: ', res.data)
          loadSprite(res?.data?.data)
        }).catch(() => {})
      }
    }
    cls = classnames(
      className,
      defaultClass,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`
    )
  }

  shouldComponentUpdate () {
    if (this.props.nid !== undefined)
      defaultClass = ''
    return true
  }

  render () {
    const { type, className, size, style, visible, ...restProps } = this.props
    if (!visible) return null
    cls = classnames(
      className,
      defaultClass,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`
    )
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
