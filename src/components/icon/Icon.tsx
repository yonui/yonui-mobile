import React from 'react';
import { Icon } from 'antd-mobile';
import classnames from 'classnames';
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
    getClassName = () => {
      const { type, size,loading,name } = this.props
   
    let _className;
    debugger;
    if (size === 'small') {
      _className = classnames(this.props.className, `${_prefixCls}-${this.props.type}-${this.props.size}`)
    } else {
      _className = classnames(this.props.className, `${_prefixCls}-${this.props.type}`)
    }
    debugger;
    return _className
  }

  render() {
    let _className =this.getClassName();
      return (
        <Icon className = {_className}>
          {this.props.children}
        </Icon>

      )
    
  }
}

