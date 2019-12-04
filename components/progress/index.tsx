import * as React from 'react'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { Progress } from 'antd-mobile'
import { ProgressProps } from 'antd-mobile/lib/progress'
const manifest: ComponentManifest = {
  name: 'Progress',
  label: '进度条',
  description: '进度条',
  type: 'Feedback',
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
  },
  {
    name: 'position',
    type: FieldTypes.string,
    showDesign: true,
    defaultValue: 'fixed',
    designConfig: {
      type: EditTypes.Number,
      label: '进度条的位置',
      props: {
        option: [
          { value: 'fixed', text: '最顶层' },
          { value: 'normal', text: '普通' }
        ]
      }
    }
  },
  {
    name: 'unfilled',
    type: FieldTypes.boolean,
    showDesign: true,
    defaultValue: true,
    designConfig: {
      type: EditTypes.Bool,
      label: '是否显示未填充的轨道',
      props: {}
    }
  },
  {
    name: 'style',
    type: FieldTypes.object,
    showDesign: true,
    designConfig: {
      type: EditTypes.Json,
      label: '进度条样式',
      props: {}
    }
  },
  {
    name: 'barStyle',
    type: FieldTypes.object,
    showDesign: true,
    designConfig: {
      type: EditTypes.Json,
      label: '进度样式',
      props: {}
    }
  }]
}

export default class MetaProgress implements Component<ProgressProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Progress {...props} />))
}
