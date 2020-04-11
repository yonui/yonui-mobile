import React, { Component } from 'react'
import { InputItem } from 'antd-mobile'
import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import classnames from 'classnames'
import Wrapper from '../list-item-wrapper'
export interface InputProps extends InputItemPropsType {
  label?: string
  required?: boolean
  splitLine?: boolean
  className?: string
  style?: React.CSSProperties
  singleLine?: boolean
}
export default class Input extends Component<InputProps> {
  constructor (props: InputProps) {
    super(props)
    this.state = {}
  }

  static defaultProps = {
    // singleLine: false
  }

  render () {
    const { label, required, splitLine, className, singleLine, style, ...other } = this.props
    const cls = classnames('mdf-input', className, `${singleLine ? 'single-line' : 'multi-line'}`)
    const labelCls = classnames('mdf-input-label', 'form-label', { required })
    const inputCls = classnames('mdf-input-content')
    return (
      <Wrapper className={cls} style={style} splitLine={splitLine} {...other}>
        <div className={labelCls}>{label}</div>
        <InputItem className={inputCls} {...other} labelNumber={0} />
      </Wrapper>
    )
  }
}
