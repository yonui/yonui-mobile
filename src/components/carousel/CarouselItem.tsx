import React, { Component } from 'react'
export interface CarouselProps {
  ratio?: string
}
export default class CarouselItem extends Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-carousel-item',
    backgroundColor: 'transparent',
    backgroundImage: '',
    backgroundSize: 'cover'
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
      backgroundSize
    } = this.props
    return (
      <div className={prefixCls} ref={el => this.divRef = el} style={{
        backgroundColor,
        backgroundImage,
        backgroundSize
      }}>
        <div className={`${prefixCls}-content`}>
          {this.props.children ? this.props.children : this.renderDefaultItem()}
        </div>
      </div>
    )
  }
}
