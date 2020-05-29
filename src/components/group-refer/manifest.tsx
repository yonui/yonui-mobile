import { ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'GroupRefer',
  label: '页面引用',
  type: 'layoutContainer',
  uiObject: UIObject.Containers,
  hidden: false,
  icon: 'div',
  props: [

  ],
  children: () => false,
  parent: ['GroupContainer', 'groupcontainer']
}

export default manifest
