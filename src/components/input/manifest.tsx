import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Input',
  uiTable: UITable.BillItemBase,
  label: '文本输入',
  type: 'basic',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '输入框',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标签'
      }
    },
    {
      name: 'labelNumber',
      type: FieldTypes.number,
      defaultValue: 5,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {
          min: 2,
          max: 7
        },
        label: '标签文字个数'
      }
    },
    {
      name: 'maxLength',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最大长度',
        help:'该字段控制的是输入值的长度,除money类型外，仅当text, email, search, password, tel, or url 有效.'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'text',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'bankCard', text: '银行卡' },
            { value: 'phone', text: '手机号' },
            { value: 'password', text: '密码' },
            { value: 'number', text: '数字' },
            { value: 'digit', text: '原生number' },
            { value: 'money', text: '金额' },
            { value: 'text', text: '文本' }
          ]
        },
        label: '选择的类型'
      }
    },
    {
      name: 'value',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '值'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.string,
      defaultValue: '默认值',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '初始默认值'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '右侧注释'
      }
    },
    {
      name: 'placeholder',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '背景提示'
      }
    },
    {
      name: 'editable',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否可编辑'
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
      name: 'disabled',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否禁用'
      }
    },
    {
      name: 'clear',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '清除功能'
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
      name: 'onBlur',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onBlur'
      }
    },
    {
      name: 'onFocus',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onFocus'
      }
    }
  ]
}
export {
  manifest,
  ReactWrapper
}
