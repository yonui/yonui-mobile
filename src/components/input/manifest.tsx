import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps, TypeProps } from 'yonui-extension'
import { getFilterProps } from '../list-item-wrapper/manifestProps'
const manifest: ComponentManifest = {
  name: 'Input',
  uiObject: UIObject.Controls,
  label: '文本框',
  type: TypeProps.FormControls,
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
            { value: 'password', text: '密码' },
            { value: 'idCard', text: '身份证' },
            { value: 'ipAddress', text: 'ip地址' },
            { value: 'bankCard16', text: '16位银行卡' },
            { value: 'bankCard19', text: '19位银行卡' },
          ]
        },
        label: '文本类型'
      }
    },
    {
      name: 'check',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否校验',
        help: '是否执行校验规则'
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
      name: 'regRule',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '格式校验',
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
        label: '校验错误提示',
        help: '对应自定义格式不正确的情况'
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
        label: '显示格式',
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
        label: '字符限制',
        help: '配置可输入的字符内容范围，例如：只能输入数字：^[0-9]*$， 只能输入字母：^[a-zA-Z]*$'
      }
    },
    {
      name: 'singleAlignType',
      type: FieldTypes.string,
      defaultValue: 'left',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '左对齐', value: 'left' },
            { text: '单行集中', value: 'center' },
            { text: '右对齐', value: 'right' }
          ]
        },
        label: '单行对齐方式'
      }
    },
    {
      name: 'name',
      type: FieldTypes.string,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'name属性',
        help: 'textarea 的 name'
      }
    },
    {
      name: 'rows',
      type: FieldTypes.number,
      defaultValue: 3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '控件高度'
      }
    },
    {
      name: 'value',
      type: FieldTypes.string,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '值'
      }
    },
    {
      name: 'editable',
      type: FieldTypes.boolean,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '允许修改'
      }
    },
    {
      name: 'isHTML',
      type: FieldTypes.boolean,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否富文本'
      }
    },
    {
      name: 'autoHeight',
      type: FieldTypes.boolean,
      showDesign: true,
      defaultValue: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '高度自适应',
        help: '高度自适应, autoHeight 和 rows 请二选一'
      }
    },
    {
      name: 'clear',
      type: FieldTypes.boolean,
      showDesign: false,
      defaultValue: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '清除功能'
      }
    },
    {
      name: 'onErrorClick',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onErrorClick',
        help: '点击报错 icon 触发的回调'
      }
    },
    {
      name: 'multilineMode',
      type: FieldTypes.boolean,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: 'multilineMode',
        help: '多行模式'
      }
    },
    ...getFilterProps(['singleLineCenter', 'errorText', 'labelStyle'])
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
    bIsNull: 'notRequired',
    cShowCaption: 'label'
  }
}
export default manifest
