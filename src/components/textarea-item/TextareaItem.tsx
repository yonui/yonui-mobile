import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
export default class MyComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <TextareaItem {...this.props}/>
        )
    }
}