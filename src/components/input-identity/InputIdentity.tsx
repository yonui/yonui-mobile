import React, { Component } from 'react'
import Input from '../input-yonui'
interface InputIdentityProps {
  type?: 'idCard' | 'bankCard'
  value?: string
  singleAlignType?: string
  onChange?: (value?: string) => void
}
const regExpMap = {
  idCard: {
    finalPatternReg: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:(?:0[1-9])|(?:1[0-2]))(?:(?:[0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    inputPatternReg: /^[0-9xX]{0,18}$/,
    formatReg: /^(\d{6})(\d{8})?(\d{4})?$/g,
    unformatReg: /\s/g
  },
  bankCard: {
    finalPatternReg: /^[0-9]{0,20}$/,
    inputPatternReg: /^[0-9]{0,20}$/,
    formatReg: /\d{4}(?=\d+)/g,
    unformatReg: /\s/g
  }
}

export default class InputIdentity extends Component<InputIdentityProps> {
  constructor (props: InputIdentityProps) {
    super(props)
    this.state = {}
  }

  beforeInputRender = (type: 'idCard' | 'bankCard') => {
    switch (type) {
      case 'idCard':
      case 'bankCard': return (value: string) => {
        return value.replace(regExpMap[type].formatReg, '$& ')
      }
    }
  }

  afterInputRender = (type: 'idCard' | 'bankCard') => {
    switch (type) {
      case 'idCard':
      case 'bankCard':
      default: return (value: string) => {
        return value.replace(regExpMap[type].unformatReg, '')
      }
    }
  }

  render () {
    const { type = 'idCard', value, onChange, singleAlignType } = this.props
    const pattern = regExpMap[type].inputPatternReg
    const finalPattern = regExpMap[type].finalPatternReg
    return (
      <div className='yonui-input-identity'>
        <div className='yonui-input-identity-label form-label'>label</div>
        <div className='yonui-input-identity-label form-label'>{type}</div>
        <Input
          className='yonui-input-identity-input'
          type='text'
          value={value}
          pattern={pattern}
          finalPattern={finalPattern}
          onError={(val) => { console.log(val) }}
          textAlign={singleAlignType === 'right' ? 'right' : 'left'}
          beforeRender={this.beforeInputRender(type)}
          afterChange={this.afterInputRender(type)}
          onChange={onChange}
        />
      </div>
    )
  }
}
