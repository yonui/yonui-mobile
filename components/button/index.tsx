import React from 'react'
import { Button } from 'antd-mobile'
import { ButtonProps } from 'antd-mobile/lib/button'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
interface CustomsButtonProps extends ButtonProps {
  name: string
}
// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Button', // 自定义组件名称
  label: '按钮', // 自定义组件文本
  // description: '',//描述
  type: 'DataEntry',
  props: [
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: '按钮',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '名称'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'primary',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'primary', text: '主按钮' },
            { value: 'ghost', text: '透明' },
            { value: 'warning', text: '警告红' }
          ]
        },
        label: '按钮类型'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'large',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'large', text: '大' },
            { value: 'small', text: '小' }
          ]
        },
        label: '按钮大小'
      }
    },
    {
      name: 'activeClassName',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '点击反馈的自定义类名'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '设置禁用'
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
        label: '点击事件'
      }
    },
    {
      name: 'inline',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '行内按钮'
      }
    },
    {
      name: 'loading',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '按钮载入状态'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.string,
      defaultValue: false, // 改成false才是默认没有svg
      showDesign: true,
      designConfig: {
        type: EditTypes.Icon,
        isRequired: true,
        props: {},
        label: '图标'
      }
    },
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-button',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'class前缀'
      }
    },
    {
      name: 'className',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '样式类名'
      }
    }
  ],
  children: []

}
export default class ButtonComponent implements Component<CustomsButtonProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => {
    return <Button {...props}>{props.text}</Button>
  }, { manifest, excludeNidAndUiType: true })
}
