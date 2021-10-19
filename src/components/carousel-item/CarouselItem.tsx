import React from 'react'
import classnames from 'classnames'
export interface CarouselProps {
  prefixCls?: string
  bgColor?: string
  backgroundImage?: string
  backgroundSize?: string
  height?: number | string
  children?: any[]
  className?: string
  style?: object
  nid?: string
  uitype?: string
}
export default class CarouselItem extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel-item',
    bgColor: 'transparent',
    backgroundImage: '',
    backgroundSize: 'cover',
    children: []
  }

  divRef: HTMLDivElement | null

  constructor (props: any) {
    super(props)
    this.divRef = null
    this.state = {

    }
  }

  render () {
    const {
      prefixCls,
      bgColor,
      backgroundImage,
      backgroundSize,
      children,
      style = {},
      // height,
      className,
      nid,
      uitype,
      ...other
    } = this.props
    const cls = classnames(className, prefixCls)
    const sty = { backgroundColor: bgColor, backgroundImage: (backgroundImage ? `url(${backgroundImage})` : 'none'), backgroundSize, ...style, height: '100%' }
    // const finalHeight = !height ? '100%' : height
    return (
      <div nid={nid} uitype={uitype} className={cls} ref={el => { this.divRef = el }} style={sty} {...other}>
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      </div>
    )
  }
}
