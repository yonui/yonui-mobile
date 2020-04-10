import { ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'ToolBar',
  label: '工具栏容器',
  description: '简化工具栏变成一个简单容器,需要手动拖放按钮组件',
  uiObject: UIObject.Containers,
  type: 'operationBar',
  icon: 'gongjulan1',
  props: [
  ],
  children: ['button']
}

export default manifest
