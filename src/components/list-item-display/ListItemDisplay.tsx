import React, { memo } from 'react'
import { Icon } from 'antd-mobile'
import ListItemWrapper from '../list-item-wrapper'
interface ListItemDisplayProps extends React.defaultProps{
  label?: string
  subLabel?: string
  extraIcon?: string
  extraText?: string
  onClick?: () => void
}
const ListItemDisplay = (props: ListItemDisplayProps) => {
  const { label, subLabel, extraIcon, extraText, onClick } = props
  const _label = <div className='lsit-item-display-label-area'>
    <div className='lsit-item-display-label'>{label}</div>
    <div className='lsit-item-display-sublabel'>{subLabel}</div>
  </div>
  const _icon = extraIcon && <Icon type={extraIcon} onTouchEndCapture={onClick}/>
  return <ListItemWrapper label={_label} singleLine>
    {_icon}
    {extraText}
  </ListItemWrapper>
}
export default memo(ListItemDisplay)
