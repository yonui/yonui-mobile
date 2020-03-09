import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'Layout',
  uiTable: UITable.BillTplGroupBase,
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

export {
  manifest,
  ReactWrapper
}
