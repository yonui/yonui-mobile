import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'Layout',
  uiTable: UITable.BillTplGroupBase,
  props: [// adapter适配层数据
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']
}

export {
  manifest,
  ReactWrapper
}