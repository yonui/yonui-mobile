import { ComponentManifest, UIObject, TypeProps, FieldTypes, EditTypes, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Mobile',
  label: '联系方式',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  icon: 'chengyuan',
  props: [
    {
      name: 'defaultValue',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '默认值'
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'mobilephone',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'telephone', text: '电话' },
              { value: 'mobilephone', text: '手机' },
              { value: 'email', text: '邮箱' }
            ]
        },
        label: '类型'
      }
    },
    {
      name: 'area',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '国际区号',
        help: '是否显示国际区号选项，当类型为电话或手机时生效'
      }
    },
    {
      name: 'isSelect',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '邮箱后缀',
        help: '是否显示邮箱后缀选项,当类型为邮箱时生效'
      }
    },
    {
      name: 'dataSource',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '国际区号数据源',
        help: '国际区号数据源,当类型为电话或手机时生效\ntype dataSourceType = Array<{ short: string, name: string, en: string, tel: string, pinyin: string }>'
      }
    },
    {
      name: 'emailDataSource',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '邮箱后缀数据源',
        help: '邮箱后缀数据源,当类型为邮箱时生效\ntype emailType = Array<{type: string}>'
      }
    }
  ],
  children: [],
  extension: [
    ExtensionProps.bIsNull,
    ExtensionProps.disabled,
    ExtensionProps.singleLine,
    ExtensionProps.splitLine,
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
