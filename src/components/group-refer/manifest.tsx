import { ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'name',
  label: '页面引用',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  props: [

  ],
  children: () => false,
  parent: ['MainViceGroup', 'mainVicegroup']
}

export default manifest
