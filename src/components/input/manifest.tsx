import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps } from 'yonui-extension'
import listItemProps from '../list-item-wrapper/manifestProps'
const manifest: ComponentManifest = {
  name: 'Input',
  uiObject: UIObject.Controls,
  label: '文本',
  type: 'basicControls',
  icon: 'text',
  props: [
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
      defaultValue: false,
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
    },
    {
      name: 'hiddenChart',
      type: FieldTypes.string,
      defaultValue: '*',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '*', value: '*' },
            { text: '%', value: '%' },
            { text: '$', value: '$' },
            { text: '@', value: '@' },
            { text: '?', value: '?' }
          ]
        },
        label: '掩码'
      }
    },
    {
      name: 'replaceChart',
      type: FieldTypes.string,
      defaultValue: '#',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '#', value: '#' },
            { text: '?', value: '?' },
            { text: '~', value: '~' }
          ]
        },
        label: '占位码'
      }
    },
    {
      name: 'formatReg',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '字符格式',
        help: '根据掩码和占位码改变展示格式，如: ###-####-#### = 188-8888-8888, ###****### = 188****8888'
      }
    },
    {
      name: 'checkMask',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '有效范围',
        help: '配置可输入的字符内容范围，例如：只能输入数字：^[0-9]*$， 只能输入字母：^[a-zA-Z]*$'
      }
    },
    {
      name: 'inputStyle',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: '输入框样式',
        type: EditTypes.IframeModal,
        help: '',
        props: {
          caption: '输入框样式',
          iframeUrl: '/CssSelect?iframeId=inputStyle',
          iframeId: 'mobileCssIframeModalinputStyle',
          iframeContext: 'mobileCssIframeModal',
          addText: '新增样式',
          editText: '修改样式',
          message: true,
          isRequired: false,
          footer: true
        }
      }
    },
    ...listItemProps
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
    bIsNull: '!required',
    cShowCaption: 'label'
  }
}
export default manifest
