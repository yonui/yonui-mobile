import React, { Component } from 'react'
import { Radio, Icon } from 'antd-mobile'
import classnames from 'classnames'
type dataSourceType = Array<{ desc: string, value: string, disabled?: boolean }>
interface RadioProps extends React.defaultProps {
  mode?: 'default' | 'tag' | 'list'
  isMultiple?: boolean // 支持多选
  lines?: 'single' | 'multiple' | 'multiple-select'
  label?: string
  dataSource?: dataSourceType // Array<{key: string, label: string}>
  onChange?: (index: number, data: { desc: string, value: string, disabled?: boolean }) => void
  checkedValue?: string | string[]
  tagSize?: 'sm' | 'lg' | 'md' | 'default'
  labelWidth?: number
  labelStyle?: React.CSSProperties
  itemsStyle?: React.CSSProperties
  disabled?: boolean
}

interface RadioState {
  _checkedIndex: Set<number>
  open: boolean
}

export default class RadioControl extends Component<RadioProps, RadioState> {
  constructor (props: RadioProps) {
    super(props)
    this.state = {
      _checkedIndex: new Set(),
      open: false
    }
  }

  static defaultProps = {
    tagSize: 'default',
    disabled: false,
    lines: 'multiple-select'
  }

  onClickItem = (data: { desc: string, value: string, disabled?: boolean }, index: number, e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e && e.stopPropagation()
    const { disabled, onChange, isMultiple } = this.props
    const { _checkedIndex } = this.state
    console.log(data)
    if (disabled) {
      return
    }
    const currentIndex = isMultiple ? (_checkedIndex.delete(index) ? _checkedIndex : _checkedIndex.add(index)) : new Set([index])
    this.setState({
      _checkedIndex: currentIndex
    })
    onChange && onChange(index, data)
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
        'am-tag',
        'am-tag-default',
        `radio-tag-${tagSize}`,
        `${(selectedValue ? selectedValueSet.has(item.value) : _checkedIndex.has(index)) ? 'am-tag-active' : 'am-tag-normal'}`,
        {
          'radio-tag-disabled': this.props.disabled || item.disabled
        }

      )
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item, index) }}>
        <div className='am-tag-text'>{item.desc}</div>
      </div>
    })
  }

  renderRaioList = (selectData?: dataSourceType, selectedValue?: string | string[]) => {
    if (!selectData || !Array.isArray(selectData)) return null
    const selectedValueSet = typeof selectedValue === 'string' ? new Set([selectedValue]) : new Set(selectedValue)
    return selectData.map((item, index) => {
      const { _checkedIndex } = this.state
      const _checked = selectedValue ? selectedValueSet.has(item.value) : _checkedIndex.has(index)
      const cls = classnames('yonui-radio-list', {
        'yonui-radio-list-active': _checked,
        'yonui-radio-list-disabled': this.props.disabled || item.disabled
      })
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item, index) }}>
        {item.desc}
      </div>
    })
  }

  renderLabel = (label?: string, lines?: 'single' | 'multiple' | 'multiple-select', style?: React.CSSProperties) => {
    console.log('label is: ', label)
    switch (lines) {
      case 'multiple-select': {
        const { open, _checkedIndex } = this.state
        const { dataSource, checkedValue } = this.props
        const res: string[] = []
        if (checkedValue) {
          if (typeof checkedValue === 'string') {
            // eslint-disable-next-line no-unused-expressions
            dataSource?.forEach(item => {
              if (item.value === checkedValue) res.push(item.desc)
            })
          } else {
            // eslint-disable-next-line no-unused-expressions
            dataSource?.forEach(item => {
              if (checkedValue.indexOf(item.value) !== -1) res.push(item.desc)
            })
          }
        } else {
          Array.from(_checkedIndex).sort((a, b) => (a - b)).forEach(item => {
            dataSource && res.push(dataSource[item].desc)
          })
        }
        const displayValue = res.join(',')
        const clickOpen = () => {
          this.setState({
            open: !open
          })
        }
        return <div className='yonui-radio-label form-label' style={style}>
          {label}
          <div className='yonui-radio-label-extra' onClick={() => { clickOpen() }} >
            <span className='yonui-radio-label-extra-text'> {displayValue}</span>
            {open ? <Icon type='up'/> : <Icon type='down'/>}
          </div>
        </div>
      }
      case 'single':
      case 'multiple':
      default: {
        return <div className='yonui-radio-label form-label' style={style}>
          {label}
        </div>
      }
    }
  }

  renderContent = (content: any, lines?: 'single' | 'multiple' | 'multiple-select', style?: React.CSSProperties) => {
    switch (lines) {
      case 'multiple-select': {
        const { open } = this.state
        return <div className={`yonui-radio-items yonui-radio-items-${open ? 'open' : 'close'}`} style={style}>
          {content}
        </div>
      }
      case 'single':
      case 'multiple':
      default: {
        return <div className='yonui-radio-items' style={style}>
          {content}
        </div>
      }
    }
  }

  render () {
    const { mode, dataSource, checkedValue, label, tagSize, labelStyle = {}, itemsStyle = {}, lines, labelWidth = 20, onChange, className, ...other } = this.props
    let radioArr: any
    const _labelStyle: React.CSSProperties = { width: `${lines === 'single' ? labelWidth : 100}%` }
    const _itemsStyle: React.CSSProperties = { width: `${lines === 'single' ? 100 - (labelWidth - 0) : 100}%` }

    switch (mode) {
      case 'tag': {
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
      case 'list': {
        radioArr = this.renderRaioList(dataSource, checkedValue)
        break
      }
      case 'default':
      default: {
        radioArr = this.renderRadio(dataSource, checkedValue)
        break
      }
    }
    const cls = classnames(className, 'yonui-radio', `yonui-radio-${lines}`)
    return (
      <div {...other} className={cls}>
        {this.renderLabel(label, lines, { ..._labelStyle, ...labelStyle })}
        {this.renderContent(radioArr, lines, { ..._itemsStyle, ...itemsStyle })}
      </div>
    )
  }
}
