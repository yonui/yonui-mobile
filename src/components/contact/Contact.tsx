import React, { Component } from 'react'
import Wrapper from '../list-item-wrapper'
import Input from '../input-yonui'
import Icon from '../icon'
interface ContactProps {
  label?: string
  singleLine?: boolean
  area?: boolean
  mode?: 'telephone' | 'mobilephone' | 'email'
}
interface ContactState {
  country?: string
}
export default class Contact extends Component<ContactProps, ContactState> {
  static defaultProps = {
    label: '电话',
    singleLine: true,
    mode: 'telephone',
    area: false
  }

  state = {
    country: 'china'
  }

  getContent = (mode?: 'telephone' | 'mobilephone' | 'email', area?: boolean) => {
    switch (mode) {
      case 'email': {
        return <Input placeholder='name@yonyou.com'/>
      }
      case 'mobilephone': {
        const areaContact = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='yonui-contact-button'>中国</span>
            <Icon size='xxs' type='down'/>
            <span style={{ color: '#555555', fontSize: '15px', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px' }}>| +86</span>
            <Input style={{ width: '120px' }} placeholder='000 0000 0000'/>
          </div>)
        const contact = <Input style={{ width: '120px' }} placeholder='000 0000 0000'/>
        return area ? areaContact : contact
      }
      case 'telephone':
      default: {
        return <Input placeholder='座机号码-分机号码'/>
      }
    }
  }

  render () {
    const { label, singleLine, mode, area } = this.props
    const content = this.getContent(mode, area)
    return (
      <Wrapper label={label} singleLine={singleLine}>
        {content}
      </Wrapper>
    )
  }
}
