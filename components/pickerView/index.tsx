import React from 'react'
import { PickerView } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { IPickerView } from 'antd-mobile/lib/picker-view/PickerView'
/**
 * todo
 * itemStyle indicatorStyle pickerPrefixCls prefixCls
 */
const manifest: ComponentManifest = {
  name: 'PickerView ',
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
export default class PickerViewComponent implements Component<IPickerView> {
  manifest = manifest
  render = ReactWrapper((props: any) => <PickerView {...props}/>)
}
