import { Card } from 'antd-mobile'
import { ComponentManifest, ReactWrapper } from 'libraui-extension'
const CardBody = Card.Body
const manifest: ComponentManifest = {
  name: 'CardBody',
  label: '卡片内容',
  description: '',
  type: 'DataDisplay',
  props: [],
  children: () => true,
  parent: (p: ComponentManifest) => p.type === 'Layout'
}

export default ReactWrapper(CardBody, manifest)
