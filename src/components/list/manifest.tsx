import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'List',
  label: '列表',
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
  hidden: true,
  icon: 'list',
  props: [
    {
      name: 'renderHeader',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'renderHeader',
        help: '渲染list header',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'renderFooter',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'renderFooter',
        help: '渲染list footer',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: ['ListItem', 'listitem']
}

export default manifest
