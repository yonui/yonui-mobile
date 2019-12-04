/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Radio } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { RadioProps } from 'antd-mobile/lib/radio/Radio'
import * as styles from './index.less'
// todo
const manifest: ComponentManifest = {
  name: 'Radio',
  label: '单选框',
  description: '',
  type: 'DataEntry',
  props: [
    {
      name: 'name',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '名称'
      }
    },
    {
      name: 'defaultChecked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '初始是否选中'
      }
    },
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '指定当前是否选中'
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
        label: '是否禁用'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '改变回调'
      }
    }
  ],
  children: []
}
export default class RadioComponent implements Component<RadioProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Radio className={styles.myRadio} {...props}>{props.name}</Radio>)
}
