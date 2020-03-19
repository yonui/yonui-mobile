import React from 'react'
import { Switch } from 'antd-mobile'
export default class SwitchControl extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { title } = this.props
    // console.log('SwitchControl', props)
    if (title && title !== '') {
      return <div className="switch-control"><span className='switch-title'>{title}</span><Switch {...this.props} ></Switch></div>
    }
    return (<Switch {...this.props} ></Switch>)
  }
}
