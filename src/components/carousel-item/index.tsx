import { ReactWrapper } from 'libraui-extension'
import CarouselItem from './CarouselItem'
import { carouselItemManifest } from '../carousel/manifest'

export default ReactWrapper(CarouselItem, carouselItemManifest, { excludeNidAndUiType: false })
