import React from 'react'
import { Switch } from 'antd-mobile'
import classnames from 'classnames'
export default class SwitchControl extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { title, required, className, ...ohter } = this.props
    const labelCls = classnames('switch-title', 'form-label', { required })
    console.log(this.props)
    return <div className="switch-control">
      {<span className={labelCls}>{title}</span>}
      <Switch {...ohter} ></Switch>
    </div>
  }
}
