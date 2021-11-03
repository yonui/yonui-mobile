import { FieldTypes, EditTypes, TypeProps, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'CalendarPanel',
  label: '日历',
  uiObject: UIObject.Controls,
  description: '',
  type: TypeProps.FunctionalControls,
  icon: 'uiriqixuanze',
  props: [
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
      name: 'extra',
      type: FieldTypes.array,
      defaultValue: {},
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
        help: '传入数据'
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
