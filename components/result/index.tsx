import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Result } from 'antd-mobile'
import { ResultProps } from 'antd-mobile/lib/result'
const manifest: ComponentManifest = {
  name: 'Result',
  label: '结果页',
  description: '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。', // 描述
  type: 'Combination',
  props: [// adapter适配层数据
    {
      name: 'imgUrl',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '插图url',
        help: '插图url'
      }
    },

    {
      name: 'img',
      type: FieldTypes.child,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '插图元素',
        help: '插图元素 (可以为<img src="" />/<Icon type="" />等), 会覆盖 imgUrl 设置'
      }
    },

    {
      name: 'title',
      type: FieldTypes.child,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'title',
        help: 'title文案'
      }
    },

    {
      name: 'message',
      type: FieldTypes.child,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'message',
        help: 'message 文案'
      }
    },
    {
      name: 'buttonText',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '按钮文案',
        help: '按钮文案'
      }
    },
    {
      name: 'buttonType',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'button设置',
        help: '请参考 button 的配置'
      }
    },
    {
      name: 'onButtonClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮回调',
        help: '按钮回调函数'
      }
    }
  ],
  children: []
}

export default class MetaResult implements Component<ResultProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Result {...props}>{props.children}</Result>))
}
