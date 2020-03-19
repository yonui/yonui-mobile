import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'

const backgroundManifest: ComponentManifest = {
  name: 'Background',
  label: '页面背景',
  uiTable: UITable.BillTplGroupBase,
  type: 'basicControls',
  description: '',
  props: [
    {
      name: 'background',
      type: FieldTypes.string,
      defaultValue: 'linear-gradient(180deg, #e53938 0%, transparent 40%, transparent 100%)',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '背景'
      }
    }
  ],
  children: []
}

export default backgroundManifest
