import React, { Component } from 'react'
import { SegmentedControl } from 'antd-mobile'

export interface SegmentMenuProps {
  selectedIndex?: number
  onClick?: (value: string) => void
}

export default class SegmentMenuComponent extends Component<SegmentMenuProps, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      selectedIndex: this.props.selectedIndex || 0,
      offsetH: 0
    }
  }

  onClick = (e: any) => {
    let offsetH = 0
    const length: number = e.nativeEvent.selectedSegmentIndex
    for (let i = 0; i < length; i++) {
      const aa: any = document.getElementById(`segmentMenuItem${i}`)
      offsetH = offsetH + Number(aa.offsetHeight)
    }
    this.setState({
      selectedIndex: length,
      offsetH: offsetH
    })
  }

  render () {
    const children: any = this.props.children
    const values = children.map((v: any) => {
      return v.props.title
    })
    return (
      <div>
        <SegmentedControl
          onChange={this.onClick}
          selectedIndex={this.state.selectedIndex}
          className="mdf-segment"
          values={values}>
        </SegmentedControl>
        <div className="segment-body">
          <div className="segment-content" style={{ transform: `translateY(-${this.state.offsetH}px)` }}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
