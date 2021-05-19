import { ComponentManifest, UIObject, FieldTypes, EditTypes, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'ToolBar',
  label: '工具栏容器',
  description: '简化工具栏变成一个简单容器,需要手动拖放按钮组件',
  uiObject: UIObject.Containers,
  type: TypeProps.LayoutContainer,
  props: [
    {
      name: 'layout',
      type: FieldTypes.string,
      defaultValue: 'alignright',
      showDesign: true,
      designConfig: {
        label: '对齐方式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '右对齐', value: 'alignright' },
            { text: '左对齐', value: 'alignleft' }
          ]
        }
      }
    }
  ],
  children: ['button']
}

export default manifest
