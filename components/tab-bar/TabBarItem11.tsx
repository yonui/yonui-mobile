/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { TabBar } from 'antd-mobile'
import { AntTabbarProps } from 'antd-mobile/lib/tab-bar'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
var TabBarItem = TabBar.Item
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'TabBarItem',
  label: '标签栏Item',
  description: '位于 APP 底部，方便用户在不同功能模块之间进行快速切换。',
  props: [
    {
      name: 'badge',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '徽标数'
      }
    },
    {
      name: 'dot',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示红点',
        help: '是否在右上角显示小红点（在设置badge的情况下失效）'
      }
    },
    {
      name: 'selected',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否选中',
        help: '是否选中'
      }
    },
    {
      name: 'barTintColor',
      type: FieldTypes.string,
      defaultValue: 'white',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '背景色',
        help: 'tabbar 背景色'
      }
    },
    {
      name: 'Icon',
      type: FieldTypes.child,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '默认展示图片',
        help: '默认展示图片'
      }
    },
    {
      name: 'selectedIcon',
      type: FieldTypes.child,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中后展示图片',
        help: '选中后展示图片'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题',
        help: '标题'
      }
    },
    {
      name: 'key',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '唯一标识',
        help: '唯一标识'
      }
    },
    {
      name: 'onPress',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击回调',
        help: 'bar 点击触发，需要自己改变组件 state & selecte={true}'
      }
    }
  ],
  children: ['ListView', 'Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']
}
export default class MetaTabBarItem implements Component<AntTabbarProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <TabBarItem {...props}></TabBarItem>)
}
