import React, { Component } from 'react'
import { Icon, Modal, Button } from 'antd-mobile'
import Wrapper from '../list-item-wrapper'
import classnames from 'classnames'
import selectedImg from './style/selected.png'
interface dataType { text: string, value: string, disabled?: boolean }
interface RadioProps extends React.defaultProps {
  mode?: 'tag' | 'list'
  isMultiple?: boolean // 支持多选
  // lines?: 'single' | 'multiple' | 'multiple-select'
  label?: string
  onClick?: (data: dataType) => void
  onChange?: (selectedValue: string[], selectedData: dataType[]) => void
  dataSource?: dataType[] // Array<{key: string, label: string}>
  checkedValue?: string[]
  tagSize?: 'sm' | 'lg' | 'md' | 'default'
  labelStyle?: React.CSSProperties
  // itemsStyle?: React.CSSProperties
  disabled?: boolean
  singleLine?: boolean
  splitLine?: boolean
  required?: boolean
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
    const { dataSource, checkedValue } = props
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
    disabled: false
  }

  onClickItem = (data: dataType, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, multiple?: boolean) => {
    e && e.stopPropagation()
    const { disabled, onChange, isMultiple, onClick } = this.props
    const { _checkedData, _checkedDataTemp } = this.state
    if (disabled) {
      return
    }
    let currentData: { [key: string]: dataType } = multiple ? _checkedDataTemp : _checkedData
    if (isMultiple) {
      if (currentData[data.value]) {
        delete currentData[data.value]
      } else {
        currentData = { ...currentData, [data.value]: data }
      }
    } else {
      currentData = { [data.value]: data }
    }
    if (multiple) {
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
    !multiple && onChange && onChange(_valueArr[0], _valueArr[1])
  }

  renderSelection = (selectData?: dataType[], selectedValue?: string[], tagSize?: 'sm' | 'md' | 'lg' | 'default') => {
    const { _checkedData } = this.state
    if (!selectData || !Array.isArray(selectData)) return null
    const _selectedValue = selectedValue ?? getValueFromDataType(_checkedData)[0]
    // const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    return selectData.map((item, index) => {
      const cls = classnames(
        'radio-tag',
        `radio-tag-${tagSize}`,
        `${_selectedValue.includes(item.value) ? 'radio-tag-active' : 'radio-tag-normal'}`,
        {
          'radio-tag-disabled': this.props.disabled || item.disabled
        }
      )
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item) }}>
        <div className='radio-tag-text'>{item.text}</div>
      </div>
    })
  }

  renderRaioList = (selectData?: dataType[], selectedValue?: string[]) => {
    if (!selectData || !Array.isArray(selectData)) return null
    const { isMultiple } = this.props
    // const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    const { _checkedDataTemp } = this.state
    const _selectedValue = selectedValue ?? getValueFromDataType(_checkedDataTemp)[0]
    const _list = selectData.map((item, index) => {
      const _checked = _selectedValue.includes(item.value)
      const cls = classnames({
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
      return <Wrapper labelCls={cls} key={index} label={item.text} onClick={ onClickWrapper} singleLine>
        { _checked ? <img src={selectedImg} style={{ width: '17px', height: '14px' }}/> : ''}
      </Wrapper>
    })
    return <div className='yonui-radio-list'>
      {isMultiple ? <div className='yonui-radio-list-header'>
        <span className='yonui-radio-list-header-btn-cancel' onClick={ (e) => { this.onCloseModal(e) }}>
          {TextString.cancel}
        </span>
        <span className='yonui-radio-list-header-btn-confirm' onClick={ this.selectAll}>
          {TextString.selectAll}
        </span>
      </div> : <div className='yonui-radio-list-header-empty'> </div>}
      <div className='yonui-radio-list-content'>
        {_list}
      </div>
      {isMultiple && <div className='yonui-radio-list-footer'>
        <div className='yonui-radio-list-footer-data'>
          {TextString.selected} {_selectedValue.length}/{selectData.length}
        </div>
        <Button size='small' type='primary' className='yonui-radio-list-footer-btn' onClick={this.onConfirm}>{TextString.confirm}</Button>
      </div>}
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

  renderContent = (dataSource?: dataType[], checkedValue?: string | string[], checkedData?: string[]) => {
    const { _checkedData } = this.state
    const { disabled } = this.props
    const displayValue = getValueFromDataType(_checkedData)[1].map(item => item.text).join(',')
    const fontCls = classnames('radio-items-selected-value', {
      'radio-items-selected-value-disabled': disabled
    })
    return <React.Fragment>
      <span className={fontCls}>{displayValue}</span>
      { !disabled && <Icon type='right' color='#BFBFBF' onClick={this.onClickIcon} />}
    </React.Fragment>
  }

  render () {
    const { mode, dataSource, label, tagSize, className, nid, uitype, splitLine, singleLine, required, checkedValue, style } = this.props
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
    return (
      <Wrapper className={cls} nid={nid} uitype={uitype}
        singleLine={singleLine || mode === 'list'} splitLine={splitLine} label={label}
        labelCls={'yonui-radio-label'} required={required} style={style}>
        <div className='yonui-radio-items'>
          {radioArr}
        </div>
        <Modal visible={open} popup maskClosable onClose={ () => { this.onCloseModal() }} animationType='slide-up' className='yonui-radio-modal'>
          {this.renderRaioList(dataSource, checkedValue)}
        </Modal>
      </Wrapper>
    )
  }
}
