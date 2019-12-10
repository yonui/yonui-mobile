import * as React from 'react'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { Progress } from 'antd-mobile'
import './index.less'
const manifest: ComponentManifest = {
  name: 'Progress',
  label: '进度条',
  description: '进度条',
  type: 'Feedback',
  props: [{
    name: 'percent',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 50,
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
      type: EditTypes.Select,
      label: '进度条的位置',
      props: {
        options: [
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
    defaultValue: JSON.stringify({}),
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
    defaultValue: JSON.stringify({}),
    showDesign: true,
    designConfig: {
      type: EditTypes.Json,
      label: '进度样式',
      props: {}
    }
  }]
}

export default ReactWrapper((props: any) => (<Progress {...props} />), manifest)
