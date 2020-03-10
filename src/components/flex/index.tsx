import Flex from './Flex'
import FlexItem from '../flex-item'
import { manifest, ReactWrapper } from './manifest'

const WrappedFlex = ReactWrapper(Flex, manifest)
WrappedFlex.Item = FlexItem
export default WrappedFlex
