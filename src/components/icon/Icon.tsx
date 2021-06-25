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
  url?: string
}
let cls = null
let defaultClass = ''
export default class Icon extends React.Component<IconProps, any> {
  constructor (props) {
    super(props)
    this.state = {
      urlsvg: null,
      urlinit: false
    }
  }

  static defaultProps = {
    size: 'md',
    visible: true,
  }

  componentDidMount () {
    // loadSprite(this.props?.data?.penguin) // 测试demo
    const { nid, type, className, size, url } = this.props
    if (url && !this.state.urlinit) this.initUrlSvg(url)
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

  initUrlSvg = (url) => {
    const { className, size, style } = this.props
    if (url) {
      axios.get(url).then(res => {
        try {
          let a = res.data.split('<svg')[1]
          const tempindex = a.indexOf('>')
          a = a.substr(tempindex + 1)
          a = a.split('</svg>')[0]
          const cls = classnames(
            className,
            'am-icon',
            `am-icon-${size}`
          )
          const urlsvg = (<svg dangerouslySetInnerHTML={{ __html: a }} />)
          const newurlsvg = React.cloneElement(urlsvg, { className: cls, style: { ...style }, viewBox: '0 0 1024 1024' })
          console.log(newurlsvg)
          this.setState({
            urlsvg: newurlsvg,
            urlinit: true
          })
        } catch (e) {
          console.log('处理url出错', e)
        }
      }).catch(e => console.log(e))
    }
  }

  shouldComponentUpdate () {
    if (this.props.nid !== undefined)
      defaultClass = ''
    return true
  }

  render () {
    const { type, className, size, style, visible, url, ...restProps } = this.props
    const { urlsvg } = this.state
    if (!visible) return null
    cls = classnames(
      className,
      defaultClass,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`
    )
    if (url && urlsvg) {
      return (
        <>
          {urlsvg}
        </>
      )
    } else {
      return (
        <svg className={cls} {...restProps} style={{ ...style }}>
          <use xlinkHref={`#${type}`} />
        </svg>
      )
    }
  }
}
