import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'

import { WingBlank } from 'antd-mobile'
import { WingBlankProps } from 'antd-mobile/lib/wing-blank'
const manifest: ComponentManifest = {
  name: 'WingBlank',
  label: '两翼留白',
  description: '两翼留白', // 描述
  props: [// adapter适配层数据
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'sm', text: 'sm' },
              { value: 'md', text: 'md' },
              { value: 'lg', text: 'lg' }
            ]
        },
        label: '两翼留白的间距',
        help: '两翼留白的间距'
      }
    }
  ],
  children: ['Button', 'Card', 'Progress', 'Flex']// 可放置哪些子组件,暂时只支持数组,不支持方法
}

export default class MetaWingBlank implements Component<WingBlankProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<WingBlank {...props}></WingBlank>))
}
