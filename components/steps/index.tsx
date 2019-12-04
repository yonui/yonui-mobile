import React from 'react'
import { Steps } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { StepsProps } from 'antd-mobile/lib/steps'
const manifest: ComponentManifest = {
  name: 'Steps',
  label: '步骤条',
  type: 'DataDisplay',
  props: [
    {
      name: 'current',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        label: '当前步骤',
        type: EditTypes.Number,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '尺寸',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'status',
      type: FieldTypes.string,
      defaultValue: 'process',
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
      name: 'direction',
      type: FieldTypes.string,
      defaultValue: 'vertical',
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {
          options: [
            { value: 'horizontal', text: '水平' },
            { value: 'vertical', text: '垂直' }
          ]
        },
        label: '方向'
      }
    }
  ],
  children: ['Step']
}
export default class StepsComponent implements Component<StepsProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Steps {...props}>{props.children}</Steps>), { manifest })
}
