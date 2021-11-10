import { ComponentManifest, TypeProps, UIObject, FieldTypes, EditTypes } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Stepper',
  label: '数量选择',
  type: TypeProps.FunctionalControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'stepType',
      type: FieldTypes.string,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 1, text: '整数' },
            { value: 0, text: '数值' }
          ]
        },
        label: '元数据字段'
      }
    },
    {
      name: 'max',
      type: FieldTypes.number,
      defaultValue: 100,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '最大值',
        help: '最大值'
      }
    },
    {
      name: 'min',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '最小值',
        help: '最小值'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.number,
      defaultValue: 0,
      designConfig: {
        type: EditTypes.Number,
        label: '默认值',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'step',
      type: FieldTypes.number,
      showDesign: true,
      defaultValue: 1,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        label: '步长',
        props: {}
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
        label: '禁用'
      }
    },
  ],
  children: [],
  events: [
    {
      name: 'onChange',
      des: '值改变'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onChange'] }],
  ]
}

export default manifest
