import React from 'react'
import { Switch } from 'antd-mobile'
import ListItemWrapper from '../list-item-wrapper'
import classnames from 'classnames'
export default class SwitchControl extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { label, required, className, defaultValue, checked, singleLine, ...ohter } = this.props
    const _checked = checked ?? defaultValue
    const labelCls = classnames('switch-title', 'form-label', { required })
    // console.log(this.props)
    // return <div className='switch-control'>
    //   <span className={labelCls}>{label}</span>

    // </div>

    return <ListItemWrapper label={label} labelCls={labelCls} singleLine={singleLine}>
      <Switch checked={_checked} {...ohter} />
    </ListItemWrapper>
  }
}
