import { ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Checkbox } from 'antd-mobile'

const AgreeItem = Checkbox.AgreeItem

const manifest: ComponentManifest = {
  name: 'AgreeItem',
  label: 'AgreeItem',
  description: '', // 描述
  type: 'DataEntry',
  props: [// adapter适配层数据
  ]
}
export default ReactWrapper(AgreeItem, manifest)
