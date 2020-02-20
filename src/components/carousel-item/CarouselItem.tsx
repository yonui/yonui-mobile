import React, { Component } from 'react'
export interface CarouselProps {
  prefixCls?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  height?: number
  children?: Array<any>
}
export default class CarouselItem extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel-item',
    backgroundColor: 'transparent',
    backgroundImage: '',
    backgroundSize: 'cover',
    height: 200,
    children: []
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
  componentDidMount() {
    console.log(this.divRef)
  }
  render() {
    let {
      prefixCls,
      backgroundColor,
      backgroundImage,
      backgroundSize,
      height,
      children
    } = this.props
    return (
      <div className={prefixCls} ref={el => this.divRef = el} style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        height: height + 'px'
      }}>
        <div className={`${prefixCls}-content`}>
          { children && children.length ? children : this.renderDefaultItem()}
        </div>
      </div>
    )
  }
}
