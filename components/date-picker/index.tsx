import React from 'react'
import { DatePicker } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

const manifest: ComponentManifest = {
  name: 'DatePicker',
  label: '日期选择',
  type: 'DataEntry',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'date',
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
        label: '选择类型'
      }
    },
    {
      name: 'value',
      type: FieldTypes.date,
      showDesign: true,
      designConfig: {
        type: EditTypes.Date,
        isRequired: true,
        props: {},
        label: '选中时间'
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
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChange'
      }
    },
    {
      name: 'onValueChange',
      type: FieldTypes.action,
      showDesign: true,
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
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'YYYY-MM-DD', text: '单日' },
            { value: 'HH:mm', text: '日期区间' },
            { value: 'YYYY-MM-DD HH:mm', text: '日期区间' }
          ]
        },
        label: 'format',
        help: '格式化选中的值'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      showDesign: true,
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
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-picker',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'class前缀'
      }
    },
    {
      name: 'onOk',
      type: FieldTypes.action,
      showDesign: true,
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
      showDesign: true,
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
export default ReactWrapper((props: any) => <DatePicker {...props}><div className='picker-trigger-click' style={{ minHeight: 32 }}>datepicker-弹框</div></DatePicker>, manifest)
