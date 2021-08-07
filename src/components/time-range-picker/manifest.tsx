import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'TimeRangePicker',
  uiObject: UIObject.Controls,
  label: '日期时间范围',
  description: '',
  type: 'basicControls',
  icon: 'date',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'time',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'date', text: '日期' },
            { value: 'time', text: '时间' },
            { value: 'datetime', text: '日期+时间' },
            { value: 'year', text: '年' },
            { value: 'month', text: '月' }
          ]
        },
        label: '选择的类型'
      }
    },
    {
      name: 'minuteStep',
      type: FieldTypes.number,
      defaultValue: 5,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '分钟数递增步长设置'
      }
    },
    {
      name: 'startTime',
      type: FieldTypes.string,
      defaultValue: undefined,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '开始时间'
      }
    },
    {
      name: 'endTime',
      type: FieldTypes.string,
      defaultValue: undefined,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '结束时间'
      }
    }
  ],
  extension: [
    ExtensionProps.bIsNull,
    ExtensionProps.disabled,
    // ExtensionProps.singleLine,
    // ExtensionProps.splitLine,
    ExtensionProps.bMustSelect,
    ExtensionProps.formula,
    ExtensionProps.isExport,
    ExtensionProps.bCheck,
    ExtensionProps.bVmExclude,
    ExtensionProps.cStyle
  ],
  events: [
    {
      name: 'onOk',
      des: '选中回调'
    },
    {
      name: 'onDismiss',
      des: '取消回调'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onOk', 'onDismiss'] }],
  ]
}
export default manifest
