import React, { Component } from 'react'
import Wrapper from '../list-item-wrapper'
import Input from '../input-yonui'
import Icon from '../icon'
import { Modal } from 'antd-mobile'
type dataSourceType = Array<{ area: string, value: string}>
const defaultDataSource = [{ area: '中国', value: '+86' }, { area: '中国台湾', value: '+886' }, { area: '中国香港', value: '+852' }, { area: '澳门', value: '+853' }]

interface ContactProps {
  label?: string
  singleLine?: boolean
  area?: boolean
  mode?: 'telephone' | 'mobilephone' | 'email'
  dataSource?: dataSourceType
}
interface ContactState {
  country?: string
  countryNum?: string
  open: boolean
}
export default class Contact extends Component<ContactProps, ContactState> {
  static defaultProps = {
    label: '电话',
    singleLine: true,
    mode: 'telephone',
    area: false,
    dataSource: defaultDataSource,
    open: false
  }

  constructor (props: ContactProps) {
    super(props)
    this.state = {
      country: '中国',
      countryNum: '+86',
      open: false
    }
  }

  onOpenModal = () => {
    this.setState({
      open: true
    })
  }

  onCloseModal = (change?: boolean) => {
    if (change) {
      this.setState({
        open: false
      })
    } else {
      this.setState({
        open: false
      })
    }
  }

  getContent = (mode?: 'telephone' | 'mobilephone' | 'email', area?: boolean) => {
    switch (mode) {
      case 'email': {
        return <Input placeholder='name@yonyou.com'/>
      }
      case 'mobilephone': {
        const areaContact = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{this.state.country}</span>
            <Icon size='xxs' type='down'/>
            <span style={{ background: '#E6E6E6', display: 'block', width: '0.5px', height: '14px', marginLeft: '4px'}}></span>
            <span style={{ color: '#555555', fontSize: '15px', paddingTop: '1px', marginLeft: '8px', marginRight: '4px' }}>{this.state.countryNum}</span>
            <Input type='tel' style={{ width: '120px' }} placeholder='000 0000 0000'/>
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

  onClickItem = (data: { area: string, value: string }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e && e.stopPropagation()
    const { dataSource = [] } = this.props
    const item = dataSource[index]
    this.setState({
      country: item.area,
      countryNum: item.value
    })
  }

  renderAreaList = (dataSource?: dataSourceType) => {
    if (!dataSource || !Array.isArray(dataSource)) return null
    const _list = dataSource.map((item, index) => {
      const onClickWrapper = (e: any) => {
        this.onClickItem(item, index)
        this.onCloseModal()
      }
      return <Wrapper key={index} label={item.area} onClick={ onClickWrapper} singleLine>
        {item.value}
      </Wrapper>
    })
    return <div className='yonui-radio-list'>
      <div className='yonui-radio-list-content'>
        {_list}
      </div>
    </div>
  }

  render () {
    const { label, dataSource, singleLine, mode, area } = this.props
    const { open } = this.state
    const content = this.getContent(mode, area)
    return (
      <Wrapper label={label} singleLine={singleLine}>
        {content}
        <Modal visible={open} popup maskClosable onClose={ () => { this.onCloseModal() }} animationType='slide-up' className='yonui-radio-modal'>
          {this.renderAreaList(dataSource)}
        </Modal>
      </Wrapper>
    )
  }
}
