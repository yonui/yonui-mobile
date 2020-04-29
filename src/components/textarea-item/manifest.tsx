import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Textarea',
  uiObject: UIObject.Controls,
  label: '多行文本',
  type: 'basicControls',
  icon: 'rich_text',
  props: [
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
    // {
    //   name: 'label',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: true,
    //     props: {},
    //     label: '标题文本'
    //   }
    // },
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
      name: 'maxLength',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '输入长度'
      }
    },
    // {
    //   name: 'labelNumber',
    //   type: FieldTypes.number,
    //   defaultValue: 5,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Number,
    //     isRequired: true,
    //     props: {},
    //     label: '标签文字个数'
    //   }
    // },
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
        label: '提示文案'
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
      name: 'required',
      type: FieldTypes.boolean,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '必填项'
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
      name: 'onBlur',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onBlur'
      }
    }
  ],
  extension: [
    // ExtensionProps.required,
    ExtensionProps.disabled,
    ExtensionProps.splitLine,
    ExtensionProps.bIsNull,
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
