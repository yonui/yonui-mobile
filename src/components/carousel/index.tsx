import { ReactWrapper } from 'libraui-extension'
import MDFCarousel from './Carousel'
import MDFCarouselItem from './CarouselItem'

import {
  carouselManifest,
  carouselItemManifest
} from './manifest'

const Carousel = ReactWrapper(MDFCarousel, carouselManifest)
Carousel.item = ReactWrapper(MDFCarouselItem, carouselItemManifest)

export default Carousel
