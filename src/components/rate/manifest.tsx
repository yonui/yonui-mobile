import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps, ExtensionProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Rate',
  label: '评分',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'count',
      type: FieldTypes.number,
      defaultValue: 5,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '总分'
      }
    },
    {
      name: 'allowHalf',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '允许半分'
      }
    },
    {
      name: 'value',
      type: FieldTypes.number,
      showDesign: false,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '值'
      }
    },
    {
      name: 'defaultValue',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '默认值'
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
