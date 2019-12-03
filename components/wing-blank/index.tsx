import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

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
      defaultValue: 'lg',
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
        label: '两翼留白',
        help: '两翼留白的间距'
      }
    }
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']// 可放置哪些子组件,暂时只支持数组,不支持方法
}

export default class MetaWingBlank implements Component<WingBlankProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<WingBlank {...props}>{props.children}</WingBlank>))
}
