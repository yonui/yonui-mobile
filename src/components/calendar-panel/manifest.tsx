import { FieldTypes, EditTypes, TypeProps, ComponentManifest, UIObject } from 'yonui-extension'
const now = new Date()
const manifest: ComponentManifest = {
  name: 'CalendarPanel',
  label: '日历',
  uiObject: UIObject.Controls,
  description: '',
  type: TypeProps.FunctionalControls,
  icon: 'date',
  props: [
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
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示'
      }
    },
    {
      name: 'defaultDate',
      type: FieldTypes.date,
      defaultValue: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5),
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
      name: 'defaultValue',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([new Date(now), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '默认日历选择范围'
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
        label: '最小日期',
        help: '日历弹层的配置-最小日期'
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
        label: '最大日期',
        help: '日历弹层的配置-最大日期'
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
        type: EditTypes.Time,
        isRequired: false,
        props: {},
        label: '默认时间选择值'
      }
    },
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '#E14C46',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        props: {},
        label: '颜色'
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
export default manifest
