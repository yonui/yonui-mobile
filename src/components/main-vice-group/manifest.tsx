import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'GroupContainer',
  label: '主子页面',
  description: '主子页面',
  type: TypeProps.DataContainer,
  uiObject: UIObject.Containers,
  hidden: false,
  icon: 'div',
  props: [
    {
      name: 'isMainGroup',
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
  children: () => true
}
export default manifest
