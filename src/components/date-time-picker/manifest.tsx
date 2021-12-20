import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps, TypeProps } from 'yonui-extension'
import { getFilterProps } from '../list-item-wrapper/manifestProps'
const manifest: ComponentManifest = {
  name: 'DateTimePicker',
  label: '时间选择',
  type: TypeProps.FormControls,
  uiObject: UIObject.Controls,
  icon: 'time',
  props: [
    {
      name: 'dateMode',
      type: FieldTypes.string,
      defaultValue: 'picker-datetime',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'picker-date', text: '选择器-日期' },
            { value: 'picker-time', text: '选择器-时间' },
            { value: 'picker-datetime', text: '选择器-日期时间' },
            { value: 'picker-year', text: '选择器-年' },
            { value: 'picker-month', text: '选择器-年月' },
            { value: 'calendar-datetime', text: '日历-日期时间' },
            { value: 'calendar-date', text: '日历-日期' }
          ]
        },
        label: '选择类型'
      }
    },
    {
      name: 'singleAlignType',
      type: FieldTypes.string,
      defaultValue: 'left',
      showDesign: true
    },
    {
      name: 'value',
      type: FieldTypes.date,
      showDesign: false,
      designConfig: {
        type: EditTypes.Date,
        isRequired: true,
        props: {},
        label: '选中时间'
      }
    },
    {
      name: 'minDate',
      type: FieldTypes.date,
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '最小可选日期'
      }
    },
    {
      name: 'maxDate',
      type: FieldTypes.date,
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '最大可选日期'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.date,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: false,
        props: {},
        label: '默认值'
      }
    },
    // {
    //   name: 'minuteStep',
    //   type: FieldTypes.number,
    //   defaultValue: 1,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Number,
    //     isRequired: false,
    //     props: {},
    //     label: '递增步长',
    //     help: '分钟数递增步长设置'
    //   }
    // },
    // {
    //   name: 'required',
    //   type: FieldTypes.boolean,
    //   defaultValue: false,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: false,
    //     props: {},
    //     label: '必填'
    //   }
    // },
    // {
    //   name: 'splitLine',
    //   type: FieldTypes.boolean,
    //   defaultValue: true,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: false,
    //     props: {},
    //     label: '下划线'
    //   }
    // },
    {
      name: 'arrow',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示箭头'
      }
    },
    // {
    //   name: 'disabled',
    //   type: FieldTypes.boolean,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: false,
    //     props: {},
    //     label: '禁用'
    //   }
    // },
    {
      name: 'onChangeDate',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChangeDate'
      }
    },
    {
      name: 'onValueChange',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onValueChange',
        help: '每列picker改变时的回调'
      }
    },
    {
      name: 'format',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: '', text: '默认' },
            { value: 'yyyy-MM-DD', text: 'yyyy-MM-DD' },
            { value: 'HH:mm', text: 'HH:mm' },
            { value: 'yyyy-MM-DD HH:mm', text: 'yyyy-MM-DD HH:mm' },
            { value: 'yyyy', text: 'yyyy' },
            { value: 'yyyy-MM', text: 'yyyy-MM' }
          ]
        },
        label: 'format',
        help: '格式化选中的值'
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
        label: '弹框标题'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '显示文案'
      }
    },
    // {
    //   name: 'prefixCls',
    //   type: FieldTypes.string,
    //   defaultValue: 'am-picker',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'class前缀'
    //   }
    // },
    // {
    //   name: 'onOk',
    //   type: FieldTypes.action,
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'onOk',
    //     help: '选中回调'
    //   }
    // },
    // {
    //   name: 'onDismiss',
    //   type: FieldTypes.action,
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'onDismiss',
    //     help: '取消回调'
    //   }
    // },
    ...getFilterProps(['singleLine', 'labelStyle', 'errorText'])
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
  propertyMap: {
    cShowCaption: 'label',
    bIsNull: 'notRequired',
  }
}

export default manifest
