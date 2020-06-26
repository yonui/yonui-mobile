import React from 'react'
import { Switch } from 'antd-mobile'
import ListItemWrapper, { getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'

const getValue = (value: string | boolean, defaultValue: string) => {
  if (value === true || value === 'true') return true
  if (value === false || value === 'false') return false
  return defaultValue === 'true'
}
export default class SwitchControl extends React.Component<any> {
  render () {
    // eslint-disable-next-line react/prop-types
    const { label, required, className, defaultValue, checked, singleLine, ...ohter } = this.props
    const _checked = getValue(checked, defaultValue)
    const labelCls = classnames('switch-title', 'form-label', { required })
    const wrapperProps = getListItemProps(this.props, {
      labelCls
    })

    return <ListItemWrapper {...wrapperProps}>
      <Switch checked={_checked} {...ohter} />
    </ListItemWrapper>
  }
}
