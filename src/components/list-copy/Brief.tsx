import { ReactWrapper, ComponentManifest } from 'libraui-extension'

import { List } from 'antd-mobile'

const Brief = List.Item.Brief

const manifest: ComponentManifest = {
  name: 'Brief',
  label: 'Brief',
  description: '', // 描述
  type: 'basicControls',
  props: [// adapter适配层数据
  ]
}
export default ReactWrapper(Brief, manifest)
