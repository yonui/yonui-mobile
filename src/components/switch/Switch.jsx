import React from 'react'
import { Switch } from 'antd-mobile'
export default class SwitchControl extends React.Component {
  render () {
    const props = this.props
    console.log('SwitchControl', props)
    return (<Switch {...this.props} ></Switch>)
  }
}
