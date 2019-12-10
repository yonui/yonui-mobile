import * as React from 'react'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { SwipeAction } from 'antd-mobile'

const manifest: ComponentManifest = {
  name: 'SwipeAction',
  label: '滑动操作',
  description: '滑动操作',
  type: 'Gesture',
  props: [{
    name: 'style',
    type: FieldTypes.object,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Json,
      label: 'swipeout 样式',
      props: {}
    }
  },
  {
    name: 'left',
    type: FieldTypes.array,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Json,
      label: '左侧按钮组',
      props: {}
    }
  },
  {
    name: 'right',
    type: FieldTypes.array,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Json,
      label: '右侧按钮组',
      props: {}
    }
  },
  {
    name: 'autoClose',
    type: FieldTypes.boolean,
    showDesign: true,
    defaultValue: false,
    designConfig: {
      isRequired: false,
      type: EditTypes.Bool,
      label: '点击按钮后自动隐藏按钮',
      props: {}
    }
  },
  {
    name: 'onOpen',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Text,
      label: '打开时回调函数',
      props: {}
    }
  },
  {
    name: 'disabled',
    type: FieldTypes.boolean,
    defaultValue: false,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Bool,
      label: '禁用 swipeout',
      props: {}
    }
  },
  {
    name: 'onClose',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      isRequired: false,
      type: EditTypes.Text,
      label: '关闭时回调函数',
      props: {}
    }
  }]
}

export default ReactWrapper((props: any) => (<SwipeAction {...props} />), manifest)
