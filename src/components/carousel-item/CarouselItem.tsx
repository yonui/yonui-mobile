import React from 'react'
import classnames from 'classnames'
export interface CarouselProps {
  prefixCls?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  height?: number | string
  children?: any[]
  className?: string
  style?: object
}
export default class CarouselItem extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel-item',
    backgroundColor: 'transparent',
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
      backgroundColor,
      backgroundImage,
      backgroundSize,
      children,
      style = {},
      // height,
      className,
      ...other
    } = this.props
    const cls = classnames(className, prefixCls)
    const sty = { backgroundColor, backgroundImage: (backgroundImage ? `url(${backgroundImage})` : 'none'), backgroundSize, ...style, height: '100%' }
    // const finalHeight = !height ? '100%' : height
    return (
      <div className={cls} ref={el => { this.divRef = el }} style={sty} {...other}>
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      </div>
    )
  }
}
