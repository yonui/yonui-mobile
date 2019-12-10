import React from 'react'
import { InputItem } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
/**
 * todo
 * maxLength error onErrorClick extra onExtraClick
 * onVirtualKeyboardConfirm labelNumber updatePlaceholder
 * prefixListCls name moneyKeyboardAlign moneyKeyboardWrapProps
 * moneyKeyboardHeader locale autoAdjustHeight disabledKeys
 */
const manifest: ComponentManifest = {
  name: 'InputItem',
  label: '文本输入',
  type: 'DataEntry',
  props: [
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'text',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'bankCard', text: '银行卡' },
            { value: 'phone', text: '手机号' },
            { value: 'password', text: '密码' },
            { value: 'number', text: '数字' },
            { value: 'digit', text: '原生number' },
            { value: 'money', text: '金额' },
            { value: 'text', text: '文本' }
          ]
        },
        label: '选择的类型'
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
      defaultValue: 'defaultValue',
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
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '清除功能'
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
        label: 'onChange'
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
        label: 'onBlur'
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
        label: 'onFocus'
      }
    }

  ]
}

export default ReactWrapper((props: any) => <InputItem {...props}/>, manifest)
