import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'TabPane',
  label: '多页签内容',
  description: 'Tabs组件的子组件',
  uiObject: UIObject.Containers,
  type: TypeProps.LayoutContainer,
  icon: 'wenziyeqian',
  props: [
    {
      name: 'marginBottom',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '底部预留高度',
        help: '用于处理底部区域等情况'
      }
    },
    {
      name: 'minHeight',
      type: FieldTypes.string,
      defaultValue: '40px',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '最小高度'
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
