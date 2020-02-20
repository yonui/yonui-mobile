import React from 'react'
import { Carousel } from 'antd-mobile'

export interface CarouselProps {
  selectedIndex?: number
  dots?: boolean
  vertical?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  infinite?: boolean
  dotStyle?: object
  dotActiveStyle?: object
  frameOverflow?: 'visible' | 'hidden'
  cellSpacing?: number
  slideWidth?: string
  easing?: () => void
  swipeSpeed?: number
  ratio?: string
}
export default class MDFCarousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    selectedIndex: 0,
    dots: true,
    vertical: false,
    autoplay: false,
    autoplayInterval: 3000,
    infinite: false,
    dotStyle: {},
    dotActiveStyle: {},
    frameOverflow: 'hidden',
    cellSpacing: 0,
    slideWidth: 1,
    swipeSpeed: 12,
    ratio: "4:2"
  }
  constructor(props: CarouselProps) {
    super(props)
  }
  getPaddingBottom() {
    const { ratio = '4:2' } = this.props
    const reg =  /[0-9]\:[0-9]/
    if(reg.test(ratio)) {
      const result:any = ratio.split(':')
      return result[1]/result[0] * 100 + '%'
    }
    return '50%'
  }
  render() {
    return (
      <Carousel {...this.props}>{this.props.children}</Carousel>
    )
  }
}


