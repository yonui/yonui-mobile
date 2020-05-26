import React from 'react'
export interface BackgroundProps extends React.defaultProps {
  background?: string
}
export default class CarouselItem extends React.Component<BackgroundProps, any> {
  static defaultProps = {
    background: 'linear-gradient(180deg, #e53938 0%, transparent 50%, transparent 100%);'
  }

  render () {
    const { background } = this.props
    return (
      <div
        className='am-background'
        style={{
          background: background
        }} />
    )
  }
}
