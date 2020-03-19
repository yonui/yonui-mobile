import { UITable, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Footer',
  uiTable: UITable.BillTplGroupBase,
  label: '底部区域',
  type: 'operationBar',
  props: [],
  children: () => true
}
export default manifest
