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
        const { value, minDate} = props;
        const valueTrs = (value && typeof value === 'string') ? new Date(value) : value
        const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
        this.state = {
          date: valueTrs ? valueTrs : (minDateTrs ? minDateTrs : new Date(2000, 1, 1, 0, 0, 0))
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
            <div className='am-date-panel-picker'>
              <div className='operation'>
                <div className='item cancel' onClick={this.onDismiss}>取消</div>
                <div className='item confirm' onClick={this.onOk}>确认</div>
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