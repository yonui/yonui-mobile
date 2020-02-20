import React from 'react'
import { Button } from 'antd-mobile'
export interface ButtonProps {
    prefixCls?: string;
    className?: string;
    type?: string;
    size?: string;
    loading?: boolean;
    content?: React.ReactElement | string;
    disabled?: boolean;
    inline?: boolean;
    ghost?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export default class MDFButton extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'am-button',
    type: 'default',
    size: 'large',
    loading: false, // 是否显示加载图标
    content: 'Button',
    disabled: false,
    inline: false,
    ghost: false
  }
  constructor(props: ButtonProps) {
    super(props)
  }
  render() {
    return (
      <Button { ...this.props}>
        {this.props.content || this.props.children}
      </Button>
    )
  }
}
