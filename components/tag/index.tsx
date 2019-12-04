import React from 'react'
import { Tag } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { TagProps } from 'antd-mobile/lib/tag'
const manifest: ComponentManifest = {
  name: 'Tag',
  label: '标签',
  type: 'DataDisplay',
  props: [
    {
      name: 'small',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '小号标签',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否不可用',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'closable',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否关闭',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'selected',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否默认选中',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '切换选中回调函数'
      }
    },
    {
      name: 'onClose',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '点关闭时的回调函数'
      }
    },
    {
      name: 'afterClose',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '关闭后的回调'
      }
    }
  ]
}
export default class TagComponent implements Component<TagProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Tag {...props}/>), { manifest })
}
