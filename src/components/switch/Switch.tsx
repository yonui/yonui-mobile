import React from 'react'
import { Switch } from 'antd-mobile'
import ListItemWrapper, { getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'

const getValue = (value: string | boolean, defaultValue: string | boolean, model: any) => {
  if (model?.getValue() === undefined && defaultValue === undefined) return false
  if (value === true || value === 'true') return true
  if (value === false || value === 'false' || value === undefined) return false
  return defaultValue === true || defaultValue === 'true'
}
export default class SwitchControl extends React.Component<any> {
  render () {
    // eslint-disable-next-line react/prop-types
    const { label, required, className, defaultValue, checked, singleLine, visible = true, style, model, ...ohter } = this.props
    const _checked = getValue(checked, defaultValue, model)
    const labelCls = classnames('switch-title', 'form-label', { required })
    const wrapperProps = getListItemProps(this.props, {
      labelCls
    })
    if (!visible) return null
    return <ListItemWrapper {...wrapperProps}>
      <Switch checked={_checked} {...ohter} />
    </ListItemWrapper>
  }
}
