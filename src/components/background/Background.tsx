import React, { Component } from 'react'
export interface CarouselProps {
  background?: string
}
export default class CarouselItem extends React.Component<CarouselProps, any> {
  static defaultProps = {
    background: 'linear-gradient(180deg, #e53938 0%, transparent 50%, transparent 100%);',
  }


  constructor(props: any) {
    super(props)
  }
  render() {
    const {
      background
    } = this.props
    return (
      <div className="am-background" style={{
        background: background,
      }}></div>
    )
  }
}
