import React, { Component } from 'react'
import Wrapper, { getListItemProps } from '../list-item-wrapper'
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
  onBlur?: (value: string) => void
  onFocus?: (value: string) => void
  required?: boolean
  bIsNull?: boolean
  defaultValue?: string
  value?: string
  disabled?: boolean
}
interface ContactState {
  country?: string
  countryNum?: string
  open: boolean
  emailType: string
  _value: string
  error: boolean
}

const patternMap = {
  mobilePhone: {
    pattern: /^\d{0,11}$/,
    finalPattern: /^1[345678]\d{9}$/
  }
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
      country: this.valueAdapt(1, props.value) || '中国',
      countryNum: this.valueAdapt(0, props.value) || '86',
      open: false,
      emailType: this.emailValueAdapt(1, props.value) || '@email.com',
      _value: this.valueAdapt(2, props.value),
      error: false
    }
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.value === undefined && nextProps.value) {
      this.setState({
        country: this.valueAdapt(1, nextProps.value) || '中国',
        countryNum: this.valueAdapt(0, nextProps.value) || '+86',
        _value: this.valueAdapt(2, nextProps.value),
        emailType: this.emailValueAdapt(1, nextProps.value)
      })
    }
    return true
  }

  valueAdapt = (index?: number, value?: string) => {
    const { mode } = this.props
    if (mode === 'telephone' || mode === 'mobilephone') {
      if (value) {
        const valueArray = value.split('=')
        if (valueArray.length > 0) {
          switch (index) {
            case 0:
              return valueArray[0]
            case 1:
              return valueArray[1]
            case 2:
              return valueArray[2]
            default:
              return valueArray[2]
          }
        } else {
          return ''
        }
      } else {
        return ''
      }
    } else {
      return this.emailValueAdapt(0, value)
    }
  }

  returnValueAdapt = (inputValue?: string) => {
    const { country, countryNum, emailType } = this.state
    const { mode, isSelect } = this.props
    if (mode === 'telephone' || mode === 'mobilephone') {
      return `${countryNum}=${country}=${inputValue}`
    } else {
      if (isSelect) {
        return `${inputValue}${emailType}`
      } else {
        return inputValue
      }
    }
  }

  emailValueAdapt = (index?: number, value?: string) => {
    const { isSelect } = this.props
    if (isSelect) {
      if (value) {
        const valueArray = value.split('@')
        if (valueArray.length > 0) {
          switch (index) {
            case 0:
              return valueArray[0]
            case 1:
              return `@${valueArray[1]}`
          }
          return valueArray[index]
        } else {
          return value
        }
      } else {
        return ''
      }
    } else {
      return value
    }
  }

  onOpenModal = () => {
    this.setState({
      open: true
    })
  }

  onError = () => {
    this.setState({
      error: true
    })
  }

  onSuccess = () => {
    this.setState({
      error: false
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
    const { onChange } = this.props
    const returnValue = this.returnValueAdapt(value)
    console.log('dddd', returnValue);
    onChange?.(returnValue)
    this.setState({
      _value: value
    })
  }

  _onFocus = (val: string) => {
    const { onFocus } = this.props
    const returnValue = this.returnValueAdapt(val)
    onFocus?.(returnValue)
  }

  _onBlur = (val: string) => {
    const { onBlur } = this.props
    const returnValue = this.returnValueAdapt(val)
    onBlur?.(returnValue)
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
        const message = err.message // 错误信息
        console.log(message)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  getContent = (mode?: 'telephone' | 'mobilephone' | 'email', area?: boolean, isSelectEmail?: boolean) => {
    const { singleLine, value, required, disabled, defaultValue, bIsNull } = this.props
    const _required = bIsNull !== undefined ? bIsNull : required
    const { emailType, country, countryNum, _value } = this.state
    const val = value !== undefined ? this.valueAdapt(2, value) : _value
    switch (mode) {
      case 'email': {
        const inputTextAlign = singleLine ? 'right' : 'left'
        const selectEmail = (
          <div className='yonui-monile-contact-content e-mail'>
            <Input
              textAlign={inputTextAlign}
              placeholder='name'
              onChange={(value) => { this.textOnChange(value) }}
              onBlur={this._onBlur}
              onFocus={this._onFocus}
              value={val}
              onSuccess={this.onSuccess}
              onError={this.onError}
              required={_required}
              disabled={disabled}
              defaultValue={defaultValue}
            />
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{emailType}</span>
            <Icon type='down' />
          </div>)
        const email = (
          <Input
            textAlign={inputTextAlign}
            placeholder='name@email.com'
            onChange={(value) => { this.textOnChange(value) }}
            onSuccess={this.onSuccess}
            onError={this.onError}
            value={val}
            required={_required}
            disabled={disabled}
            defaultValue={defaultValue}
          />)
        return isSelectEmail ? selectEmail : email
      }
      case 'mobilephone': {
        const contact = (
          <div className='yonui-monile-contact-content mobile-phone'>
            <Input
              type='tel'
              placeholder='000 0000 0000'
              value={val}
              onChange={(value) => { this.textOnChange(value) }}
              onBlur={this._onBlur}
              onFocus={this._onFocus}
              {...patternMap.mobilePhone}
              onSuccess={this.onSuccess}
              onError={this.onError}
              required={_required}
              disabled={disabled}
              defaultValue={defaultValue}
            />
            <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }} />
          </div>)
        const areaContact = (
          <div className='yonui-monile-contact-content area-phone'>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{country}</span>
            <Icon size='xxs' type='down' />
            <span className='split-line' />
            <span className='phone-code'>{`+${countryNum}`}</span>
            {contact}
          </div>)
        return area ? areaContact : contact
      }
      case 'telephone': {
        const contact = (<div className='yonui-monile-contact-content telephone'>
          <Input
            type='tel'
            value={val}
            placeholder='座机号码-分机号码'
            onChange={(value) => { this.textOnChange(value) }}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            onSuccess={this.onSuccess}
            onError={this.onError}
            required={_required}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }} />
        </div>)
        const areaContact = (
          <div className='yonui-monile-contact-content'>
            <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{country}</span>
            <Icon size='xxs' type='down' />
            <span className='split-line' />
            <span className='phone-code'>{`+${countryNum}`}</span>
            {contact}
          </div>)
        return area ? areaContact : contact
      }
    }
  }

  onClickAreaItem = (data: { short: string, name: string, en: string, tel: string, pinyin: string }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e?.stopPropagation()
    const { onChange } = this.props
    const { dataSource = [] } = this.props
    const { _value } = this.state
    const item = dataSource[index]
    const returnValue = `${item.tel}=${item.name}=${_value}`
    console.log('mmmd', returnValue);
    onChange?.(returnValue)
    this.setState({
      country: item.name,
      countryNum: item.tel
    })
  }

  onClickEmailItem = (data: { type: string }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e?.stopPropagation()
    const { onChange } = this.props
    const { _value } = this.state
    const item = defaultEmailTypeDataSource[index]
    const returnValue = `${_value}${item.type}`
    onChange?.(returnValue)
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
      return <Wrapper key={index} label={item.name} onClick={onClickWrapper} singleLine>
        {item.tel}
      </Wrapper>
    })
    return <div className='yonui-contact-list'>
      <div className='yonui-contact-list-content'>
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
      return <Wrapper key={index} label={item.type} onClick={onClickWrapper} singleLine />
    })
    return <div className='yonui-contact-list'>
      <div className='yonui-contact-list-content'>
        {_list}
      </div>
    </div>
  }

  render () {
    const { dataSource, mode, area, isSelect, emailDataSource} = this.props
    const { open, error } = this.state
    const content = this.getContent(mode, area, isSelect)
    const wrapperProps = getListItemProps(this.props, { error })
    return (
      <Wrapper {...wrapperProps} className='yonui-mobile-contact'>
        {content}
        <Modal visible={open} popup maskClosable onClose={() => { this.onCloseModal() }} animationType='slide-up' className='yonui-contact-modal'>
          {(mode === 'email') ? this.renderEmailList(emailDataSource || defaultEmailTypeDataSource) : this.renderAreaList(dataSource || defaultDataSource)}
        </Modal>
      </Wrapper>
    )
  }
}
