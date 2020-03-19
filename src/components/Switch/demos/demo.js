/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

export default class Demo1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render () {
    return (
      <div>
        <MyComponent
          checked={this.state.checked}
          onChange={() => {
            this.setState({
              checked: !this.state.checked
            })
          }}
        />
        <MyComponent
          title={'带标题'}
          checked={this.state.checked}
          onChange={() => {
            this.setState({
              checked: !this.state.checked
            })
          }}
        />
      </div>
    )
  }
}
