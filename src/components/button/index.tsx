import Button from './Button'
import { manifest, ReactWrapper } from './manifest'

export default ReactWrapper(Button, manifest, {
  excludeNidAndUiType: true
})
