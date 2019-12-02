import React from 'react'
import { Picker } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { PickerPropsType } from 'antd-mobile/lib/picker/PropsType'
/**
 * todo
 * itemStyle indicatorStyle children
 */
const manifest: ComponentManifest = {
  name: 'Picker ',
  label: '日期选择',
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '数据源'
      }
    },
    {
      name: 'value',
      type: FieldTypes.array,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '值'
      }
    },
    {
      name: 'format',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '格式化选中目标的函数'
      }
    },
    {
      name: 'cols',
      type: FieldTypes.number,
      defaultValue: 3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '列数'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中后的回调'
      }
    },
    {
      name: 'onPickerChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '数据选择变化后的回调函数'
      }
    },
    {
      name: 'onVisibleChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '显隐状态变化时回调函数'
      }
    },
    {
      name: 'okText',
      type: FieldTypes.string,
      defaultValue: '确认',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中的文案'
      }
    },
    {
      name: 'dismissText',
      type: FieldTypes.string,
      defaultValue: '取消',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '取消选中的文案'
      }
    },
    {
      name: 'onOk',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中回调'
      }
    },
    {
      name: 'onDismiss',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '取消回调'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '确认',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '大标题'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.string,
      defaultValue: '请选择',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '提示信息'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否禁用'
      }
    },
    {
      name: 'cascade',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否联动'
      }
    }

  ]
}
export default class PickerComponent implements Component<PickerPropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Picker {...props}/>)
}
