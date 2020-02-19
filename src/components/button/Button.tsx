import React from 'react'
import { Button } from 'antd-mobile'
import classnames from 'classnames'
export interface ButtonProps {
    prefixCls?: string
    type?: string
    size?: string
    loading?: boolean
    content?: React.ReactElement| string
    disabled?: boolean
    inline?: boolean
    ghost?: boolean
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
export default class mButton extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'am-button',
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
  renderButton = ()=> {
    const { type, size,loading,content, ghost, inline, disabled } = this.props
    if (size === 'large') {
      return
    } else {

    }
  }
  render() {
      return (
        <Button></Button>
      )
  }
}

