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
  frameOverflow?: string
  cellSpacing?: string
  slideWidth?: string
  easing?: Function | string
  swipeSpeed?: number,
  children?: any
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
    // dotActiveStyle: {},
    // frameOverflow: 'hidden',
    // cellSpacing: '',
    // slideWidth: '',
    // easing: 'easeOutCirc',
    // swipeSpeed: 12
  }
  constructor(props: CarouselProps) {
    super(props)
  }
  render() {
    return (
      <Carousel {...this.props}>{this.props.children}</Carousel>
    )
  }
}


