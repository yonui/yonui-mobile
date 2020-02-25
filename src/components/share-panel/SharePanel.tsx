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
  }
  onChange = (e: React.ChangeEvent) => {
    const aa: any = document.getElementById("amCard0")
    console.log(e.nativeEvent, 44, aa.offsetHeight, this.refs.amCard0);
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
          className={this.props.className}
          values={values}>
        </SegmentedControl>
        {children.map((v, i)=> (
          <div id={refName + i}>
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
    )
  }

}

