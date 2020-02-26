import React, { Component } from 'react'
import { SegmentedControl, Icon } from 'antd-mobile'
import Card from '../card'

export interface SegmentedControlProps {
  prefixCls?: string
  onClick?: (value: string) => void
}

export default class SegmentedControlComponent extends Component<SegmentedControlProps, any> {
  static defaultProps = {
      className: 'mdf-segment',
  }
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 0,
      offsetH: 0
    }
  }
  onChange = (e: React.ChangeEvent) => {
    let offset = 0
    const length: number = e.nativeEvent.selectedSegmentIndex
    for (let i = 0; i < length; i++) {
      let aa: any = document.getElementById("amCard" + i)
      offset = offset + aa.offsetHeight + 12.5
    }
    this.setState({
      selectedIndex: length,
      offsetH: offset
    })
  }
  render () {
    const data: any = this.props.data
    const values = data.map(v => {
      return v.label
    })
    const refName = 'amCard'
    const children = data.map(v => {
      return v.children
    })
    return (
      <div>
        <SegmentedControl
          onChange={this.onChange}
          selectedIndex={this.state.selectedIndex}
          className={this.props.className}
          values={values}>
        </SegmentedControl>
        <div class="segment-body">
          <div class="segment-content" style={{transform: [`translateY(-${this.state.offsetH}px)`]}}>
            {children.map((v, i)=> (
              <div class="segment-content-item" id={refName + i}>
                <Card
                  ref={refName + i}
                  full={v.full}
                  showHeader={v.showHeader}
                  headerTitle={v.title}
                  headerThumb={v.headerThumb}
                  showFooter={v.showFooter}
                  content={v.content}>
                </Card>
              </div>))}
          </div>
        </div>
      </div>
    )
  }

}

