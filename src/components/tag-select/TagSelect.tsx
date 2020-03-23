import React, { Component } from 'react'
import classnames from 'classnames'
interface TagSelectProps {
  onSelect?: (val: string) => void
  selectData?: Array<{ desc: string, value: string }>
  selectedValue?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  style?: React.CSSProperties
}
export default class TagSelect extends Component<TagSelectProps> {
  renderSelection = (selectData?: Array<{ desc: string, value: string }>, selectedValue?: string) => {
    const { onSelect, size = 'default' } = this.props
    if (!selectData || !Array.isArray(selectData)) return null
    return selectData.map((item, index) => {
      const cls = classnames('am-tag', `am-tag-${size}`, `${item.value === selectedValue ? 'am-tag-active' : 'am-tag-normal'}`)
      return <div className={cls} key={index} onClick={ () => { onSelect && onSelect(item.value) }}>
        <div className='am-tag-text'>{item.desc}</div>
      </div>
    })
  }

  render () {
    const { selectData, selectedValue, className, style } = this.props
    const cls = classnames(className, 'yonui-mobile-tag-select')
    return (
      <div className={cls} style={style}>
        {this.renderSelection(selectData, selectedValue)}
      </div>
    )
  }
}
