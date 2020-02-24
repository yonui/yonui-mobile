import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props: Readonly<{}>) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='am-footer'>
              {this.props.children}
            </div>
        )
    }
}