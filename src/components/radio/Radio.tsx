import React, { Component } from 'react'
import { Radio, Icon, Modal, Button } from 'antd-mobile'
import Wrapper from '../list-item-wrapper'
import classnames from 'classnames'
import selectedImg from './style/selected.png'
type dataSourceType = Array<{ desc: string, value: string, disabled?: boolean }>
interface RadioProps extends React.defaultProps {
  mode?: 'tag' | 'list'
  isMultiple?: boolean // 支持多选
  // lines?: 'single' | 'multiple' | 'multiple-select'
  label?: string
  dataSource?: dataSourceType // Array<{key: string, label: string}>
  onClick?: (index: number, data: { desc: string, value: string, disabled?: boolean }) => void
  onChange?: (index: number, selectedValue: string[], selectedData: any) => void
  onConfirm?: (value: number[]) => void
  checkedValue?: string | string[] | {value: string} | Array<{value: string}>
  tagSize?: 'sm' | 'lg' | 'md' | 'default'
  labelWidth?: number
  labelStyle?: React.CSSProperties
  itemsStyle?: React.CSSProperties
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
  _checkedIndex: Set<number>
  _checkedIndexTemp: Set<number>
  open: boolean
}

export default class RadioControl extends Component<RadioProps, RadioState> {
  constructor (props: RadioProps) {
    super(props)
    this.state = {
      _checkedIndex: new Set(),
      _checkedIndexTemp: new Set(),
      open: false
    }
  }

  static defaultProps = {
    tagSize: 'default',
    disabled: false
    // lines: 'multiple-select'
  }

  onClickItem = (data: { desc: string, value: string, disabled?: boolean }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, temp?: boolean) => {
    e && e.stopPropagation()
    const { disabled, onChange, dataSource = [], isMultiple, onClick } = this.props
    const { _checkedIndex, _checkedIndexTemp } = this.state
    const cloneSet = temp ? new Set(Array.from(_checkedIndexTemp)) : new Set(Array.from(_checkedIndex))
    if (disabled) {
      return
    }
    const currentIndex = isMultiple ? (cloneSet.delete(index) ? cloneSet : cloneSet.add(index)) : new Set([index])
    if (temp) {
      this.setState({
        _checkedIndexTemp: currentIndex
      })
    } else {
      this.setState({
        _checkedIndex: currentIndex
      })
    }
    onClick && onClick(index, data)
    const _selectedValue: string[] = []
    const _selectedData: any[] = []
    Array.from(currentIndex).forEach(item => {
      _selectedValue.push(dataSource[item]?.value)
      _selectedData.push(dataSource[item])
    })
    onChange && onChange(index, _selectedValue, _selectedData)
  }

  renderRadio = (dataSource?: dataSourceType, selectedValue?: string | string[]) => {
    const { disabled } = this.props
    const { _checkedIndex } = this.state
    const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    if (!dataSource || !Array.isArray(dataSource)) return null
    return dataSource.map((item, index) => {
      const cls = classnames('yonui-radio-box', { 'yonui-radio-box-disabled': disabled || item.disabled })
      return <span key={index} className='yonui-radio-wrapper' onClick={(e) => { !item.disabled && this.onClickItem(item, index, e) }}><Radio className={cls} checked={selectedValue ? selectedValueSet.has(item.value) : _checkedIndex.has(index)} >{item.desc}</Radio></span>
    })
  }

  renderSelection = (selectData?: dataSourceType, selectedValue?: string | string[], tagSize?: 'sm' | 'md' | 'lg' | 'default') => {
    // const { } = this.props
    const { _checkedIndex } = this.state
    if (!selectData || !Array.isArray(selectData)) return null
    const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    return selectData.map((item, index) => {
      const cls = classnames(
        'radio-tag',
        // 'am-tag-default',
        `radio-tag-${tagSize}`,
        `${(selectedValue ? selectedValueSet.has(item.value) : _checkedIndex.has(index)) ? 'radio-tag-active' : 'radio-tag-normal'}`,
        {
          'radio-tag-disabled': this.props.disabled || item.disabled
        }

      )
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item, index) }}>
        <div className='radio-tag-text'>{item.desc}</div>
      </div>
    })
  }

  renderRaioList = (selectData?: dataSourceType, selectedValue?: string | string[]) => {
    if (!selectData || !Array.isArray(selectData)) return null
    const { isMultiple } = this.props
    const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    const { _checkedIndexTemp } = this.state
    const _list = selectData.map((item, index) => {
      const _checked = selectedValue ? selectedValueSet.has(item.value) : _checkedIndexTemp.has(index)
      const cls = classnames({
        'yonui-radio-list-active': _checked,
        'yonui-radio-list-disabled': this.props.disabled || item.disabled
      })
      const onClickWrapper = (e: any) => {
        if (item.disabled) return
        if (isMultiple) {
          this.onClickItem(item, index, e, true)
        } else {
          this.onClickItem(item, index)
          this.onCloseModal()
        }
      }
      return <Wrapper labelCls={cls} key={index} label={item.desc} onClick={ onClickWrapper} singleLine>
        { _checked ? <img src={selectedImg} style={{ width: '17px', height: '14px' }}/> : ''}
      </Wrapper>
    })
    return <div className='yonui-radio-list'>
      {isMultiple ? <div className='yonui-radio-list-header'>
        <span className='yonui-radio-list-header-btn-cancel' onClick={ () => { this.onCloseModal() }}>
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
          {TextString.selected} {_checkedIndexTemp.size}/{selectData.length}
        </div>
        <Button size='small' type='primary' className='yonui-radio-list-footer-btn' onClick={this.onConfirm}>{TextString.confirm}</Button>
      </div>}
    </div>
  }

  onConfirm = () => {
    this.onCloseModal(true)
    const { onConfirm } = this.props
    const { _checkedIndex } = this.state
    onConfirm && onConfirm(Array.from(_checkedIndex))
  }

  selectAll = () => {
    const { dataSource } = this.props
    // const length = dataSource?.map( (item, index) => index)
    const _temp = new Set(dataSource?.map((item, index) => !item.disabled ? index : -1))
    _temp.delete(-1)
    this.setState({
      _checkedIndexTemp: _temp
    })
  }

  // renderLabel = (label?: string, lines?: 'single' | 'multiple' | 'multiple-select', style?: React.CSSProperties) => {
  //   console.log('label is: ', label)
  //   switch (lines) {
  //     case 'multiple-select': {
  //       const { open, _checkedIndex } = this.state
  //       const { dataSource, checkedValue } = this.props
  //       const res: string[] = []
  //       if (checkedValue) {
  //         if (typeof checkedValue === 'string') {
  //           // eslint-disable-next-line no-unused-expressions
  //           dataSource?.forEach(item => {
  //             if (item.value === checkedValue) res.push(item.desc)
  //           })
  //         } else {
  //           // eslint-disable-next-line no-unused-expressions
  //           dataSource?.forEach(item => {
  //             if (checkedValue.indexOf(item.value) !== -1) res.push(item.desc)
  //           })
  //         }
  //       } else {
  //         Array.from(_checkedIndex).sort((a, b) => (a - b)).forEach(item => {
  //           dataSource && res.push(dataSource[item].desc)
  //         })
  //       }
  //       const displayValue = res.join(',')
  //       const clickOpen = () => {
  //         this.setState({
  //           open: !open
  //         })
  //       }
  //       return <div className='yonui-radio-label form-label' style={style}>
  //         {label}
  //         <div className='yonui-radio-label-extra' onClick={() => { clickOpen() }} >
  //           <span className='yonui-radio-label-extra-text'> {displayValue}</span>
  //           {open ? <Icon type='up' /> : <Icon type='down' />}
  //         </div>
  //       </div>
  //     }
  //     case 'single':
  //     case 'multiple':
  //     default: {
  //       return <div className='yonui-radio-label form-label' style={style}>
  //         {label}
  //       </div>
  //     }
  //   }
  // }

  onOpenModal = () => {
    const { _checkedIndex } = this.state
    this.setState({
      open: true,
      _checkedIndexTemp: _checkedIndex
    })
  }

  onCloseModal = (change?: boolean) => {
    const { _checkedIndexTemp } = this.state
    if (change) {
      this.setState({
        open: false,
        _checkedIndex: _checkedIndexTemp
      })
    } else {
      this.setState({
        open: false
      })
    }
  }

  renderContent = (dataSource?: dataSourceType, checkedValue?: string | string[]) => {
    const { _checkedIndex } = this.state
    const { disabled } = this.props
    if (disabled) return '不可选'
    const res: string[] = []
    if (checkedValue && typeof checkedValue === 'string') {
      // eslint-disable-next-line no-unused-expressions
      dataSource?.forEach(item => {
        if (item.value === checkedValue) res.push(item.desc)
      })
    } else if (checkedValue && Array.isArray(checkedValue) && checkedValue.length > 0) {
      // eslint-disable-next-line no-unused-expressions
      dataSource?.forEach(item => {
        if (checkedValue.indexOf(item.value) !== -1) res.push(item.desc)
      })
    } else {
      Array.from(_checkedIndex).sort((a, b) => (a - b)).forEach(item => {
        dataSource && res.push(dataSource[item].desc)
      })
    }
    const displayValue = res.join(',')
    return <React.Fragment>
      <span className='radio-items-selected-value'>{displayValue}</span>
      <Icon type='right' color='#BFBFBF' onClick={() => { this.onOpenModal() }} />
    </React.Fragment>
  }

  getCheckValue = () => {
    const { checkedValue } = this.props
    if (!checkedValue) return []
    if (Array.isArray(checkedValue)) {
      const res: string[] = []
      checkedValue.forEach((item: string | {value: string}) => {
        res.push(typeof item === 'string' ? item : item.value)
      })
      return res
    } else {
      return typeof checkedValue === 'string' ? [checkedValue] : [checkedValue.value]
    }
  }

  render () {
    const { mode, dataSource, label, tagSize, className, nid, uitype, splitLine, singleLine, required } = this.props
    const { open } = this.state
    const checkedValue = this.getCheckValue()
    let radioArr: any
    // const _labelStyle: React.CSSProperties = { width: `${lines === 'single' ? labelWidth : 100}%` }
    // const _itemsStyle: React.CSSProperties = { width: `${lines === 'single' ? 100 - (labelWidth - 0) : 100}%` }
    switch (mode) {
      case 'tag': {
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
      case 'list': {
        radioArr = this.renderContent(dataSource, checkedValue)
        // this.renderRaioList(dataSource, checkedValue)
        break
      }
      default: {
        // radioArr = this.renderSelection(dataSource, checkedValue)
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
    }
    const cls = classnames(className, 'yonui-radio')
    return (
      // <div {...other} className={cls}>
      //   {this.renderLabel(label, lines, { ..._labelStyle, ...labelStyle })}
      //   {this.renderContent(radioArr, lines, { ..._itemsStyle, ...itemsStyle })}
      // </div>
      <Wrapper className={cls} nid={nid} uitype={uitype} singleLine={singleLine || mode === 'list'} splitLine={splitLine} label={label} labelCls={'yonui-radio-label'} required={required}>
        {/* {this.renderContent(radioArr, lines)} */}
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
