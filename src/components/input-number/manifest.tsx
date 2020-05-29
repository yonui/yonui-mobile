import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps, ExtensionProps } from 'yonui-extension'
import listItemProps from '../list-item-wrapper/manifestProps'
const manifest: ComponentManifest = {
  name: 'InputNumber',
  label: '数值',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  icon: 'digital',
  props: [
    // {
    //   name: 'label',
    //   type: FieldTypes.string,
    //   defaultValue: '数值输入',
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: true,
    //     props: {},
    //     label: '标签'
    //   }
    // },
    {
      name: 'defaultValue',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '默认值'
      }
    },
    // {
    //   name: 'value',
    //   type: FieldTypes.number,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Number,
    //     isRequired: true,
    //     props: {},
    //     label: '当前值'
    //   }
    // },
    {
      name: 'iNumPoint',
      type: FieldTypes.number,
      defaultValue: 2,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '精度',
        help: '小数点后保留位数'
      }
    },
    {
      name: 'min',
      type: FieldTypes.number,
      defaultValue: -4294967296,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最小值'
      }
    },
    {
      name: 'max',
      type: FieldTypes.number,
      defaultValue: 4294967296,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '最大值'
      }
    },
    {
      name: 'prefix',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '前缀'
      }
    },
    {
      name: 'suffix',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '后缀'
      }
    },
    {
      name: 'maxLength',
      type: FieldTypes.number,
      defaultValue: 18,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '输入长度'
      }
    },
    {
      name: 'thousands',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '千分位分隔符'
      }
    },
    {
      name: 'check',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否校验'
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
  children: [],
  extension: [
    // ExtensionProps.required,
    ExtensionProps.disabled,
    // ExtensionProps.splitLine,
    // ExtensionProps.singleLine,
    ExtensionProps.bIsNull,
    ExtensionProps.bMustSelect,
    ExtensionProps.isExport,
    ExtensionProps.bVmExclude
  ],
  propertyMap: {
    bIsNull: '!required',
    cShowCaption: 'label',
    iNumPoint: 'precision'
  }
}

export default manifest
