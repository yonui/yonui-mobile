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
              <CarouselItem style={{backgroundColor: 'lightblue'}}></CarouselItem>
              <CarouselItem style={{backgroundColor: 'lightcoral'}}></CarouselItem>
              <CarouselItem style={{backgroundColor: 'lightyellow'}}></CarouselItem>
            </Carousel>
        )
    }
}
