/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Checkbox } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { CheckboxProps } from 'antd-mobile/lib/checkbox/Checkbox'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'Checkbox',
  label: '复选框',
  description: '',
  props: [
    {
      name: 'defaultChecked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '初始是否选中'
      }
    },
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '指定当前是否选中'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否禁用'
      }
    }
  ],
  children: []
}
export default class CheckboxComponent implements Component<CheckboxProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Checkbox.CheckboxItem {...props}/>)
}
