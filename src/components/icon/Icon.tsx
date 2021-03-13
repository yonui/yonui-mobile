import React from 'react'
import classnames from 'classnames'
import loadSprite from './loadSprite'
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

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    visible: true
  }

  constructor (props) {
    super(props)
    let type = this.props.type || ''
    type = type.replace('icon-', '') // 去掉icon id 的前缀
    console.log('------- icon type: ', type)
    if (type) {
      const _url = `/iconfont/geticonsvg?type=${type}`
      axios.get(_url, {
        withCredentials: true
      }).then(res => {
        console.log('------- icon return res: ', res.data)
        loadSprite(res?.data?.data)
      }).catch(() => {})
    }
  }

  componentDidMount () {
    // loadSprite(this.props?.data?.penguin)
    // loadSprite(this.props.type)
  }

  render () {
    let { type, className, size, style, visible, ...restProps } = this.props
    type = type.replace('icon-', '') // 去掉icon id 的前缀
    const cls = classnames(
      className,
      'am-icon-default',
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
