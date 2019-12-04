import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Pagination } from 'antd-mobile'
import { PaginationPropsType } from 'antd-mobile/lib/pagination/PropsType'
const manifest: ComponentManifest = {
  name: 'Pagination',
  label: '分页',
  description: '在一个临时的面板上显示一组操作', // 描述
  type: 'Navigation',
  props: [// adapter适配层数据
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'button',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'button', text: 'button' },
              { value: 'number', text: 'number' },
              { value: 'pointer', text: 'pointer' }
            ]
        },
        label: '形态',
        help: '形态'
      }
    },
    {
      name: 'current',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: 1,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '当前页号',
        help: '当前页号'
      }
    },
    {
      name: 'total',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: 0,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '数据总数',
        help: '数据总数'
      }
    },
    {
      name: 'simple',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '隐藏数值',
        help: '是否隐藏数值'
      }
    }, {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '禁用',
        help: '禁用状态'
      }
    },
    {
      name: 'local',
      type: FieldTypes.object,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '国际化',
        help: '国际化'
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
    }
  ],
  children: []
}

// 这边需要做的处理：需要生成sidebar然后传给<Pagination></Pagination>
export default class MetaPagination implements Component<PaginationPropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Pagination {...props}></Pagination>), { manifest })
}
