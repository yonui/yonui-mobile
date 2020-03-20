import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Select',
  label: '下拉枚举',
  description: '下拉枚举',
  type: 'basicControls',
  uiTable: UITable.BillItemBase,
  props: [
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: 'Title',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        label: '左侧标题',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([
        {
          value: '1',
          label: 'Food',
          disabled: true
        }, {
          value: '2',
          label: 'Supermarket'
        },
        {
          value: '3',
          label: 'Extra'
        }
      ]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        label: '数据源',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'value',
      type: FieldTypes.array,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        label: '值',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.array,
      defaultValue: JSON.stringify(['2']),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        label: '默认值',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'multiSelect',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '多选'
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
    },
    {
      name: 'onOk',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onOK'
      }
    },
    {
      name: 'onCancel',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onCancel'
      }
    }
  ]
}
export default manifest
