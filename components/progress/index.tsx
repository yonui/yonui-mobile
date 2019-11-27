import * as React from 'react'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { Progress } from 'antd-mobile'

const manifest: ComponentManifest = {
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

export default class MetaProgress implements Component {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Progress {...props} />))
}
