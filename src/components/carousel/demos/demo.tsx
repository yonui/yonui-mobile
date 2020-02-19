/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Carousel from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (
            <Carousel>
              <Carousel.item>123</Carousel.item>
              <Carousel.item></Carousel.item>
              <Carousel.item></Carousel.item>
            </Carousel>
        )
    }
}
