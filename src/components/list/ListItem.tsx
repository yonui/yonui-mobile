import React from 'react'
import { List } from 'antd-mobile'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'ListItem',
  label: '列表项',
  type: 'DataDisplay',
  props: [
    {
      name: 'thumb',
      type: FieldTypes.string,
      defaultValue: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
      showDesign: true,
      designConfig: {
        label: '缩略图',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'leftContent',
      type: FieldTypes.child,
      defaultValue: '左侧内容',
      showDesign: true,
      designConfig: {
        label: '左边内容',
        type: EditTypes.Textarea,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'extra',
      type: FieldTypes.child,
      defaultValue: '右侧内容',
      showDesign: true,
      designConfig: {
        label: '右边内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'arrow',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'horizontal', text: '右' },
            { value: 'up', text: '上' },
            { value: 'down', text: '下' }
          ]
        },
        label: '箭头方向'
      }
    },
    {
      name: 'align',
      type: FieldTypes.string,
      defaultValue: 'middle',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'top', text: '向上' },
            { value: 'middle', text: '居中' },
            { value: 'bottom', text: '向下' }
          ]
        },
        label: '箭头方向'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: '点击事件',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'error',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '报错样式',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'multipleLine',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '多行',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'wrap',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否换行',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'activeStyle',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        label: '自定义active的样式',
        type: EditTypes.Json,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'platform',
      type: FieldTypes.string,
      defaultValue: 'cross',
      showDesign: true,
      designConfig: {
        label: '平台特有样式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'android', text: '安卓' },
            { value: 'ios', text: '苹果' },
            { value: 'cross', text: '自动检测设备' }
          ]
        }
      }
    }
  ]
}

export default ReactWrapper((props: any) => (<List.Item {...props}>{props.leftContent || props.children}</List.Item>), manifest)
