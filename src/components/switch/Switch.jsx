import React from 'react'
import { Switch } from 'antd-mobile'
import ListItemWrapper, { getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
export default class SwitchControl extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { label, required, className, defaultValue, checked, singleLine, ...ohter } = this.props
    const _checked = checked ? (checked === true || checked === 'true') : (defaultValue === 'true' || defaultValue === true)
    const labelCls = classnames('switch-title', 'form-label', { required })
    const wrapperProps = getListItemProps(this.props, {
      labelCls
    })

    return <ListItemWrapper {...wrapperProps}>
      <Switch checked={_checked} {...ohter} />
    </ListItemWrapper>
  }
}
