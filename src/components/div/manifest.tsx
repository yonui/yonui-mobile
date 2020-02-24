import { FieldTypes, EditTypes, ReactWrapper, UITable,ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest:ComponentManifest = {
  name: 'Div',
  label: 'Div',
  description: '空白容器',
  type: 'DataEntry',
  uiTable:UITable.BillTplGroupBase,
  props: [],
  children: () => true
}
export {manifest,ReactWrapper}