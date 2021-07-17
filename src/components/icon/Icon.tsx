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
  iconBaseUrl?: string
}
let cls = null
let defaultClass = ''
export default class Icon extends React.Component<IconProps, any> {
  constructor (props) {
    super(props)
    this.state = {
      urlsvg: null
    }
  }

  static defaultProps = {
    size: 'md',
    visible: true,
  }

  componentDidMount () {
    // loadSprite(this.props?.data?.penguin) // 测试demo
    const { nid, type, className, size, url } = this.props
    if (url && !this.state.urlinit) this.getSvgContent(url)
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

  getSvgContent = (url) => {
    const { iconBaseUrl } = this.props
    if (url) {
      axios.post(`${iconBaseUrl || 'https://build.yyuap.com'}/mobile-app/rest/v1/mobile/static/res`, { url: url }, { withCredentials: true }).then(res => {
        try {
          let a = res.data.split('<svg')[1]
          const tempindex = a.indexOf('>')
          a = a.substr(tempindex + 1)
          a = a.split('</svg>')[0]
          this.setState({
            urlsvg: a
          })
        } catch (e) {
          this.setState({ urlsvg: null })
        }
      }).catch(e => {
        this.setState({ urlsvg: null })
      })
    }
  }

  getUrlSvg = () => {
    const { className, size, nid, uitype, style } = this.props
    const { urlsvg } = this.state
    const cls = classnames(
      className,
      'am-icon',
      `am-icon-${size}`
    )
    const createsvg = (<svg dangerouslySetInnerHTML={{ __html: urlsvg }} />)
    const newurlsvg = React.cloneElement(createsvg, { className: cls, nid: nid, uitype: uitype, style: { ...style }, viewBox: '0 0 1024 1024' })
    return newurlsvg
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.nid !== undefined)
      defaultClass = ''
    if (nextProps.url !== this.props.url)
      this.getSvgContent(nextProps.url)
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
          {this.getUrlSvg()}
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
