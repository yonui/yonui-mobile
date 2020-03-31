import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'CardBoxGroup',
  label: '卡片容器组',
  type: 'dataContainer',
  uiObject: UIObject.Containers,
  props: [
    {
      name: 'splitLine',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {
        },
        label: '分割线'
      }
    }
  ],
  children: ['CardBox', 'cardbox']
}

export default manifest