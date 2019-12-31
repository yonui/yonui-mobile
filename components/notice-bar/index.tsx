import React from 'react'
import { NoticeBar } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
const manifest: ComponentManifest = {
  name: 'NoticeBar',
  label: '通告栏',
  type: 'DataDisplay',
  props: [
    {
      name: 'content',
      type: FieldTypes.child,
      defaultValue: ' Notice: Auld lang syneAuld lang syneAuld lang syneAuld lang syneAuld lang syne',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '内容区'
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
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
      defaultValue: 'icon',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '图标，在左侧展示'
      }
    },
    {
      name: 'marqueeProps',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({ loop: true, style: { padding: '0 7.5px' } }),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: 'marquee',
        help: 'marqueeProps参数'
      }
    },
    {
      name: 'action',
      type: FieldTypes.child,
      defaultValue: 'action',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '右侧',
        help: '用于替换操作 icon 的文案，在右侧展示'
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
        label: 'onClick',
        help: '点击关闭或者操作区域的回调函数'
      }
    }
  ]
}

export default ReactWrapper((props: any) => <NoticeBar {...props}>{props.content || props.children}</NoticeBar>, manifest)
