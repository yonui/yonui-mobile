/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Carousel from '../index';
import CarouselItem from '../../carousel-item/';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (
            <Carousel>
              <CarouselItem style={{backgroundColor: '#000'}}></CarouselItem>
              <CarouselItem></CarouselItem>
              <CarouselItem></CarouselItem>
            </Carousel>
        )
    }
}
