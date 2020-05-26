import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps, TypeProps } from 'yonui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Switch',
  label: '滑动开关',
  description: '',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  icon: 'radio',
  props: [
    {
      name: 'checked',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '值'
      }
    },
    {
      name: 'cDefaultValue',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '默认值'
      }
    },
    // {
    //   name: 'disabled',
    //   type: FieldTypes.boolean,
    //   defaultValue: false,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: true,
    //     props: {},
    //     label: '禁用'
    //   }
    // },
    {
      name: 'name',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'name属性',
        help: 'dom上添加name属性'
      }
    },
    // {
    //   name: 'title',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: true,
    //     props: {},
    //     label: '标题文本'
    //   }
    // },
    {
      name: 'platform',
      type: FieldTypes.string,
      defaultValue: 'ios',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'ios', text: '苹果' },
            { value: 'android', text: '安卓' }
          ]
        },
        label: '手机平台'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClick'
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
    }
  ],
  children: [],
  extension: [
    ExtensionProps.disabled,
    ExtensionProps.bIsNull,
    ExtensionProps.bMustSelect,
    ExtensionProps.isExport,
    ExtensionProps.bVmExclude
  ],
  propertyMap: {
    bIsNull: '!required',
    cShowCaption: 'title',
    cDefaultValue: 'defaultValue'
  }
}

export default manifest
