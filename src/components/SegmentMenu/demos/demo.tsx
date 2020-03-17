/**
 * @name: SegmentedControl
 * @description: 分段菜单
 */
import React, { Component } from 'react'
import SegmentMenu from '../index'
import SegmentMenuItem from '../../SegmentMenuItem'
import Card from '../../Card'
import '../style'
import './demo.less'

const data = [
  { title: '智能推荐' },
  { title: '采购订单' },
  { title: '采购分析' },
  { title: '固定考勤' }
]
export default class Demo1 extends Component {
  render () {
    return (
      <SegmentMenu>
        {data.map((v: any, i: any) => (
          <SegmentMenuItem
            data={v}
            title={v.title}
            itemIndex={i}>
            <Card
              headerTitle={v.title}>
            </Card>
            {/* <WidteSpace></WidteSpace> */}
          </SegmentMenuItem>
        ))}
      </SegmentMenu>
    )
  }
}
