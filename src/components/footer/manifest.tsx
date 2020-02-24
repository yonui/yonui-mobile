import { ReactWrapper, UITable, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Footer',
  uiTable: UITable.BillTplGroupBase,
  label: '底部区域',
  type: 'Containers',
  props: [],
  children: () => true
}
export {
  ReactWrapper,
  manifest
}