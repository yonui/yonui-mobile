import { ReactWrapper } from 'libraui-extension'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import manifest from './manifest'

const MDFCarousel = ReactWrapper(Carousel, manifest)
MDFCarousel.item = ReactWrapper(CarouselItem, manifest)

export default MDFCarousel
