/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { DefaultTabBar } from 'antd-mobile/lib/tabs'
import TabsProps from 'antd-mobile/lib/tabs/PropsType'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'DefaultTabBar',
  label: 'DefaultTabBar',
  description: '用于让用户在不同的视图中进行切换。',
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
      name: 'tabs',
      type: FieldTypes.array,
      defaultValue: [],
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'tab数据',
        help: 'tab数据'
      }
    },
    {
      name: 'page',
      type: FieldTypes.number,
      defaultValue: 3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'Tab分页尺寸',
        help: 'Tab分页尺寸'
      }
    },
    {
      name: 'activeTab',
      type: FieldTypes.number,
      defaultValue: -1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '当前tab',
        help: '当前激活Tab索引'
      }
    },
    {
      name: 'animated',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '开启动画',
        help: '是否开启切换动画'
      }
    },
    {
      name: 'onTabClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'tab点击回调',
        help: 'tab 被点击的回调'
      }
    },
    {
      name: 'renderTab',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '替换TabBar的Tab',
        help: '替换TabBar的Tab'
      }
    },
    {
      name: 'goToTab',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '跳转tab',
        help: '跳转tab'
      }
    }
  ],
  children: []
}
export default class MetaDefaultTabBar implements Component<TabsProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <DefaultTabBar {...props} />)
}
