import { ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Footer',
  uiObject: UIObject.Containers,
  label: '底部区域',
  type: TypeProps.LayoutContainer,
  icon: 'footer',
  props: [],
  children: () => true
}
export default manifest
