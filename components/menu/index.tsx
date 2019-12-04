import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Menu } from 'antd-mobile'
import { MenuProps } from 'antd-mobile/lib/menu/PropsType'
const manifest: ComponentManifest = {
  name: 'Menu',
  label: '菜单',
  description: '在一个临时的面板上显示一组操作', // 描述
  type: 'Navigation',
  props: [// adapter适配层数据
    {
      name: 'level',
      type: FieldTypes.number,
      defaultValue: 2,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 1, text: 1 },
              { value: 2, text: 2 }
            ]
        },
        label: '菜单级数',
        help: '菜单级数'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '数据',
        help: '数据，设置后 children 无效'
      }
    },
    {
      name: 'value',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '初始值',
        help: '初始值，一级和二级筛选数据的value组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项'
      }
    },
    {
      name: 'height',
      type: FieldTypes.number,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '确认按钮回调',
        help: '多选状态下确认按钮回调'
      }
    }, {
      name: 'multiSelect',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '多选',
        help: '是否支持菜单多选'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '选择回调',
        help: '选择后的回调函数'
      }
    },
    {
      name: 'onOk',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '确认按钮回调',
        help: '多选状态下确认按钮回调'
      }
    },
    {
      name: 'onCancel',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '取消按钮回调',
        help: '多选状态下取消按钮回调'
      }
    }
  ],
  children: []
}

// 这边需要做的处理：需要生成sidebar然后传给<Menu></Menu>
export default class MetaMenu implements Component<MenuProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Menu {...props}>{props.children}</Menu>))
}
