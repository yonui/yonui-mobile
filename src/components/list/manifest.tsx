import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable, } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'List',
  label: '列表',
  type: 'DataDisplay',
  uiTable: UITable.BillTplGroupBase,
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
  children: ['ListItem']
}

export {
  ReactWrapper,
  manifest
}
