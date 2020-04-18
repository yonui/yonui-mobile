import { FieldTypes, EditTypes, ComponentManifest, UIObject, SysProps, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Input',
  uiObject: UIObject.Controls,
  label: '文本',
  type: 'basicControls',
  icon: 'text',
  systemProperties: [SysProps.DATA_FIELD],
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
        label: '标题文本'
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
        help: '该字段控制的是输入值的长度'
      }
    },
    {
      name: 'subuitype',
      type: FieldTypes.string,
      defaultValue: 'text',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'text', text: '文本' },
            { value: 'idCard', text: '身份证' },
            { value: 'ipAddress', text: 'ip地址' }
          ]
        },
        label: '类型'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '默认值'
      }
    },
    {
      name: 'placeholder',
      type: FieldTypes.string,
      defaultValue: '请输入',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '背景提示'
      }
    },
    {
      name: 'clear',
      type: FieldTypes.boolean,
      showDesign: false,
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
      showDesign: false,
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
      showDesign: false,
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
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onFocus'
      }
    },
    {
      name: 'check',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否校验'
      }
    },
    {
      name: 'regRule',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '格式',
        help: '正则字符串'
      }
    },
    {
      name: 'regRuleText',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '校验错误提示文本'
      }
    }
  ],
  extension: [
    ExtensionProps.disabled,
    ExtensionProps.required,
    ExtensionProps.singleLine,
    ExtensionProps.splitLine
  ]
}
export default manifest
