import React, { Component } from 'react'
import { SegmentedControl } from 'antd-mobile'
import Card from '../card'

export interface SegmentedControlProps {
  data?: any
  prefixCls?: string
  onClick?: (value: string) => void
  className?: string
}

export default class SegmentedControlComponent extends Component<SegmentedControlProps, any> {
  static defaultProps = {
    className: 'mdf-segment'
  }

  onChange = (e: React.ChangeEvent) => {
    const aa: any = document.getElementById('amCard0')
    // eslint-disable-next-line react/no-string-refs
    console.log(e.nativeEvent, 44, aa.offsetHeight, this.refs.amCard0)
  }

  render () {
    const data: any = this.props.data
    const values = data.map((v: any) => {
      return v.label
    })
    const refName = 'amCard'
    const children = data.map((v: any) => {
      return v.children
    })
    return (
      <div>
        <SegmentedControl
          onChange={this.onChange}
          className={this.props.className}
          values={values}>
        </SegmentedControl>
        {children.map((v: any, i: number) => (
          <div id={`${refName}${i}`} key={i}>
            <Card
              ref={`${refName}${i}`}
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
