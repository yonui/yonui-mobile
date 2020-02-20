import Search from './Search'
import { ReactWrapper } from 'libraui-extension'
import manifest from './manifest'

export default ReactWrapper(Search, manifest, { excludeNidAndUiType: true })
