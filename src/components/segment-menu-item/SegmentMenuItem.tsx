import React, { Component } from 'react'

export interface SegmentMenuItemProps {
  title?: string
  itemIndex?: number
  data?: object[]
}

export default class SegmentMenuItemComponent extends Component<SegmentMenuItemProps, any> {
  render () {
    // const refName = 'segmentMenuItem'
    const id = `segmentMenuItem${this.props.itemIndex}`
    return (
      <div className='segment-content-item' id={id}>
        {this.props.children}
      </div>
    )
  }
}
