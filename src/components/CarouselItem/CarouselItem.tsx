import React from 'react'
export interface CarouselProps {
  prefixCls?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  height?: number
  children?: any[]
  style?: React.CSSProperties
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
      style
    } = this.props
    return (
      <div className={prefixCls} ref={el => { this.divRef = el }} style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        ...style
      }}>
        <div className={`${prefixCls}-content`}>
          { children }
        </div>
      </div>
    )
  }
}
