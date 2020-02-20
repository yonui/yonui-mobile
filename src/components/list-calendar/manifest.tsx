import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'
const now = new Date()
const manifest: ComponentManifest = {
  name: 'ListCalendar',
  uiTable: UITable.BillItemBase,
  label: '列表项日历',
  description: '',
  type: 'DataEntry',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '日历选择',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标签'
      }
    },
    {
      name: 'enterDirection',
      type: FieldTypes.string,
      defaultValue: 'vertical',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'horizontal', text: '水平' },
            { value: 'vertical', text: '垂直' }
          ]
        },
        label: '入场方向'
      }
    },
    {
      name: 'pickTime',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否选择时间'
      }
    },
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-calendar',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式前缀'
      }
    },
    {
      name: 'showShortcut',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '快捷日期选择'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'header title'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'one',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'one', text: '单日' },
            { value: 'range', text: '日期区间' }
          ]
        },
        label: '选择类型'
      }
    },
    {
      name: 'format',
      type: FieldTypes.string,
      defaultValue: 'yyyy-MM-dd',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '设置日期格式'
      }
    },
    {
      name: 'defaultDate',
      type: FieldTypes.date,
      defaultValue: new Date(),
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '显示开始日期'
      }
    },
    {
      name: 'infiniteOpt',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '无限滚动优化'
      }
    },
    {
      name: 'initalMonths',
      type: FieldTypes.number,
      defaultValue: 6,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '初始化月个数'
      }
    },
    {
      name: 'value',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([new Date(+now - 86400000), new Date(+now - 345600000)]),
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
      name: 'required',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '必填'
      }
    },
    {
      name: 'arrow',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示箭头'
      }
    },
    {
      name: 'rowSize',
      type: FieldTypes.string,
      defaultValue: 'normal',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'normal', text: '正常' },
            { value: 'xl', text: '大' }
          ]
        },
        label: '行大小'
      }
    },
    {
      name: 'defaultTimeValue',
      type: FieldTypes.date,
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '默认时间选择值'
      }
    },
    {
      name: 'onCancel',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'cancel回调'
      }
    },
    {
      name: 'onConfirm',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'confirm回调'
      }
    },
    {
      name: 'onSelect',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'select回调'
      }
    }
  ],
  children: []
}
export {
  manifest,
  ReactWrapper
}
