import React, { Component } from 'react'
import Wrapper from '../list-item-wrapper'
interface ContactProps {
  label?: string
  singleLine?: boolean
  mode?: 'telephone' | 'mobilephone' | 'email'
}
interface ContactState {
  country?: string
}
export default class Contact extends Component<ContactProps, ContactState> {
  static defaultProps = {
    label: '电话',
    singleLine: true,
    mode: 'telephone'
  }

  state = {
    country: 'china'
  }

  getContent = (mode?: 'telephone' | 'mobilephone' | 'email') => {
    switch (mode) {
      case 'email': {
        return null
      }
      case 'mobilephone': {
        return null
      }
      case 'telephone':
      default: {
        return null
      }
    }
  }

  render () {
    const { label, singleLine, mode } = this.props
    const content = this.getContent(mode)
    return (
      <Wrapper label={label} singleLine={singleLine}>
        {content}
      </Wrapper>
    )
  }
}
