import React, { Component } from 'react'
import { Radio } from 'antd-mobile'
import classnames from 'classnames'
interface RadioProps extends React.defaultProps {
  mode?: 'default' | 'tag' | 'item' | 'tag-single'
  label?: string
  dataSource?: Array<{ desc: string, value: string, disabled?: boolean }> // Array<{key: string, label: string}>
  onChange?: (index: number, data: { desc: string, value: string, disabled?: boolean }) => void
  checkedValue?: string
  tagSize?: 'sm' | 'lg' | 'md' | 'default'
  labelWidth?: number
  labelStyle?: React.CSSProperties
  itemsStyle?: React.CSSProperties
  disabled?: boolean
}

interface RadioState {
  _checkedIndex?: number
}

export default class RadioControl extends Component<RadioProps, RadioState> {
  constructor (props: RadioProps) {
    super(props)
    this.state = {
    }
  }

  static defaultProps = {
    tagSize: 'default',
    disabled: false
  }

  onClickItem = (data: { desc: string, value: string, disabled?: boolean }, index: number) => {
    // e.preventDefault()
    // e.stopPropagation()
    const { disabled, onChange } = this.props
    console.log(data)
    if (disabled) {
      return
    }
    this.setState({
      _checkedIndex: index
    })
    onChange && onChange(index, data)
  }

  renderSelection = (selectData?: Array<{ desc: string, value: string, disabled?: boolean}>, selectedValue?: string, tagSize?: 'sm' | 'md' | 'lg' | 'default') => {
    // const { } = this.props
    const { _checkedIndex } = this.state
    if (!selectData || !Array.isArray(selectData)) return null
    return selectData.map((item, index) => {
      const cls = classnames(
        'radio-tag',
        'am-tag',
        'am-tag-default',
        `radio-tag-${tagSize}`,
        `${(selectedValue ? item.value === selectedValue : _checkedIndex === index) ? 'am-tag-active' : 'am-tag-normal'}`,
        {
          'radio-tag-disabled': this.props.disabled || item.disabled
        }

      )
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item, index) }}>
        <div className='am-tag-text'>{item.desc}</div>
      </div>
    })
  }

  renderRaioItem = (selectData?: Array<{ desc: string, value: string, disabled?: boolean }>, selectedValue?: string) => {
    if (!selectData || !Array.isArray(selectData)) return null
    return selectData.map((item, index) => {
      const { _checkedIndex } = this.state
      const _checked = selectedValue ? selectedValue === item.value : _checkedIndex === index
      const cls = classnames('yonui-radio-item', {
        'yonui-radio-item-active': _checked,
        'yonui-radio-item-disabled': this.props.disabled || item.disabled
      })
      return <div className={cls} key={index} onClick={() => { !item.disabled && this.onClickItem(item, index) }}>
        {item.desc}
      </div>
    })
  }

  render () {
    const { mode, dataSource, checkedValue, label, tagSize, labelWidth = 10, labelStyle = {}, itemsStyle = {}, disabled } = this.props
    const { _checkedIndex } = this.state
    let radioArr: any
    let _labelStyle: React.CSSProperties = {}
    let _itemsStyle: React.CSSProperties = {}
    switch (mode) {
      case 'default': {
        radioArr = dataSource?.map((item, index) => {
          const cls = classnames('yonui-radio-box', { 'yonui-radio-box-disabled': disabled || item.disabled })
          return <Radio className={cls} checked={checkedValue ? checkedValue === item.value : index === _checkedIndex} key={index} onChange={() => { !item.disabled && this.onClickItem(item, index) }}>{item.desc}</Radio>
        })
        break
      }
      case 'tag-single': {
        _labelStyle = { width: `${labelWidth}%` }
        _itemsStyle = { width: `${100 - (labelWidth - 0)}%` }
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
      case 'tag': {
        radioArr = this.renderSelection(dataSource, checkedValue, tagSize)
        break
      }
      case 'item': {
        radioArr = this.renderRaioItem(dataSource, checkedValue)
        break
      }
    }
    const cls = classnames('yonui-radio', { 'yonui-radio-single': mode === 'tag-single' })
    return (
      <div className={cls}>
        <div className='yonui-radio-label' style={{ ..._labelStyle, ...labelStyle }}>
          {label}
        </div>
        <div className='yonui-radio-items' style={{ ..._itemsStyle, ...itemsStyle }}>
          {radioArr}
        </div>
      </div>
    )
  }
}

// function RadioControl (props: any) {
//   //  if(props && props.mode === 'circle'){
//   //    let _className = props.className? props.className + 'am-raido-circle':'am-raido-circle'
//   //    return <Radio {...props} className={_className}>{props.name || props.children}</Radio>
//   //  }
//   // console.log('radio的默认属性props.defaultChecked',props.defaultChecked);
//   return <Radio {...props}>{props.name || props.children}</Radio>
// }
// export default RadioControl
