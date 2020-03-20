/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import { Stepper } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'Stepper',
  label: '步进器',
  description: '',
  type: 'basicControls',
  props: [
    {
      name: 'min',
      type: FieldTypes.number,
      defaultValue: -Infinity,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最小值'
      }
    },
    {
      name: 'max',
      type: FieldTypes.number,
      defaultValue: Infinity,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最大值'
      }
    },
    {
      name: 'value',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '当前值'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '初始值'
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
      name: 'readOnly',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '只读'
      }
    },
    {
      name: 'showNumber',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否显示数值'
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
        label: '是否显示数值'
      }
    }
  ],
  children: []
}

export default ReactWrapper(Stepper, manifest)
