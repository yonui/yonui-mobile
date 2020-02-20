import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'Checkbox',
  label: '复选框',
  description: '',
  type: 'DataEntry',
  uiTable:UITable.BillItemBase,
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: '', text: '默认' },
            { value: 'square', text: 'square' }
          ]
        },
        label: '类型'
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
        label: '初始选中'
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
        label: '选中'
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

const manifestCheckBoxItem: ComponentManifest = {
  name: 'CheckboxItem',
  label: '复选框',
  description: '',
  type: 'DataEntry',
  uiTable:UITable.BillItemBase,
  props: [
    {
      name: 'defaultChecked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '初始值'
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
        label: '值'
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
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onChange'
      }
    }
  ],
  children: []
}

const manifestAgreeItem: ComponentManifest = {
  name: 'AgreeItem',
  label: 'AgreeItem',
  description: '', // 描述
  type: 'DataEntry',
  uiTable:UITable.BillItemBase,
  props: [// adapter适配层数据
  ]
}
export{
  manifest,
  ReactWrapper,
  manifestCheckBoxItem,
  manifestAgreeItem
}