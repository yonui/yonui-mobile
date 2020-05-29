import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'GroupContainer',
  label: '页面',
  description: '页面',
  type: 'layoutContainer',
  uiObject: UIObject.Containers,
  hidden: false,
  icon: 'div',
  props: [
    {
      name: 'isMainGroup',
      type: FieldTypes.boolean,
      value: '',
      showDesign: true,
      defaultValue: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否主页面'
      }
    },
    {
      name: 'groupType',
      type: FieldTypes.string,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: 'component', text: '组件' },
            { value: 'page', text: '页面' }
          ]
        },
        label: '类型'
      }
    }
  ],
  children: () => true
}
export default manifest
