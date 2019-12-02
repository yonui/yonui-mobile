import React from 'react'
import { TextareaItem } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { TextareaItemProps } from 'antd-mobile/lib/textarea-item'
/**
 * todo
 * error  autoHeight labelNumber name prefixListCls title rows count
 */
const manifest: ComponentManifest = {
  name: 'TextareaItem',
  label: '多行输入',
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
      name: 'editable',
      type: FieldTypes.boolean,
      showDesign: true,
      defaultValue: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否可编辑'
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
      name: 'clear',
      type: FieldTypes.boolean,
      showDesign: true,
      defaultValue: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否带清除功能'
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
      name: 'onErrorClick',
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
    }

  ]
}
export default class TextareaItemComponent implements Component<TextareaItemProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <TextareaItem {...props}/>)
}
