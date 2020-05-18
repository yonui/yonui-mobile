import React, { memo } from 'react'
import { Icon } from 'antd-mobile'
import ListItemWrapper from '../list-item-wrapper'
interface ListItemDisplayProps extends React.defaultProps{
  label?: string
  subLabel?: string
  extraIcon?: string
  extraText?: string
  showExtraLabelIcon?: boolean
  onClick?: () => void
}
const ListItemDisplay = (props: ListItemDisplayProps) => {
  const { label, subLabel, extraIcon, extraText, onClick, showExtraLabelIcon } = props
  const _label = <div className='list-item-display-label-area'>
    <div className='list-item-display-label'>{label}</div>
    <div className='list-item-display-sublabel'>{subLabel}</div>
  </div>
  const _extraText = extraText && <span className='list-item-display-extra'>{extraText}</span>
  const _icon = extraIcon && <Icon type={extraIcon} onTouchEndCapture={onClick} />
  return <ListItemWrapper label={_label} singleLine showExtraLabelIcon={showExtraLabelIcon}>
    {_extraText}
    {_icon}
  </ListItemWrapper>
}
export default memo(ListItemDisplay)
