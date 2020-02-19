import React from 'react';
import { Button } from 'antd-mobile';
import classnames from 'classnames';
export interface ButtonProps {
    prefixCls?: string;
    className?: string;
    type?: string;
    size?: string;
    loading?: boolean;
    content?: React.ReactElement| string;
    disabled?: boolean;
    inline?: boolean;
    ghost?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
const _prefixCls='am-button';
export default class mButton extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: {_prefixCls},
    type: 'default',
    size: 'large',
    loading:false,// 是否显示加载图标
    content: <div>Button</div>,
    disabled: false,
    inline: false,
    ghost: false
  }
  constructor(props: ButtonProps) {
      super(props)
  }
    getClassName = () => {
      const { type, size,loading,content, ghost, inline, disabled } = this.props
   
    let _className;
    debugger;
    if (ghost) {
      return classnames(this.props.className, `${ _prefixCls}-ghost`)
    }
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
        <Button className = {_className}></Button>

      )
    
  }
}

