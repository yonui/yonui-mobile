import { ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Footer',
  uiObject: UIObject.Containers,
  label: '底部区域',
  type: 'operationBar',
  icon: 'footer',
  props: [],
  children: () => true
}
export default manifest
