import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
const now = new Date()
const manifest: ComponentManifest = {
  name: 'CalendarPanel',
  label: '日历面板',
  uiTable: UITable.BillItemBase,
  description: '',
  type: 'DataEntry',
  props: [
    {
      name: 'selectRange',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '选择日期范围'
      }
    },
    {
      name: 'value',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([new Date(+now - 345600000), new Date(+now - 86400000)]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '日期选择的值'
      }
    },
    {
      name: 'minDate',
      type: FieldTypes.date,
      defaultValue: new Date(2000, 1, 1, 0, 0, 0),
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '最小日期'
      }
    },
    {
      name: 'maxDate',
      type: FieldTypes.date,
      defaultValue: new Date(2030, 1, 1, 23, 59, 59),
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '最大日期'
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
        label: '改变的回调'
      }
    },
    {
      name: 'tileDisabled',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '禁用某一天的函数',
        help: '传递函数以确定某一天是否应显示为已禁用'
      }
    }
  ]
}
export default manifest
