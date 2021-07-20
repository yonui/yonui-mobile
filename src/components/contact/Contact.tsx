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
  bCanModify?: boolean
  notVerify?: boolean // 是否需要校验格式，暂时用于查询组件设置为true不需要校验
  visible?: boolean
}
interface ContactState {
  country?: string
  countryNum?: string
  open: boolean
  emailType: string
  _value: string
  exValue: string // 分机号
  error: boolean
}

const patternMap = {
  mobilePhone: {
    pattern: /^\d{0,11}$/
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
    emailDataSource: defaultEmailTypeDataSource,
    visible: true
  }

  constructor (props: ContactProps) {
    super(props)
    const { mode, area } = props
    const mobileWithArea = mode === 'mobilephone' && area
    this.state = {
      country: (mobileWithArea && this.valueAdapt(1, props.value)) || '中国',
      countryNum: (mobileWithArea && this.valueAdapt(0, props.value)) || '86',
      open: false,
      emailType: this.emailValueAdapt(1, props.value) || '@email.com',
      _value: this.valueAdapt(2, props.value),
      exValue: '',
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
    const { mode, area } = this.props
    if (mode === 'mobilephone') {
      if (value) {
        if (area) {
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
          return value
        }
      } else {
        return ''
      }
    }
    if (mode === 'telephone') {
      if (value) {
        let valueObj
        try {
          valueObj = JSON.parse(value)
        } catch (error) {
          valueObj = { T: '', L: '' }
        }
        if (index === 2) {
          return valueObj.T
        }
        return valueObj
      } else {
        return { T: '', L: '' }
      }
    } else {
      return this.emailValueAdapt(0, value)
    }
  }

  returnValueAdapt = (inputValue?: string) => {
    const { country, countryNum, emailType } = this.state
    const { mode, area, isSelect } = this.props
    if (mode === 'mobilephone') {
      if (area) {
        return `${countryNum}=${country}=${inputValue}`
      } else {
        return inputValue
      }
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
    if (this.props.notVerify) return
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
    onChange?.(returnValue)
    this.setState({
      _value: value
    })
  }

  telTextOnChange= (value: string) => {
    const { onChange } = this.props
    const { exValue } = this.state
    const returnValue = JSON.stringify({ T: value, L: exValue })
    console.log('tel', returnValue)
    onChange?.(returnValue)
    this.setState({
      _value: value
    })
  }

  exTextOnChange= (value: string) => {
    const { onChange } = this.props
    const { _value } = this.state
    const returnValue = JSON.stringify({ T: _value, L: value })
    console.log('ex', returnValue)
    onChange?.(returnValue)
    this.setState({
      exValue: value
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
    const { singleLine, value, required, disabled, mReadOnly, defaultValue, bIsNull, bCanModify } = this.props
    const _required = bIsNull !== undefined ? !bIsNull : required
    const { emailType, country, countryNum, _value } = this.state
    const val = value !== undefined ? this.valueAdapt(2, value) : _value
    const telValue = this.valueAdapt(0, value);
    const editable = !mReadOnly && !disabled
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
              mReadOnly={mReadOnly}
              disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
              defaultValue={defaultValue}
            />
            <span className='yonui-contact-button' onClick={() => { editable && this.onOpenModal() }}>
              {emailType}
              {editable && <Icon size='xxs' type='down' />}
            </span>
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
            mReadOnly={mReadOnly}
            disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
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
              mReadOnly={mReadOnly}
              disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
              defaultValue={defaultValue}
            />
            <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }} />
          </div>)
        const areaContact = (
          <div className='yonui-monile-contact-content area-phone'>
            <span className='yonui-contact-button' onClick={() => { editable && this.onOpenModal() }}>
              {country}
              {editable && <Icon size='xxs' type='down' />}
            </span>
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
            value={telValue.T}
            placeholder='座机号码'
            onChange={(value) => { this.telTextOnChange(value) }}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            {...patternMap.mobilePhone}
            onSuccess={this.onSuccess}
            onError={this.onError}
            required={_required}
            mReadOnly={mReadOnly}
            disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
            defaultValue={defaultValue}
            textAlign='right'
          />
          <span> - </span>
          <Input
            type='tel'
            value={telValue.L}
            placeholder='分机号码'
            onChange={(value) => { this.exTextOnChange(value) }}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            {...patternMap.mobilePhone}
            onSuccess={this.onSuccess}
            onError={this.onError}
            required={_required}
            mReadOnly={mReadOnly}
            disabled={disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)}
            defaultValue={defaultValue}
            style={{ width: '120px' }}
          />
          <img className='yonui-img-icon small' src={phoneIcon} onClick={() => { this.dailAction() }} />
        </div>)
        // const areaContact = (
        //   <div className='yonui-monile-contact-content'>
        //     <span className='yonui-contact-button' onClick={() => { this.onOpenModal() }}>{country}</span>
        //     <Icon size='xxs' type='down' />
        //     <span className='split-line' />
        //     <span className='phone-code'>{`+${countryNum}`}</span>
        //     {contact}
        //   </div>)
        return contact
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
    const { dataSource, mode, area, isSelect, emailDataSource, visible } = this.props
    const { open } = this.state
    const content = this.getContent(mode, area, isSelect)
    const wrapperProps = getListItemProps(this.props)
    let telContentStyle: React.CSSProperties
    if (mode === 'telephone') {
      telContentStyle = { width: '70%' }
    }
    if (!visible) return null
    return (
      <Wrapper {...wrapperProps} className='yonui-mobile-contact' contentStyle={telContentStyle}>
        {content}
        <Modal visible={open} popup maskClosable onClose={() => { this.onCloseModal() }} animationType='slide-up' className='yonui-contact-modal'>
          {(mode === 'email') ? this.renderEmailList(emailDataSource || defaultEmailTypeDataSource) : this.renderAreaList(dataSource || defaultDataSource)}
        </Modal>
      </Wrapper>
    )
  }
}
