import { ComponentManifest, UIObject, TypeProps } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'TabBar',
  label: '标签栏',
  type: TypeProps.FormControls,
  uiObject: UIObject.Controls,
  icon: 'radio',
  events: [
    {
      name: 'onSwitch',
      des: '切换'
    }
  ]
}

export default manifest
