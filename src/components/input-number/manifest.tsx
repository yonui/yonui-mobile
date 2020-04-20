import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'InputNumber',
  label: '数值',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  icon: 'digital',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '数值输入',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标签'
      }
    },
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
      name: 'precision',
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
        label: '提示文字'
      }
    },
    // {
    //   name: 'textAlign',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Select,
    //     isRequired: true,
    //     props: {
    //       options: [
    //         { value: '', text: '默认' },
    //         { value: 'left', text: '左对齐' },
    //         { value: 'center', text: '居中' },
    //         { value: 'right', text: '右对齐' }
    //       ]
    //     },
    //     label: '对齐方式',
    //     help: '单行默认右对齐，多行默认左对齐'
    //   }
    // },
    // {
    //   name: 'inputWrapperWidth',
    //   type: FieldTypes.string,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: true,
    //     props: {},
    //     label: '输入框宽度'
    //   }
    // },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onChange'
      }
    }
  ],
  children: [],
  extension: [
    ExtensionProps.required,
    ExtensionProps.disabled,
    ExtensionProps.splitLine,
    ExtensionProps.singleLine,
    ExtensionProps.bIsNull,
    ExtensionProps.bMustSelect,
    ExtensionProps.isExport,
    ExtensionProps.bVmExclude
  ]
}

export default manifest
