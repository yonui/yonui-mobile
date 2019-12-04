import React from 'react'
import { Steps } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { StepsProps } from 'antd-mobile/lib/steps'
const manifest: ComponentManifest = {
  name: 'Step',
  label: '步骤项',
  type: 'DataDisplay',
  props: [
    {
      name: 'status',
      type: FieldTypes.string,
      defaultValue: 'wait',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'wait', text: '等待' },
            { value: 'process', text: '进行中' },
            { value: 'finish', text: '结束' },
            { value: 'error', text: '错误' }
          ]
        },
        label: '当前步骤的状态'
      }
    },
    {
      name: 'title',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'description',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '步骤的详情描述'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child || FieldTypes.object,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '步骤图标'
      }
    }
  ]
}
export default class StepComponent implements Component<StepsProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Steps.Step {...props}/>), { manifest })
}
