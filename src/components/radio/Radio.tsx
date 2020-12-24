import React, { Component } from 'react'
import { Icon, Modal, Button } from 'antd-mobile'
import Wrapper, { getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
interface dataType { text: string, value: string, disabled?: boolean }
interface RadioProps extends React.defaultProps {
  mode?: 'tag' | 'list'
  canMultiple?: boolean // 支持多选
  label?: string
  onClick?: (data: dataType) => void
  onChange?: (selectedValue: string[], selectedData: dataType[]) => void
  dataSource?: dataType[] // Array<{key: string, label: string}>
  checkedValue?: string[]
  tagSize?: 'sm' | 'lg' | 'md' | 'default'
  labelStyle?: React.CSSProperties
  itemsStyle?: React.CSSProperties
  disabled?: boolean
  singleLine?: boolean
  splitLine?: boolean
  required?: boolean
  mReadOnly?: boolean
  model?: any
}
const TextString = {
  cancel: '取消',
  confirm: '确定',
  selected: '已选择',
  selectAll: '全选'
}
interface RadioState {
  _checkedData: { [key: string]: dataType }
  _checkedDataTemp: { [key: string]: dataType }
  open: boolean
}

// 转换state中存储的已选择数据的结构
const getValueFromDataType: (data: { [key: string]: dataType}) => [ string[], dataType[]] = (data) => {
  const _selectedValue: string[] = []
  const _selectedData: dataType[] = []
  Object.keys(data).forEach(item => {
    const _value = data[item]
    _value && _selectedValue.push(_value.value)
    _value && _selectedData.push(_value)
  })
  return [_selectedValue, _selectedData]
}

export default class RadioControl extends Component<RadioProps, RadioState> {
  constructor (props: RadioProps) {
    super(props)
    let { dataSource, checkedValue } = props
    if (checkedValue === []) {
      checkedValue = ['']
    }
    const checkedDataObj: { [key: string]: dataType } = {}
    dataSource && dataSource.forEach(item => {
      console.log(item.value)
      if (checkedValue?.includes(item.value)) {
        checkedDataObj[item.value] = item
      }
    })
    this.state = {
      _checkedData: checkedDataObj,
      _checkedDataTemp: checkedDataObj,
      open: false
    }
  }

  static defaultProps = {
    tagSize: 'default',
    disabled: false,
    mode: 'list'
  }

  onClickItem = (data: dataType, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, canMultiple?: boolean) => {
    e && e.stopPropagation()
    const { disabled, onChange, canMultiple: isMultiple, onClick } = this.props
    const { _checkedData, _checkedDataTemp } = this.state
    if (disabled) {
      return
    }
    let currentData: { [key: string]: dataType } = canMultiple ? _checkedDataTemp : _checkedData
    if (isMultiple) {
      if (currentData[data.value]) {
        delete currentData[data.value]
      } else {
        currentData = { ...currentData, [data.value]: data }
      }
    } else {
      if (currentData[data.value]) {
        delete currentData[data.value]
      } else {
        currentData = { [data.value]: data }
      }
    }
    if (canMultiple) {
      this.setState({
        _checkedDataTemp: currentData
      })
    } else {
      this.setState({
        _checkedData: currentData
      })
    }
    onClick && onClick(data)
    const _valueArr = getValueFromDataType(currentData)
    !canMultiple && onChange && onChange(_valueArr[0], _valueArr[1])
  }

  renderSelection = (selectData?: dataType[], selectedValue?: string[], tagSize?: 'sm' | 'md' | 'lg' | 'default') => {
    const { _checkedData } = this.state
    if (!selectData || !Array.isArray(selectData)) return null
    const _selectedValue = selectedValue ?? getValueFromDataType(_checkedData)[0]
    // const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    const { itemsStyle } = this.props
    return selectData.map((item, index) => {
      const cls = classnames(
        'radio-tag',
        `radio-tag-${tagSize}`,
        `${_selectedValue.includes(item.value) ? 'radio-tag-active' : 'radio-tag-normal'}`,
        {
          'radio-tag-disabled': this.props.mReadOnly || this.props.disabled || item.disabled
        }
      )
      return <div className={cls} key={index} onClick={() => { !(this.props.mReadOnly || item.disabled) && this.onClickItem(item) }} style={itemsStyle}>
        <div className='radio-tag-text'>{item.text}</div>
      </div>
    })
  }

  renderRaioList = (selectData?: dataType[], selectedValue?: string[]) => {
    if (!selectData || !Array.isArray(selectData)) return null
    const { canMultiple: isMultiple, itemsStyle } = this.props
    // const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    const { _checkedDataTemp } = this.state
    const _selectedValue = getValueFromDataType(_checkedDataTemp)[0]
    const checkedSty = {
      background: '#ee2233',
      borderRadius: '50%',
      padding: '0.05rem',
      paddingTop: '0.06rem',
      marginRight: '0.1rem'
    }
    const unCheckedSty = {
      background: '#fff',
      border: '1px solid #888',
      borderRadius: '50%',
      padding: '0.05rem',
      marginRight: '0.1rem'
    }
    const _list = selectData.map((item, index) => {
      const _checked = _selectedValue.includes(item.value)
      const cls = classnames('yonui-radio-list-content-item', {
        'yonui-radio-list-active': _checked,
        'yonui-radio-list-disabled': this.props.disabled || item.disabled
      })
      const onClickWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e && e.stopPropagation()
        if (item.disabled) return
        if (isMultiple) {
          this.onClickItem(item, e, true)
        } else {
          this.onClickItem(item, e)
          this.onCloseModal(e)
        }
      }
      const listItem = <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <Icon type='icon-yes' size='xs' color='#fff' style={_checked ? checkedSty : unCheckedSty} />
        {item.text}
      </div>
      return <Wrapper labelCls={cls} key={index} label={listItem} labelStyle={{ fontSize: '0.3rem' }} onClick={onClickWrapper} singleLine style={itemsStyle}>
        {/* {_checked ? <img src={selectedImg} style={{ width: '17px', height: '14px' }} /> : ''} */}
      </Wrapper>
    })

    return <div className='yonui-radio-list'>
      {isMultiple ? <div className='yonui-radio-list-header'>
        <span className='yonui-radio-list-header-btn-cancel' onClick={(e) => { this.onCloseModal(e) }}>
          <Icon type='icon-X' size='xxs' color='#111111' />
        </span>
      </div> : <div className='yonui-radio-list-header-empty'> </div>}
      <div className='yonui-radio-list-content'>
        {_list}
      </div>
      {isMultiple ? <div className='yonui-radio-list-footer'>
        <span className='yonui-radio-list-footer-btn-confirm' onClick={this.selectAll}>
          <Icon type='icon-yes' size='xs' color='#fff' style={_selectedValue.length === selectData.length ? checkedSty : unCheckedSty} />
          <span className='select-all-text'>{TextString.selectAll}</span>{TextString.selected}{_selectedValue.length}条
        </span>
        <Button size='small' type='primary' className='yonui-radio-list-footer-btn' onClick={this.onConfirm}>{TextString.confirm}</Button>
      </div> : null}
    </div>
  }

  onConfirm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.onCloseModal(e, true)
    const { onChange } = this.props
    const { _checkedDataTemp } = this.state
    const valueArr = getValueFromDataType(_checkedDataTemp)
    this.setState({
      _checkedData: _checkedDataTemp
    })
    onChange && onChange(valueArr[0], valueArr[1])
  }

  selectAll = () => {
    const { dataSource } = this.props
    const res: { [key: string]: dataType } = {}
    dataSource && dataSource.forEach(item => {
      !item.disabled && (res[item.value] = item)
    })
    this.setState({
      _checkedDataTemp: res
    })
  }

  onOpenModal = () => {
    const { _checkedData } = this.state
    this.setState({
      open: true,
      _checkedDataTemp: _checkedData
    })
  }

  onCloseModal = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, change?: boolean) => {
    e && e.stopPropagation()
    const { _checkedDataTemp } = this.state
    if (change) {
      this.setState({
        open: false,
        _checkedData: _checkedDataTemp
      })
    } else {
      this.setState({
        open: false
      })
    }
  }

  onClickIcon = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e && e.stopPropagation()
    this.onOpenModal()
  }

  renderContent = (dataSource?: dataType[], checkedValue?: string[], checkedData?: string[]) => {
    const { _checkedData } = this.state
    const { disabled, mReadOnly } = this.props
    const displayValue = getValueFromDataType(_checkedData)[1].map(item => item.text).join(',')
    const propsDisplayValue = this.getDisplayFromProps(dataSource, checkedValue)
    const fontCls = classnames('radio-items-selected-value', {
      'radio-items-selected-value-read-only': mReadOnly,
      'radio-items-selected-value-disabled': !mReadOnly && disabled
    })
    return <>
      <span className={fontCls}>{propsDisplayValue || displayValue}</span>
      {!disabled && !mReadOnly && <Icon className='radio-select-icon' type='right' color='#bfbfbf' onClick={this.onClickIcon} />}
    </>
  }

  getDisplayFromProps = (dataSource?: dataType[], checkedValue?: string[]) => {
    if (!checkedValue || checkedValue.length === 0) return null
    const res: string[] = []
    dataSource && dataSource.forEach(item => {
      if (checkedValue.includes(item.value)) {
        res.push(item.text)
      }
    })
    return res.join(',')
  }

  shouldComponentUpdate (nextProps) {
    // 查询方案中radio的checkedValue是undefined
    const withCheckedValue = this.props.checkedValue && nextProps.checkedValue
    let clearMultiple = false
    let clearSingle = false
    let newMultiple = false
    let newSingle = false
    if (withCheckedValue) {
      // 多选置空
      clearMultiple = this.props.checkedValue.length !== 0 && nextProps.checkedValue.length === 0
      // 单选置空
      clearSingle = this.props.checkedValue.length !== 0 && this.props.checkedValue[0] !== '' && nextProps.checkedValue.length !== 0 && nextProps.checkedValue[0] === ''
      // 多选新值
      newMultiple = this.props.checkedValue.length === 0 && nextProps.checkedValue.length !== 0
      // 单选新值
      newSingle = this.props.checkedValue.length !== 0 && this.props.checkedValue[0] === '' && nextProps.checkedValue.length !== 0 && nextProps.checkedValue[0] !== ''
    }
    if (clearMultiple || clearSingle) {
      this.setState({
        _checkedData: {},
        _checkedDataTemp: {}
      })
    }
    if (newMultiple || newSingle) {
      let { dataSource, checkedValue } = nextProps
      if (checkedValue === []) {
        checkedValue = ['']
      }
      const checkedDataObj: { [key: string]: dataType } = {}
      dataSource && dataSource.forEach(item => {
        // console.log(item.value)
        if (checkedValue?.includes(item.value)) {
          checkedDataObj[item.value] = item
        }
      })
      this.setState({
        _checkedData: checkedDataObj,
        _checkedDataTemp: checkedDataObj
      })
    }
    return true
  }

  render () {
    const { mode, dataSource, tagSize, className, singleLine, checkedValue, model } = this.props
    const { open } = this.state
    let radioArr: any
    switch (mode) {
      case 'tag': {
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
      case 'list': {
        radioArr = this.renderContent(dataSource, checkedValue)
        break
      }
      default: {
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
    }
    const cls = classnames(className, 'yonui-radio')
    const bIsNull = model?._get_data('bIsNull')
    const wrapperProps = getListItemProps(this.props, {
      className: cls,
      singleLine: singleLine,
      labelCls: 'yonui-radio-label',
      required: bIsNull === undefined ? undefined : !bIsNull
    })
    // if (bIsNull !== undefined) wrapperProps.notRequired = undefined
    // console.log('wrapperProps', wrapperProps)
    return (
      <Wrapper {...wrapperProps}>
        <div className='yonui-radio-items'>
          {radioArr}
        </div>
        <Modal
          visible={open}
          popup
          maskClosable
          onClose={() => { this.onCloseModal() }}
          animationType='slide-up'
          className='yonui-radio-modal'
          wrapClassName='yonui-radio-modal-wrap'
        >
          {this.renderRaioList(dataSource, checkedValue)}
        </Modal>
      </Wrapper>
    )
  }
}
