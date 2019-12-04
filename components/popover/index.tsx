/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Popover } from 'antd-mobile'
import { PopOverPropsType } from 'antd-mobile/lib/popover'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  props: [
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显隐'
      }
    },
    {
      name: 'mask',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '遮罩',
        help: '是否显示遮罩背景层'
      }
    },
    {
      name: 'placement',
      type: FieldTypes.string,
      defaultValue: 'bottomRight',
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
              { value: 'bottom', text: 'bottom' },
              { value: 'topLeft', text: 'topLeft' },
              { value: 'topRight', text: 'topRight' },
              { value: 'bottomLeft', text: 'bottomLeft' },
              { value: 'bottomRight', text: 'bottomRight' }
            ]
        },
        label: '位置'
      }
    },
    {
      name: 'overlay',
      type: FieldTypes.child,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '内容',
        help: '弹出层内容'
      }
    },
    {
      name: 'onVisibleChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '显隐回调函数',
        help: '当显隐状态变化时回调函数'
      }
    },
    {
      name: 'onSelect',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中回调函数'
      }
    }
  ],
  children: ['Icon']
}
export default class MetaPopover implements Component<PopOverPropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Popover {...props}> {props.children} </Popover>)
}
