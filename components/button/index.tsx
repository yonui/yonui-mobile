import React from 'react';
import { Button } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes } from '@metaui/extension';
interface ButtonProps {
    name: string
    type: 'primary' | 'ghost' | 'warning'
    size: 'large' | 'small'
    activeStyle : object //没配置
    activeClassName: string
    disabled: boolean
    onClick: (e: object) => void//没配置
    style: object //没配置
    inline: boolean
    loading: boolean
    icon: string
    prefixCls: string
    className: string
} 
export class ButtonComponent implements Component<ButtonProps>  {
    manifest = {
      name: 'Button',//自定义组件名称
      label: '按钮',//自定义组件文本
      description: '',//描述
      props: [
        {
          name: 'name',
          type: FieldTypes.string,
          defaultValue: '按钮',
          showDesign: true,
          designConfig: {
            type: EditTypes.Icon,
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
                { value: "primary", text: '主按钮' },
                { value: "ghost", text: '透明' },
                { value: "warning", text: '警告红' }
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
                { value: "large", text: '大' },
                { value: "small", text: '小' }
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
              label: '设置禁用',
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
            defaultValue: '',
            showDesign: true,
            designConfig: {
              type: EditTypes.Icon,
              isRequired: true,
              props: {},
              label: '图标',
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
      children: [],//可放置哪些子组件,暂时只支持数组,不支持方法
      parent: []
    }
  render = (props:any) => <Button {...props}>{props.name}</Button>
}