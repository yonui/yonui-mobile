import * as React from 'react'
import { Component, FieldTypes, EditTypes } from '@metaui/extension'
import { Progress } from 'antd-mobile'
export default class MetaProgress implements Component {
  manifest = {
    name: 'Progress',
    label: '进度条',
    description: '进度条',
    props: [{
      name: 'percent',
      type: FieldTypes.number,
      showDesign: true,
      defaultValue: 0,
      designConfig: {
        type: EditTypes.Number,
        label: '百分比',
        props: {}
      }
      // TODO: 添加其它属性
    }]
  }

  render = (props: any) => (<Progress {...props} />)
}
