import React, { Component } from 'react'
import Wrapper from '../list-item-wrapper'
import Input from '../input-yonui'
import Icon from '../icon'
import { Modal } from 'antd-mobile'
import { defaultDataSource, defaultEmailTypeDataSource } from './datasource'
import phoneIcon from './style/dianhua.png'
type dataSourceType = Array<{ short: string, name: string, en: string, tel: string, pinyin: string }>
type emailType = Array<{type: string}>

interface ContactProps extends React.defaultProps, React.inputItemProps{
  label?: string
  singleLine?: boolean
  area?: boolean // 是否选择国际区号
  isSelect?: boolean // 是否选择邮箱后缀
  mode?: 'telephone' | 'mobilephone' | 'email'
  dataSource?: dataSourceType
  emailDataSource?: emailType
  onChange?: (value: string) => void
  value?: string
}
interface ContactState {
  country?: string
  countryNum?: string
  open: boolean
  emailType: string
  _value: string
}

export default class Contact extends Component<ContactProps, ContactState> {
  static defaultProps = {
    label: '电话',
    singleLine: true,
    mode: 'telephone',
    area: false,
    dataSource: defaultDataSource,
    open: false,
    isSelectEmail: false,
    emailDataSource: defaultEmailTypeDataSource
  }

  constructor (props: ContactProps) {
    super(props)
    this.state = {
      country: '中国',
      countryNum: '+86',
      open: false,
      emailType: '@yonyou.com',
      _value: props.value || ''
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

  textOnChange= (value: string) => {
    console.log(value)
    const { onChange } = this.props
    onChange && onChange(value)
    this.setState({
      _value: value
    })
  }

  dailAction = () => {
    const { mode, area } = this.props
    const { countryNum, _value } = this.state
    const countrynum = (mode !== 'email' && area) ? countryNum : ''
    const phoneNum = `${countrynum}${_value}`
    window.mtl.dail({
      ...{
        number: phoneNum
      },
      success: function (res: any) {
        console.log('success')
      },
      fail: function (err: any) {
        var message = err.message // 错误信息
        console.log(message)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  getContent = (mode?: 'telephone' | 'mobilephone' | 'email', area?: boolean, isSelectEmail?: boolean) => {
    const { onChange, singleLine, value } = this.props
    const { emailType, country, countryNum, _value } = this.state
    const val = value !== undefined ? value : _value
    switch (mode) {
      case 'email': {
        const inputTextAlign = singleLine ? 'right' : 'left'
        const selectEmail = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input textAlign={inputTextAlign} placeholder='name' onChange={onChange} value={val}/>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{emailType}</span>
            <Icon type='down'/>
          </div>)
        const email = <Input textAlign={inputTextAlign} placeholder='name@yonyou.com' onChange={onChange}/>
        return isSelectEmail ? selectEmail : email
      }
      case 'mobilephone': {
        const contact = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input type='tel' style={{ width: '120px' }} placeholder='000 0000 0000' value={val} onChange={(value) => { this.textOnChange(value) } }/>
            <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }}/>
          </div>)
        const areaContact = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{country}</span>
            <Icon size='xxs' type='down'/>
            <span style={{ background: '#E6E6E6', display: 'block', width: '1px', height: '14px', marginLeft: '4px' }}></span>
            <span style={{ color: '#555555', fontSize: '15px', paddingTop: '1px', marginLeft: '8px', marginRight: '4px' }}>{countryNum}</span>
            {contact}
          </div>)
        return area ? areaContact : contact
      }
      case 'telephone': {
        const contact = (<div style={{ display: 'flex', alignItems: 'center' }}>
          <Input type='tel' style={{ width: '140px' }} value={val} placeholder='座机号码-分机号码' onChange={(value) => { this.textOnChange(value) }}/>
          <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }}/>
        </div>)
        const areaContact = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{country}</span>
            <Icon size='xxs' type='down'/>
            <span style={{ background: '#E6E6E6', display: 'block', width: '1px', height: '14px', marginLeft: '4px' }}></span>
            <span style={{ color: '#555555', fontSize: '15px', paddingTop: '1px', marginLeft: '8px', marginRight: '4px' }}>{countryNum}</span>
            {contact}
          </div>)
        return area ? areaContact : contact
      }
    }
  }

  onClickAreaItem = (data: { short: string, name: string, en: string, tel: string, pinyin: string }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e && e.stopPropagation()
    const { dataSource = [] } = this.props
    const item = dataSource[index]
    this.setState({
      country: item.name,
      countryNum: item.tel
    })
  }

  onClickEmailItem = (data: { type: string }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e && e.stopPropagation()
    const item = defaultEmailTypeDataSource[index]
    this.setState({
      emailType: item.type
    })
  }

  renderAreaList = (dataSource?: dataSourceType) => {
    if (!dataSource || !Array.isArray(dataSource)) return null
    const _list = dataSource.map((item, index) => {
      const onClickWrapper = (e: any) => {
        this.onClickAreaItem(item, index)
        this.onCloseModal()
      }
      return <Wrapper key={index} label={item.name} onClick={ onClickWrapper} singleLine>
        {item.tel}
      </Wrapper>
    })
    return <div className='yonui-radio-list'>
      <div className='yonui-radio-list-content' style={{ height: '308px', overflow: 'auto' }}>
        {_list}
      </div>
    </div>
  }

  renderEmailList = (dataSource?: emailType) => {
    if (!dataSource || !Array.isArray(dataSource)) return null
    const _list = dataSource.map((item, index) => {
      const onClickWrapper = (e: any) => {
        this.onClickEmailItem(item, index)
        this.onCloseModal()
      }
      return <Wrapper key={index} label={item.type} onClick={ onClickWrapper} singleLine>
      </Wrapper>
    })
    return <div className='yonui-radio-list'>
      <div className='yonui-radio-list-content' style={{ height: '308px', overflow: 'auto' }}>
        {_list}
      </div>
    </div>
  }

  render () {
    const { label, dataSource, singleLine, mode, area, isSelect, emailDataSource, splitLine, required } = this.props
    const { open } = this.state
    const content = this.getContent(mode, area, isSelect)
    return (
      <Wrapper label={label} singleLine={singleLine} splitLine={splitLine} required={required}>
        {content}
        <Modal visible={open} popup maskClosable onClose={ () => { this.onCloseModal() }} animationType='slide-up' className='yonui-radio-modal'>
          { (mode === 'email') ? this.renderEmailList(emailDataSource) : this.renderAreaList(dataSource)}
        </Modal>
      </Wrapper>
    )
  }
}
