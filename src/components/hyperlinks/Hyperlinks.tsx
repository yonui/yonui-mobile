import React from 'react'
import { TextareaItem } from 'antd-mobile'
import YonuiInput from '../input-yonui'
import ListItemWrapper from '../list-item-wrapper'
const { getListItemProps } = ListItemWrapper

export interface HyperlinksProps {
  defaultLinkText?: string
  defaultLinkAddress?: string
  linkTextPlaceholder?: string
  linkAddressPlaceholder?: string
  notRequired?: boolean
  required?: boolean
  disabled?: boolean
  bCanModify?: boolean
  mReadOnly?: boolean
  visible?: boolean
  onChange?: (value: object) => void
}

export interface HyperlinksState {
  linkText: string
  linkAddress: string
}

class ListDatePicker extends React.Component<HyperlinksProps, HyperlinksState> {
  constructor (props: HyperlinksProps) {
    super(props)
    this.state = {
      linkText: props.defaultLinkText,
      linkAddress: props.defaultLinkAddress
    }
  }

  onLinkTextChange = (value) => {
    const { onChange } = this.props
    this.setState({
      linkText: value
    })
    onChange?.({
      linkText: this.state.linkText,
      linkAddress: this.state.linkAddress
    })
  }

  onLinkAddressChange = (value) => {
    const { onChange } = this.props
    this.setState({
      linkAddress: value
    })
    onChange?.({
      linkText: this.state.linkText,
      linkAddress: this.state.linkAddress
    })
  }

  render () {
    const { defaultLinkText, defaultLinkAddress, linkTextPlaceholder, linkAddressPlaceholder, required, notRequired, disabled, bCanModify, mReadOnly, visible = true } = this.props
    if (!visible) return null
    const _required = required ?? !notRequired
    const wrapperProps = getListItemProps(this.props, {
      className: 'yonui-mobile-hyperlinks',
      required: _required
    })
    const _disabled = disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)
    return (
      <ListItemWrapper {...wrapperProps}>
        <div className='yonui-mobile-hyperlinks-content'>
          <YonuiInput textAlign='left' value={defaultLinkText} placeholder={linkTextPlaceholder} mReadOnly={mReadOnly} disabled={_disabled} />
          <TextareaItem value={defaultLinkAddress} placeholder={linkAddressPlaceholder} readOnly={mReadOnly} disabled={_disabled} rows={1} autoHeight />
        </div>
      </ListItemWrapper>
    )
  }
}
export default ListDatePicker
