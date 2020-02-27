import ListItem from './ListItem'
import { ReactWrapper, manifest } from './manifest'
export default ReactWrapper(ListItem, manifest, {
  excludeNidAndUiType: true
})
