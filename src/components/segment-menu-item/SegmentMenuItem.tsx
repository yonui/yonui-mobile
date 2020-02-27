import React, { Component } from 'react'
import { any } from 'prop-types'

export interface SegmentMenuItemProps {
  title?: string
  itemIndex?: number
  data?: Array<object>
}

export default class SegmentMenuItemComponent extends Component<SegmentMenuItemProps, any> {
  constructor(props: any) {
    super(props)
  }
  render () {
    const refName = 'segmentMenuItem'
    return (
      <div className="segment-content-item" id={refName + this.props.itemIndex}>
        {this.props.children}
      </div>
    )
  }

}

