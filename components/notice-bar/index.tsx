import React from 'react'
import { NoticeBar } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { NoticeWebProps } from 'antd-mobile/lib/notice-bar'
const manifest: ComponentManifest = {
  name: 'NoticeBar',
  label: '通告栏',
  type: 'DataDisplay',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          option: [
            { value: 'closable', text: '关闭' },
            { value: 'link', text: '链接' }
          ]
        },
        label: '提示类型'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '图标'
      }
    },
    {
      name: 'marqueeProps',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: 'marquee 参数'
      }
    },
    {
      name: 'action',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '用于替换操作 icon 的文案'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击关闭或者操作区域的回调函数'
      }
    }
  ]
}
export default class NoticeBarComponent implements Component<NoticeWebProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <NoticeBar {...props}/>)
}
