import { ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Flex } from 'antd-mobile'

const FlexItem = Flex.Item

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'Layout',
  props: [// adapter适配层数据
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']
}
export default ReactWrapper(FlexItem, manifest)
