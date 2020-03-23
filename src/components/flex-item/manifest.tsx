import { EditTypes, FieldTypes, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
  hidden: true,
  icon: 'icon_wangye',
  props: [// adapter适配层数据
    {
      name: 'content',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '内容'
      }
    }
  ],
  autoAddItemByModel: 'Input',
  children: () => true
}

export default manifest
