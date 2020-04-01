import { ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'basicControls',
  uiObject: UIObject.Containers,
  hidden: true,
  icon: 'icon_wangye',
  props: [],
  children: () => true,
  parent: () => false
}

export default manifest
