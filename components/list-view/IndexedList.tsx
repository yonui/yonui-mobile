import React from 'react'
import { ListView } from 'antd-mobile'
import { MIndexedListProps } from 'antd-mobile/lib/list-view/Indexed'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

const IndexedList = ListView.IndexedList
// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'ListView', // 自定义组件名称
  label: '长列表', // 自定义组件文本
  description: '适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。', // 描述
  props: [
    {
      name: 'quickSearchBarTop',
      type: FieldTypes.object,
      defaultValue: { value: '#', label: '#' },
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回到顶部',
        help: '快捷导航栏最顶部按钮、常用于回到顶部'
      }
    },
    {
      name: 'quickSearchBarStyle',
      type: FieldTypes.object,
      defaultValue: {},
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'style',
        help: 'quickSearchBar 的 style'
      }
    },
    {
      name: 'onQuickSearch',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '导航切换',
        help: '快捷导航切换时调用'
      }
    },
    {
      name: 'showQuickSearchIndicator',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否启用搜索',
        help: 'whether show quick search indicator'
      }
    },
    {
      name: 'delayTime',
      type: FieldTypes.number,
      defaultValue: 100,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '延迟时间',
        help: '延迟渲染时间设置（用于首屏优化，一开始渲染initialListSize数量的数据，在此时间后、延迟渲染剩余的数据项、即totalRowCount - initialListSize）'
      }
    },
    {
      name: 'delayActivityIndicator',
      type: FieldTypes.child,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'loading',
        help: '延迟渲染的 loading 指示器'
      }
    }
  ],
  children: []

}
export default class MetaIndexedList implements Component<MIndexedListProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <IndexedList {...props}></IndexedList>)
}
