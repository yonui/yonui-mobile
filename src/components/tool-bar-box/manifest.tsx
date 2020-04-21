import { ComponentManifest, UIObject, FieldTypes, EditTypes } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'ToolBar',
  label: '工具栏容器',
  description: '简化工具栏变成一个简单容器,需要手动拖放按钮组件',
  uiObject: UIObject.Containers,
  type: 'operationBar',
  icon: 'gongjulan1',
  props: [
    {
      name: 'layout',
      type: FieldTypes.string,
      defaultValue: 'horizontal',
      showDesign: true,
      designConfig: {
        label: '排列方式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '水平', value: 'horizontal' },
            { text: '竖直', value: 'vertical' }
          ]
        }
      }
    }
  ],
  children: ['button']
}

export default manifest
