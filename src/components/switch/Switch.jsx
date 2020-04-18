import React from 'react'
import { Switch } from 'antd-mobile'
export default class SwitchControl extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { title, className, ...ohter } = this.props
    // console.log('SwitchControl', props)
    return <div className="switch-control">
      {<span className='switch-title'>{title}</span>}
      <Switch {...ohter} ></Switch>
    </div>
  }
}
