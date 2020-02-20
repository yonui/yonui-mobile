import React from 'react';
// import { Icon } from 'antd-mobile';
import classnames from 'classnames';
import achievement from './style/image_png/achievement.png';
import achievement2x from './style/image_png/achievement@2x.png';
import business from './style/image_png/business.png';
import business2x from './style/image_png/business@2x.png';
import campusLife from './style/image_png/campusLife.png';
import campusLife2x from './style/image_png/campusLife@2x.png';
import copy from './style/image_png/copy.png';
import copy2x from './style/image_png/copy@2x.png';
import hotNews from './style/image_png/hotNews.png';
import hotNews2x from './style/image_png/hotNews@2x.png';
import HR from './style/image_png/HR.png';
import HR2x from './style/image_png/HR@2x.png';
import industryInformation from './style/image_png/industryInformation.png';
import industryInformation2x from './style/image_png/industryInformation@2x.png';
import more from './style/image_png/more.png';
import more2x from './style/image_png/more@2x.png';
import praise from './style/image_png/praise.png';
import praise2x from './style/image_png/praise@2x.png';
import productDynamics from './style/image_png/productDynamics.png';
import productDynamics2x from './style/image_png/productDynamics@2x.png';
import Secondhandmarket from './style/image_png/Secondhandmarket.png';
import Secondhandmarket2x from './style/image_png/Secondhandmarket@2x.png';
import xiaoyou from './style/image_png/xiaoyou.png';
import xiaoyou2x from './style/image_png/xiaoyou@2x.png';
import yyCulture from './style/image_png/yyCulture.png';
import yyCulture2x from './style/image_png/yyCulture@2x.png';
export interface IconProps {
  prefixCls?: string;
  className?: string;
  type?: string;
  name?: string;
  size?: string;
  backGroundColor?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
const _prefixCls = 'am-icon';
export default class MDFIcon extends React.Component<IconProps, any> {
  static defaultProps = {
    prefixCls: { _prefixCls },
    type: 'default',
    size: 'md',
    loading: false,// 是否显示加载图标
  }
  constructor(props: IconProps) {
    super(props)
  }
  getName = () => {
    const { type, size, loading, name } = this.props
    var _name;
    debugger;
    switch (name) {
      case 'achievement': return _name = size === 'small' ? achievement : achievement2x; break;
      case 'business': return _name = size === 'small' ? business : business2x; break;
      case 'campusLife': return _name = size === 'small' ? campusLife : campusLife2x; break;
      case 'copy': return _name = size === 'small' ? copy : copy2x; break;
      case 'hotNews': return _name = size === 'small' ? hotNews : hotNews2x; break;
      case 'campusLife': return _name = size === 'small' ? campusLife : campusLife2x; break;
      case 'HR': return _name = size === 'small' ? HR : HR2x; break;
      case 'industryInformation': return _name = size === 'small' ? industryInformation : industryInformation2x; break;
      case 'more': return _name = size === 'small' ? more : more2x; break;
      case 'praise': return _name = size === 'small' ? praise : praise2x; break;
      case 'productDynamics': return _name = size === 'small' ? productDynamics : productDynamics2x; break;
      case 'Secondhandmarket': return _name = size === 'small' ? Secondhandmarket : Secondhandmarket2x; break;
      case 'xiaoyou': return _name = size === 'small' ? xiaoyou : xiaoyou2x; break;
      case 'yyCulture': return _name = size === 'small' ? yyCulture : yyCulture2x; break;
      default: return _name = size === 'small' ? xiaoyou : xiaoyou2x; break;;
        debugger;

    }
  }
  render() {
    let iconName = this.getName();

    return (
      <img src={iconName} />
    )

  }
}

