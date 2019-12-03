import React from 'react'
import { SearchBar } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { SearchBarProps } from 'antd-mobile/lib/search-bar'
/**
 * todo
 * maxLength
 */
const manifest: ComponentManifest = {
  name: 'SearchBar',
  label: '搜索栏',
  props: [
    {
      name: 'value',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '值'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '初始默认值'
      }
    },
    {
      name: 'placeholder',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '背景提示'
      }
    },
    {
      name: 'cancelText',
      type: FieldTypes.string,
      defaultValue: '取消',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '取消按钮文字'
      }
    },
    {
      name: 'maxLength',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最多输入字符数'
      }
    },
    {
      name: 'showCancelButton',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示取消按钮'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否禁用'
      }
    },
    {
      name: 'onClear',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击 clear 图标触发'
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
        label: 'change方法'
      }
    },
    {
      name: 'onSubmit',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'blur回调'
      }
    },
    {
      name: 'onFocus',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'focus回调'
      }
    },
    {
      name: 'onBlur',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'blur回调'
      }
    },
    {
      name: 'onCancel',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '取消触发'
      }
    }
  ]
}
export default class SearchBarComponent implements Component<SearchBarProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <SearchBar {...props}/>)
}
