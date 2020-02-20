import React from 'react';
// import { Icon } from 'antd-mobile';
import classnames from 'classnames';
import xiaoyou from './xiaoyou.png';
// import xiaoyou2x from './xiaoyou@2x.png';
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
const _prefixCls='am-icon';
export default class MDFIcon extends React.Component<IconProps, any> {
  static defaultProps = {
    prefixCls: {_prefixCls},
    type: 'default',
    size: 'md',
    loading:false,// 是否显示加载图标
  }
  constructor(props: IconProps) {
      super(props)
  }
    getName = () => {
      const { type, size,loading,name } = this.props

    // let _className;
    let _name;
    debugger;
    if (size === 'small') {
      // _className = classnames(this.props.className, `${_prefixCls}-${this.props.type}-${this.props.size}`)
      _name = name;
    } else {
      // _className = classnames(this.props.className, `${_prefixCls}-${this.props.type}`)
      _name = `${name}2x`;
    }
    debugger;
    return _name
  }

  render() {
    let iconName =this.getName();
    
      return (
          <img src = {xiaoyou}  />
      )

  }
}

