import React from 'react'
import { TextareaItem } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { TextareaItemProps } from 'antd-mobile/lib/textarea-item'
/**
 * todo
 * error labelNumber  prefixListCls
 */
const manifest: ComponentManifest = {
  name: 'TextareaItem',
  label: '多行输入',
  props: [
    {
      name: 'name',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'textarea 的 name'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '文案说明'
      }
    },
    {
      name: 'rows',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '显示几行'
      }
    },
    {
      name: 'count',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '计数功能'
      }
    },
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
      name: 'autoHeight',
      type: FieldTypes.boolean,
      showDesign: true,
      defaultValue: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '高度自适应',
        help: '高度自适应, autoHeight 和 rows 请二选一'
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
        label: '点击报错 icon 触发的回调'
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
