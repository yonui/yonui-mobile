import React from 'react'
import { Switch } from 'antd-mobile'
import { manifest, ReactWrapper } from './manifest'
class SwitchControl extends React.Component {
  render () {
    const props = this.props
    console.log('SwitchControl', props)
    return (<Switch {...this.props} ></Switch>)
  }
}
export default ReactWrapper(SwitchControl, manifest)
