import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
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
      name: 'defaultValue',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '默认值'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '禁用'
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
  children: []
}

export default manifest
