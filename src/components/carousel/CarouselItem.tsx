import React, { Component } from 'react'
export interface CarouselProps {
  ratio?: string
}
export default class CarouselItem extends Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-carousel-item',
    backgroundColor: 'transparent',
    backgroundImage: '',
    ratio: '4:2'
  }

  divRef: HTMLDivElement | null

  constructor(props: any) {
    super(props)
    this.divRef = null
    this.state = {

    }
  }
  renderDefaultItem() {
    const { prefixCls } = this.props
    return (
      <a className={`${prefixCls}-default`} >
        CarouselItem
      </a>
    )
  }
  getItemHeight() {
    const { ratio } = this.props
    const reg =  /[0-9]\:[0-9]/
    if(reg.test(ratio)) {
      const arr = ratio.split(':')
      return arr[1]/arr[0] * 100 + '%'
    }
    return '50%'
  }
  componentDidMount() {
    console.log(this.divRef)
  }
  render() {
    console.log(this.getItemHeight())

    const {
      prefixCls,
      backgroundColor,
      backgroundImage
    } = this.props
    return (
      <div className={prefixCls} ref={el => this.divRef = el} style={{
        backgroundColor,
        backgroundImage,
        height: 200,
        paddingBottom: this.getItemHeight()
      }}>
        <div className={`${prefixCls}-content`}>
          {this.props.children ? this.props.children : this.renderDefaultItem()}
        </div>
      </div>
    )
  }
}
