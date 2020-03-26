import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'CardBox',
  label: '卡片容器',
  type: 'dataContainer',
  uiObject: UIObject.Containers,
  icon: 'card',
  props: [
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: '删除',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮文本'
      }
    },
    {
      name: 'rightStyle',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '按钮样式'
      }
    },
    {
      name: 'onPress',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮点击事件'
      }
    }
  ],
  children: () => true
}

export default manifest
