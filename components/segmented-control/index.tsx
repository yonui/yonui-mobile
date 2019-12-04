/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { SegmentedControl } from 'antd-mobile'
import { SegmentedControlProps } from 'antd-mobile/lib/segmented-control'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'SegmentedControl',
  label: '分段器',
  description: '由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。',
  type: 'Navigation',
  props: [
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-segment',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式前缀'
      }
    },
    {
      name: 'className',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式类'
      }
    },
    {
      name: 'style',
      type: FieldTypes.object,
      defaultValue: {},
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '自定义样式'
      }
    },
    {
      name: 'tintColor',
      type: FieldTypes.string,
      defaultValue: '#2DB7F5',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '组件主色调'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否禁用'
      }
    },
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '索引',
        help: '选中项在数组中的索引'
      }
    },
    {
      name: 'values',
      type: FieldTypes.array,
      defaultValue: ['test1', 'test2'],
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选项',
        help: '选项数组,值是字符串'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回调函数',
        help: '其中e.nativeEvent.selectedSegmentIndex是选中项索引, e.nativeEvent.value是选中的值'
      }
    },
    {
      name: 'onValueChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回调函数'
      }
    }
  ],
  children: []
}
export default class MetaSegmentedControl implements Component<SegmentedControlProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <SegmentedControl {...props}/>, { manifest })
}
