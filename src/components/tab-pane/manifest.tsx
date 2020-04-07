import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'TabPane',
  label: '多页签内容',
  description: 'Tabs组件的子组件',
  uiObject: UIObject.Containers,
  type: 'layoutContainer',
  icon: 'wenziyeqian',
  props: [
    {
      name: 'key',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'key值'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'label'
      }
    },
    {
      name: 'height',
      type: FieldTypes.string,
      defaultValue: '100px',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '高度'
      }
    },
    {
      name: 'width',
      type: FieldTypes.string,
      defaultValue: '100%',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '宽度'
      }
    },
    {
      name: 'bgColor',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '背景色'
      }
    }
  ],
  children: () => true
}
export default manifest
