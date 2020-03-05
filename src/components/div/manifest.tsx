import { FieldTypes, EditTypes, ReactWrapper, UITable,ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest:ComponentManifest = {
  name: 'Div',
  label: 'Div',
  description: '空白容器',
  type: 'DataEntry',
  uiTable:UITable.BillTplGroupBase,
  props: [
    {
      name: 'nowrap',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '是否换行',
        help: '是否换行'
      }
    },
  ],
  children: () => true
}
export {manifest,ReactWrapper}