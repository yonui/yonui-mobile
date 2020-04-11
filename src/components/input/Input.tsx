import React, { Component } from 'react'
import { InputItem } from 'antd-mobile'
import { InputItemPropsType } from 'antd-mobile/lib/input-item/PropsType'
import classnames from 'classnames'
import Wrapper from '../list-item-wrapper'
export interface InputProps extends InputItemPropsType, React.defaultProps {
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
    const { label, required, splitLine, className, singleLine, style, nid, uitype, ...other } = this.props
    const cls = classnames('mdf-input', className)
    const inputCls = classnames('mdf-input-content')
    return (
      <Wrapper className={cls} style={style} splitLine={splitLine} singleLine={singleLine} nid={nid} uitype={uitype} label={label} >
        <InputItem className={inputCls} {...other} labelNumber={0} />
      </Wrapper>
    )
  }
}
