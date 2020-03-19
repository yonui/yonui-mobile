import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Div',
  label: 'Div',
  description: '空白容器',
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
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
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: 'normal', text: '默认' },
            { value: 'panel', text: '面板' }
          ]
        },
        label: '是否换行',
        help: '是否换行'
      }
    }
  ],
  children: () => true
}
export default manifest
