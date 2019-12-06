import React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import Label, { LabelProps } from './Label'
// todo
const manifest: ComponentManifest = {
  name: 'Label',
  label: '文本',
  type: 'DataDisplay',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '文本',
      showDesign: true,
      designConfig: {
        label: '文本内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'normal',
      showDesign: true,
      designConfig: {
        label: '文本大小',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '小', value: 'small' },
            { text: '正常', value: 'normal' },
            { text: '大', value: 'large' }
          ]
        }
      }
    },
    {
      name: 'style',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        label: '自定义样式',
        type: EditTypes.Json,
        isRequired: false,
        props: {}
      }
    }
  ]
}
export default class LabelComponent implements Component<LabelProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Label {...props}/>), { manifest })
}
