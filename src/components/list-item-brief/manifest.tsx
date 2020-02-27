import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'ListItemBrief',
  label: '列表ItemBrief',
  type: 'DataDisplay',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: '辅助信息',
      showDesign: true,
      designConfig: {
        label: '内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: () => true
}

export {
  ReactWrapper,
  manifest
}
