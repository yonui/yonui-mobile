import React from 'react'
import { Tag } from 'antd-mobile'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
const manifest: ComponentManifest = {
  name: 'Tag',
  label: '标签',
  type: 'DataDisplay',
  props: [
    {
      name: 'name',
      type: FieldTypes.string,
      defaultValue: '标签',
      showDesign: true,
      designConfig: {
        label: '内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
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
        label: '不可用',
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
        label: '默认选中',
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
        label: 'onChange',
        help: '切换选中回调函数'
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
        label: 'onClose',
        help: '点关闭时的回调函数'
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
        label: 'afterClose',
        help: '关闭后的回调'
      }
    }
  ]
}
export default ReactWrapper((props: any) => (<Tag {...props}>{props.name || props.children}</Tag>), manifest)
