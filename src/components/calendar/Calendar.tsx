import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
export default class MyComponent extends Component<CalendarProps> {
    constructor(props: Readonly<{}>) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Calendar {...this.props}/>
        )
    }
}