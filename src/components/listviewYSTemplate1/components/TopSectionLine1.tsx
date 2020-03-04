import React, { Component } from 'react'
import { Flex,Icon } from 'antd-mobile'

const TopLeftPreClas = 'top-left-section';
const TopMiddlePreClas = 'top-middle-section';
const TopRightPreClas = 'top-right-section';

interface TopSectionLine1Props {
  width?: number,
  height?: number,
  right?: number,
  top?: number
}
export default class TopSectionLine1 extends Component<TopSectionLine1Props, any>{
  TopLeftSection = () => {
    const TopLeftSectionStyle = {
      width: this.props.width || 46,
      height: this.props.height || 46,
    }
    return (
      <div className={TopLeftPreClas}>
        <img src="http://images.zon100.com/img/10000736/1000036361/1000121044_1000.jpg" style={TopLeftSectionStyle} />
      </div>
    )
  }
  TopMiddleSection = () => {

    return (
      <div className={TopMiddlePreClas}>
        <div className='main-title'>
          <span>100002049469</span>
          <span>创维30C1</span>
        </div>
        <div className='sub-title'>
          <span>sku：</span>
          <span>SLT3219</span>
        </div>
      </div>
    )
  }
  TopRightSection = () => {
    const TopLeftSectionStyle = {
      right: this.props.right || 16,
      top: this.props.top || -46
    }
    return (
      <div className={TopRightPreClas}>
        <img src="http://dpic.tiankong.com/u3/u8/QJ8587875589.jpg" style={TopLeftSectionStyle} />
      </div>
    )
  }

  render() {
    return (
      <Flex>
        {this.TopLeftSection()}
        {this.TopMiddleSection()}
        {this.TopRightSection()}
      </Flex>

    )
  }
}
