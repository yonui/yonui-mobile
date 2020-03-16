import React, { Component } from 'react'
import classnames from 'classnames'
import Input from '../input'
import TagSelect from '../TagSelect'
import Calendar from '../list-calendar'
interface FilterContentProps {
  title?: string
  selectData?: Array<{ desc: string, value: string }>
  className?: string
  style?: object
  onSelect?: (item: any) => void
  selectedValue?: string
  extraInput?: string
  extraInputType?: 'date' | 'text' | 'calendar'
}
export default class FilterContent extends Component<FilterContentProps, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      value: []
    }
  }

  static defaultProps = {
  }

  onConfirm = (startDateTime: Date, endDateTime: Date, value: string) => {
    const { onSelect } = this.props
    onSelect && onSelect([startDateTime, endDateTime])
    this.setState({
      [value]: [startDateTime, endDateTime]
    })
  }

  renderExtra = (extraInput?: string, extraInputType?: string) => {
    if (!extraInput) return null
    const title = <div className='extra-title'>{extraInput}</div>
    let content = null
    switch (extraInputType) {
      case 'calendar': {
        content = <Calendar
          type='range'
          minDate={new Date(2000, 1, 1, 0, 0, 0)}
          maxDate={new Date(2030, 1, 1, 23, 59, 59)}
          onConfirm={
            (startDateTime: Date, endDateTime: Date) => {
              this.onConfirm(startDateTime, endDateTime, 'value')
            }
          }
          value={this.state.value}
        />
        break
      }
      case 'text':
      default:
        content = <Input onChange={this.props.onSelect}/>
        break
    }
    return [title, content]
  }

  render () {
    const { selectData, title, className, style, selectedValue, extraInput, extraInputType, onSelect } = this.props
    const cls = classnames(className, 'yonui-filter-content')
    return (
      <div className={cls} style={style}>
        <div className='yonui-filter-content-title'>
          {title}
        </div>
        <div className='yonui-filter-content-selection'>
          <TagSelect selectData={selectData} selectedValue={selectedValue} onSelect={onSelect} />
        </div>
        <div className='yonui-filter-content-extra'>
          {this.renderExtra(extraInput, extraInputType)}
        </div>
      </div>
    )
  }
}
