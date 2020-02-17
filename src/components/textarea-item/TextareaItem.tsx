import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import {TextAreaItemPropsType} from 'antd-mobile/lib/textarea-item/PropsType'
export default class MyComponent extends Component<TextAreaItemPropsType> {
    constructor(props:TextAreaItemPropsType) {
      super(props)
    }

    render() {
        return (
            <TextareaItem {...this.props}/>
        )
    }
}