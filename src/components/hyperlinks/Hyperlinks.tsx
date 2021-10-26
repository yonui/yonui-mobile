import React from 'react'
import { TextareaItem } from 'antd-mobile'
import Label from '../label'
import YonuiInput from '../input-yonui'
import ListItemWrapper from '../list-item-wrapper'
const { getListItemProps } = ListItemWrapper
interface Hyperlinks {
  linkText?: string
  linkAddress?: string
}
export interface HyperlinksProps extends React.defaultProps {
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
  value?: Hyperlinks
  onChange?: (value: Hyperlinks) => void
}
export interface HyperlinksState {
  linkText: string
  linkAddress: string
}
class ListDatePicker extends React.Component<HyperlinksProps, HyperlinksState> {
  constructor (props: HyperlinksProps) {
    super(props)
    const linkText = props.value?.linkText
    const linkAddress = props.value?.linkAddress
    this.state = {
      linkText: linkText !== undefined ? linkText : props.defaultLinkText,
      linkAddress: linkAddress !== undefined ? linkAddress : props.defaultLinkAddress
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

  onClick = () => {
    this.state.linkAddress && (window.location.href = this.state.linkAddress)
  }

  render () {
    const { linkTextPlaceholder, linkAddressPlaceholder, required, notRequired, disabled, bCanModify, mReadOnly, visible = true, nid } = this.props
    if (!visible) return null
    const _required = required ?? !notRequired
    const wrapperProps = getListItemProps(this.props, {
      className: 'yonui-mobile-hyperlinks',
      required: _required
    })
    const _disabled = disabled || (bCanModify !== undefined ? !bCanModify : bCanModify)
    if (nid) { // 设计态
      return (
        <ListItemWrapper {...wrapperProps}>
          <div className='yonui-mobile-hyperlinks-content'>
            <YonuiInput textAlign='left' value={this.state.linkText} placeholder={linkTextPlaceholder} disabled={_disabled} />
            <TextareaItem value={this.state.linkAddress} placeholder={linkAddressPlaceholder} disabled={_disabled} rows={1} autoHeight />
          </div>
        </ListItemWrapper>
      )
    } else { // 运行态
      if (mReadOnly) { // 浏览态
        return (
          <ListItemWrapper {...wrapperProps}>
            <div className='yonui-mobile-hyperlinks-label'>
              <Label controlType='hyperlinks' label={this.state.linkText} onClick={this.onClick} />
            </div>
          </ListItemWrapper>
        )
      } else { // 编辑态
        return (
          <ListItemWrapper {...wrapperProps}>
            <div className='yonui-mobile-hyperlinks-content'>
              <YonuiInput textAlign='right' value={this.state.linkText} placeholder={linkTextPlaceholder} disabled={_disabled} onChange={this.onLinkTextChange} />
              <TextareaItem value={this.state.linkAddress} placeholder={linkAddressPlaceholder} disabled={_disabled} rows={1} autoHeight onChange={this.onLinkAddressChange} />
            </div>
          </ListItemWrapper>
        )
      }
    }
  }
}
export default ListDatePicker
