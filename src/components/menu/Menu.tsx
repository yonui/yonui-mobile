
import { Menu } from 'antd-mobile'
import { manifest, ReactWrapper } from './manifest'
// 这边需要做的处理：需要生成sidebar然后传给<Menu></Menu>

export default ReactWrapper(Menu, manifest)
