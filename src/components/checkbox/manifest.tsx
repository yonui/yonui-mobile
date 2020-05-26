import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'Checkbox',
  label: '复选框',
  description: '',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'checkBox',
  props: [
    // {
    //   name: 'mode',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Select,
    //     isRequired: false,
    //     props: {
    //       options: [
    //         { value: '', text: '默认' },
    //         { value: 'square', text: '方形' }
    //       ]
    //     },
    //     label: '类型'
    //   }
    // },
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '描述文本'
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
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '选中'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '禁用'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '改变回调'
      }
    }
  ],
  children: [],
  propertyMap: {
    cDefaultValue: 'defaultChecked'
  }
}
export default manifest
