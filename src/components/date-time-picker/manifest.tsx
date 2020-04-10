import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'DateTimePicker',
  label: '日期时间选择',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'time',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标签'
      }
    },
    {
      name: 'dateMode',
      type: FieldTypes.string,
      defaultValue: 'picker-date',
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
      name: 'use12Hours',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '12小时制'
      }
    },
    {
      name: 'minuteStep',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '递增步长',
        help: '分钟数递增步长设置'
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
      name: 'splitLine',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '下划线'
      }
    },
    {
      name: 'arrow',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示箭头'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '禁用'
      }
    },
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
      defaultValue: 'YYYY-MM-DD',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'YYYY-MM-DD', text: '日期' },
            { value: 'HH:mm', text: '时间' },
            { value: 'YYYY-MM-DD HH:mm', text: '日期+时间' }
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
      defaultValue: '请选择',
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
    {
      name: 'onOk',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onOk',
        help: '选中回调'
      }
    },
    {
      name: 'onDismiss',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onDismiss',
        help: '取消回调'
      }
    }
  ]
}

export default manifest
