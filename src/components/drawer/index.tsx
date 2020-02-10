import * as React from 'react'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Drawer, List } from 'antd-mobile'
const manifest: ComponentManifest = {
  name: 'Drawer',
  label: '抽屉',
  description: '用于在屏幕边缘显示应用导航等内容的面板。', // 描述
  type: 'Navigation',
  props: [// adapter适配层数据
    {
      name: 'sidebar',
      type: FieldTypes.child, // 备注 需要修改成child
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        props: {},
        label: '内容',
        help: '抽屉里的内容'
      }
    },
    {
      name: 'open',
      type: FieldTypes.boolean,
      defaultValue: true,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '开关状态',
        help: '开关状态'
      }
    },
    {
      name: 'position',
      type: FieldTypes.string,
      defaultValue: 'left',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'left', text: 'left' },
              { value: 'right', text: 'right' },
              { value: 'top', text: 'top' },
              { value: 'bottom', text: 'bottom' }
            ]
        },
        label: '抽屉位置',
        help: '抽屉所在位置'
      }
    },
    {
      name: 'touch',
      type: FieldTypes.boolean,
      defaultValue: true,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '开启触摸',
        help: '是否开启触摸手势'
      }
    },
    {
      name: 'transitions',
      type: FieldTypes.boolean,
      defaultValue: true,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '开启动画',
        help: '是否开启动画'
      }
    },
    {
      name: 'docked',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '嵌入文档流',
        help: '是否嵌入到正常文档流里'
      }
    },
    {
      name: 'enableDragHandle',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '嵌入文档流',
        help: '是否嵌入到正常文档流里'
      }
    },
    {
      name: 'dragToggleDistance',
      type: FieldTypes.number,
      defaultValue: 30,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '拖动距离',
        help: '打开关闭抽屉时距 sidebar 的拖动距离'
      }
    },
    {
      name: 'sidebarStyle',
      type: FieldTypes.object,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'sidebarStyle',
        help: 'sidebarStyle'
      }
    },
    {
      name: 'contentStyle',
      type: FieldTypes.object,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'contentStyle',
        help: 'contentStyle'
      }
    },
    {
      name: 'overlayStyle',
      type: FieldTypes.object,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'overlayStyle',
        help: 'overlayStyle'
      }
    },
    {
      name: 'dragHandleStyle',
      type: FieldTypes.object,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'dragHandleStyle',
        help: 'dragHandleStyle'
      }
    },
    {
      name: 'onOpenChange',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '状态切换',
        help: 'open 状态切换时调用'
      }
    }
  ],
  children: []
}

// 这边需要做的处理：需要生成sidebar然后传给<Drawer></Drawer>
export default ReactWrapper((props: any) => (<Drawer {...props} style={{ minHeight: document.documentElement.clientHeight }} sidebar={<List><List.Item thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" multipleLine >Category</List.Item></List>}></Drawer>), manifest)
