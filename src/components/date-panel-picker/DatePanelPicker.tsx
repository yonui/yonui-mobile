import React, { Component } from 'react'
import { DatePickerView, Modal, Button } from 'antd-mobile'
import { DatePickerProps } from 'antd-mobile/lib/date-picker-view/PropsType'
export interface DatePanelPickerProps extends DatePickerProps {
    visible: boolean
    header?: string
    onDismiss: () => void
    onOk: (date: Object) => void
}
export default class DatePanelPicker extends Component<DatePanelPickerProps,any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
          date: props.value
        }
    }
    onChange =(date: Object)=> {
      this.setState({
        date
      })
    }
    onOk = () => {
      let { date } = this.state
      this.props.onOk&&this.props.onOk(date)
    }
    onDismiss = () => {
      this.props.onDismiss&&this.props.onDismiss()
    }
    render() {
        let { visible,minDate,maxDate,value, ...restProps } = this.props;
        const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
        const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
        const valueTrs = (value && typeof value === 'string') ? new Date(value) : value
        return (
          <Modal 
            visible={visible}
            popup>
            <div className='date-panel-picker'>  
              <div className='operation'>
                <span className='confirm' onClick={this.onOk}>确认</span>
                <span className='cancel' onClick={this.onDismiss}>取消</span>
              </div>
              <DatePickerView
                {...restProps}
                onChange={this.onChange}
                minDate={minDateTrs}
                maxDate={maxDateTrs}
                value={valueTrs}
              />
            </div>
          </Modal> 
        )
    }
}