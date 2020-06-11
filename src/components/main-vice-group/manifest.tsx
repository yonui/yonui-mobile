import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'GroupContainer',
  label: '页面',
  description: '页面',
  type: 'layoutContainer',
  uiObject: UIObject.Containers,
  hidden: true,
  icon: 'div',
  props: [
    {
      name: 'isMainGroup',
      type: FieldTypes.boolean,
      value: '',
      showDesign: true,
      defaultValue: false,
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
            { value: 'page', text: '页面' },
            { value: 'drawer', text: '抽屉' },
          ]
        },
        label: '类型'
      }
    },
    {
      name: 'drawerPlacement',
      type: FieldTypes.string,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: 'top', text: '上' },
            { value: 'right', text: '右' },
            { value: 'bottom', text: '下' },
            { value: 'left', text: '左' },
          ]
        },
        label: '抽屉方向'
      }
    },
    {
      name: 'drawerWidth',
      type: FieldTypes.number,
      defaultValue: 256,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '宽度'
      }
    },
    {
      name: 'drawerHeight',
      type: FieldTypes.number,
      defaultValue: 256,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '高度'
      }
    }
  ],
  children: () => true
}
export default manifest
