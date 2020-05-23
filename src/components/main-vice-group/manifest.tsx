import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'cGroup',
  label: 'cGroup',
  description: '主子页面容器',
  type: 'basicControls',
  uiObject: UIObject.Containers,
  hidden: true,
  icon: 'div',
  props: [
    {
      name: 'type',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: true, text: '是' },
            { value: false, text: '否' }
          ]
        },
        label: '是否主页面'
      }
    }
  ],
  children: () => true,
  parent: () => false
}
export default manifest
