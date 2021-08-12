/**
 * @name: CarouselItem
 * @description: 走马灯Item
 */
 import React, { Component } from 'react'
 import Carousel from '../../carousel'
 import CarouselItem from '../index'
 import Button from '../../button'
 import '../style'
 import './demo.less'
 export default class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }
  setIndex = () => {
    let { selectedIndex = 0 } = this.state
    console.log(selectedIndex++)
    this.setState({
      selectedIndex
    })
  }
  render () {
    return (
      <div>
        <Button type="default" onClick={this.setIndex}>设置</Button>
        <Carousel selectedIndex={this.state.selectedIndex}>
          <CarouselItem backgroundImage="https://file-cdn.yonyoucloud.com/workbench-image-path-applicationIcon/5104c41f-fc7c-4ff0-a21e-e4d6447669f9/2.png" style={{ backgroundColor: 'lightblue' }}></CarouselItem>
          <CarouselItem style={{ backgroundColor: 'lightcoral' }}></CarouselItem>
          <CarouselItem style={{ backgroundColor: 'lightyellow' }}></CarouselItem>
        </Carousel>
      </div>
    )
  }
}
