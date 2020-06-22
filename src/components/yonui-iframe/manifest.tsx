import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'YonuiIframe',
  label: '内嵌网页',
  type: TypeProps.FunctionalControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'url',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'url地址'
      }
    },
    // {
    //   name: 'width',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: '宽度',
    //     help: '默认为100%'
    //   }
    // },
    // {
    //   name: 'height',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: '高度',
    //     help: '默认为100%'
    //   }
    // }
  ],
  children: []
}

export default manifest
