import { FieldTypes, EditTypes, ReactWrapper, UITable } from 'libraui-extension'


// todo 未配置 onChange
const manifestRaidoItem = {
  name: 'RadioItem',
  label: '单选项',
  description: '',
  type: 'DataEntry',
  uiTable:UITable.BillItemBase,
  props: [
    {
      name: 'name',
      type: FieldTypes.child,
      defaultValue: '选项1',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
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
        label: '是否选中'
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
        label: 'onChange'
      }
    }
  ],
  children: []
}

export {manifestRaidoItem,ReactWrapper}