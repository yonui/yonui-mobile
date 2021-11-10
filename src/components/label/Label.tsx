import React from 'react'
import classnames from 'classnames'
import Icon from '../icon'
export interface LabelProps extends React.defaultProps{
  label?: string // 文本
  spareLabel?: string
  // type?: 'default' | 'primary' | 'border' | 'label'
  // color?: string
  // bgColor?: string
  // width?: string
  textAlign?: 'left' | 'right' | 'center'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  textClamp?: number
  textLangth?: number
  textLength?: number
  visible?: boolean
  prefix: string
  suffix: string
  dataSource: string
  controlType: string
  multiple: boolean
  dateMode: string
  showZero: boolean
  showTitle: boolean
  openHyperlinks?: boolean
  uimeta?: string
  meta?: any
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default class Label extends React.PureComponent<LabelProps> {
  static defaultProps = {
    visible: true
    // style: {
    //   // color: 'rgba(255,255,255,1)',
    //   // background: 'rgba(0,199,230,1)'
    // }
  }

  // getStyle = (type?: 'default' | 'primary' | 'border' | 'label', color?: string, bgColor?: string) => {
  //   switch (type) {
  //     case 'label': {
  //       return ({
  //         color: color,
  //         backgroundColor: bgColor
  //       })
  //     }
  //     case 'primary': {
  //       return ({
  //         color: '#ffffff',
  //         backgroundColor: color
  //       })
  //     }
  //     case 'border': {
  //       return ({
  //         color: color,
  //         backgroundColor: '#ffffff',
  //         border: `1px solid ${color}`
  //       })
  //     }
  //     case 'default':
  //     default: {
  //       return ({
  //         color: color,
  //         backgroundColor: bgColor
  //       })
  //     }
  //   }
  // }

  parseValue = (value: any) => {
    try {
      return JSON.parse(value)
    } catch {
      return {}
    }
  }

  adaptValue = (label: string) => {
    const { controlType, dataSource, multiple, dateMode, showZero } = this.props
    // console.log('---------label---------\n', 'dataSource:', dataSource, '\ntype', controlType, '\ndateMode', dateMode, '\nvalue', label)
    switch (controlType) {
      case 'switch':
        return label === undefined
          ? label
          : label ? '是' : '否'
      case 'optionwidget':
      case 'radio':
        if (dataSource) {
          try {
            if (dataSource?.slice(0, 1) === '{' && dataSource?.slice(-1) === '}') {
              const obj = this.parseValue(dataSource)
              if (multiple) {
                if (label.includes(',')) {
                  const items = label.split(',')
                  let result = ''
                  items.forEach(element => {
                    const value = obj[element]
                    result = result.concat(`${value},`)
                  })
                  return result.replace(/^,+|,+$/g, '')
                } else {
                  return obj[label]
                }
              } else {
                return obj[label]
              }
            }
          } catch (e) {
            return label
          }
        }
        break
      // datetimepicker选择只显示日期
      case 'datetimepicker':
        return dateMode === 'picker-date'
          ? label?.split(' ')[0]
          : label
      // 只显示日期
      case 'datepicker':
        return label?.split(' ')[0]
      case 'numberwidget':
      default :
        try {
          if (label?.slice(0, 1) === '{' && label?.slice(-1) === '}') {
            const obj = this.parseValue(label)
            if (obj.linkText) {
              return obj.linkText
            }
            return obj.address || obj.identity || `${obj.T}${obj.T && obj.L && '-'}${obj.L}`
          } else {
            return label
          }
        } catch (e) {
          if (typeof label === 'boolean') {
            return label ? '是' : '否'
          }
          if (typeof label === 'number') {
            if (label === 0) {
              return showZero ? '0' : ' '
            } else {
              return label
            }
          }
        }
    }
  }

  _onClick = e => {
    // e.stopPropagation()
    const { label, openHyperlinks, onClick, meta } = this.props
    if (openHyperlinks && label?.slice(0, 1) === '{' && label?.slice(-1) === '}') {
      e.stopPropagation()
      const obj = this.parseValue(label)
      obj.linkAddress && (window.location.href = obj.linkAddress)
    } else {
      e.uimeta = meta
      onClick?.(e)
    }
  }

  render () {
    const { prefix, showTitle, suffix, label, openHyperlinks, style, className, textAlign, textClamp, textLangth, textLength, leftIcon, rightIcon, visible, meta, onClick, ...other } = this.props
    const tLength = textLangth || textLength
    let { spareLabel } = this.props
    spareLabel = showTitle ? spareLabel : ''
    const parseValue = this.adaptValue(label)
    const sty: React.CSSProperties = { ...style, textAlign }
    const cls = classnames(className, 'yonui-tag')
    const hyperlinksCls = this.props.controlType === 'hyperlinks' || (openHyperlinks && this.parseValue(label).linkAddress) ? 'yonui-mobile-label-hyperlinks-text' : ''
    const tagsCls = classnames(hyperlinksCls, 'includes-meta', 'yonui-mobile-tag-text', 'yonui-mobile-tag-clamp')
    const leftIconEle = typeof leftIcon === 'string' ? <Icon type={leftIcon} nid={other.nid} size='xxs' /> : leftIcon
    const rightIconEle = typeof rightIcon === 'string' ? <Icon type={rightIcon} nid={other.nid} size='xxs' /> : rightIcon
    if (!visible) return null
    return (
      <span className='yonui-tag-out'>
        <span className={cls} style={sty} {...other}>
          {leftIcon && leftIconEle}
          {prefix && <span className='yonui-mobile-tag-clamp' style={+textClamp ? { WebkitLineClamp: textClamp, textAlign: textAlign } : { whiteSpace: 'nowrap' }}>{prefix}</span>}
          <span onClick={this._onClick} className={tagsCls} style={+textClamp ? { WebkitLineClamp: textClamp, textAlign: textAlign } : { whiteSpace: 'nowrap' }}>
            {(tLength === undefined || +tLength === 0 || (parseValue || spareLabel)?.length <= tLength) ? (parseValue || spareLabel) : `${(parseValue || spareLabel)?.slice(0, tLength)}...`}
          </span>
          {suffix && <span className='yonui-mobile-tag-clamp' style={+textClamp ? { WebkitLineClamp: textClamp, textAlign: textAlign } : { whiteSpace: 'nowrap' }}>{suffix}</span>}
          {rightIcon && rightIconEle}
        </span>
      </span>
    )
  }
}
