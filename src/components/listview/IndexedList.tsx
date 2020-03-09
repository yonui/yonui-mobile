import { ListView } from 'antd-mobile'
import { manifestIndexedList as manifest, ReactWrapper } from './manifest'

const IndexedList = ListView.IndexedList

export default ReactWrapper(IndexedList, manifest)
