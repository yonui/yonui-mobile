import React from 'react'
import { Icon } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { IconProps } from 'antd-mobile/lib/icon'
// todo
const manifest: ComponentManifest = {
  name: 'Icon',
  label: '图标',
  type: 'DataDisplay',
  props: [
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '颜色',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '内置 icon 名称',
        type: EditTypes.Icon,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'md',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'xxs', text: '最小' },
            { value: 'xs', text: '偏小' },
            { value: 'sm', text: '小' },
            { value: 'md', text: '中等' },
            { value: 'lg', text: '大' }
          ]
        },
        label: '图标大小'
      }
    }
  ]
}
export default class IconComponent implements Component<IconProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Icon {...props}/>), { manifest })
}
