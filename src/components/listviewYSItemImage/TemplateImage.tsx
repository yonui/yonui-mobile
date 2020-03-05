import React, { Component } from 'react'
import { manifestImage as manifest, ReactWrapper } from './manifest'

interface YSTemplateProps {
  width: number,//宽度
  type: string,//必须是image，boldFont, stamp，normalColumn中一个
  children: React.ReactElement[]
  //下面是image
  imageWidth?: number,//宽度
  imageHeight?: number,//高度
  imageUrl?: string,
  //下面是boldFont
  boldFontNum: 2,//默认前两条加粗
  //下面是stamp
  stampRight?: number,
  stampTop?: number
  stampUrl?: string,
  //下面是列展示是否加粗
  normalcolumnBold?: boolean,

}

interface YSObj {
  name: string,
  id: string
}
const TopSectionItemPreCls = 'top-section-item';
const TopLeftPreClas = 'top-left-section';
const TopMiddlePreClas = 'top-middle-section';
const TopRightPreClas = 'top-right-section';
// const BottomLeftPreClas = 'top-bottom-left';
// const BottomRightPreClas = 'top-bottom-right';

class ImageTempal extends Component<YSTemplateProps, any>{
  public static defaultProps = {
    width: "50%",
    type: 'image',
    imageUrl: 'http://images.zon100.com/img/10000736/1000036361/1000121044_1000.jpg',
    stampUrl: 'http://dpic.tiankong.com/u3/u8/QJ8587875589.jpg'

  }
  getImageNode = () => {
    const { imageWidth, imageHeight, imageUrl } = this.props;
    const TopLeftSectionStyle = {
      width: imageWidth || 46,
      height: imageHeight || 46,
    }
    return (
      <div className={TopLeftPreClas}>
        <img src={imageUrl} style={TopLeftSectionStyle} />
      </div>
    )

  }

  getStampNode = () => {
    const { stampRight, stampTop, stampUrl, children } = this.props;
    const TopLeftSectionStyle = {
      right: stampRight || 16,
      top: stampTop || -46
    }
    return (
      <div className={TopRightPreClas}>
        <img src={stampUrl} style={TopLeftSectionStyle}></img>
      </div>
    )
  }

  
  getComponent = () => {
    const { type, normalcolumnBold } = this.props;
    let switchType = type;
    switch (switchType) {
      case 'image':
        return this.getImageNode();
      case 'stamp':
        return this.getStampNode()
      default:
        return <div>type应该是image或者stamp</div>
    }

  }
  render() {
    const {type } = this.props;
    return (
      <div  className={`${TopSectionItemPreCls} ${type}`}>
        {this.getComponent()}
      </div>
    )
  }
}

export default ReactWrapper(ImageTempal, manifest)