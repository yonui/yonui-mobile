import React from 'react'
import { TextareaItem } from 'antd-mobile'
import Label from '../label'
import YonuiInput from '../input-yonui'
import ListItemWrapper from '../list-item-wrapper'
const { getListItemProps } = ListItemWrapper
export interface HyperlinksProps extends React.defaultProps {
  defaultLinkText?: string
  defaultLinkAddress?: string
  linkTextPlaceholder?: string
  linkAddressPlaceholder?: string
  notRequired?: boolean
  required?: boolean
  disabled?: boolean
  bCanModify?: boolean
  readOnly?: boolean
  visible?: boolean
  value?: string
  onChange?: (value: string) => void
}
export interface HyperlinksState {
  linkText: string
  linkAddress: string
}
class ListDatePicker extends React.Component<HyperlinksProps, HyperlinksState> {
  constructor (props: HyperlinksProps) {
    super(props)
    const value = props.value ? JSON.parse(props.value) : {}
    this.state = {
      linkText: value.linkText !== undefined ? value.linkText : props.defaultLinkText,
      linkAddress: value.linkAddress !== undefined ? value.linkAddress : props.defaultLinkAddress
    }
  }

  onLinkTextChange = (value) => {
    const { onChange } = this.props
    this.setState({
      linkText: value
    })
    onChange?.(JSON.stringify({
      linkText: value,
      linkAddress: this.state.linkAddress
    }))
  }

  onLinkAddressChange = (value) => {
    const { onChange } = this.props
    this.setState({
      linkAddress: value
    })
    onChange?.(JSON.stringify({
      linkText: this.state.linkText,
      linkAddress: value
    }))
  }

  onClick = () => {
    this.state.linkAddress && (window.location.href = this.state.linkAddress)
  }

  render () {
    const { linkTextPlaceholder, linkAddressPlaceholder, required, notRequired, disabled, bCanModify, readOnly, visible = true, nid } = this.props
    if (!visible) return null
    const _required = required ?? !notRequired
    const wrapperProps = getListItemProps(this.props, {
      className: 'yonui-mobile-hyperlinks',
      required: _required
    })
    const browse = disabled || readOnly || (bCanModify !== undefined ? !bCanModify : bCanModify)
    if (nid) { // 设计态
      return (
        <ListItemWrapper {...wrapperProps}>
          <div className='yonui-mobile-hyperlinks-content'>
            <YonuiInput textAlign='left' value={this.state.linkText} placeholder={linkTextPlaceholder} disabled={browse} />
            <TextareaItem value={this.state.linkAddress} placeholder={browse ? '' : linkAddressPlaceholder} disabled={browse} rows={1} autoHeight />
          </div>
        </ListItemWrapper>
      )
    } else { // 运行态
      if (browse) { // 浏览态
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
              <YonuiInput textAlign='left' value={this.state.linkText} placeholder={linkTextPlaceholder} onChange={this.onLinkTextChange} />
              <TextareaItem value={this.state.linkAddress} rows={1} autoHeight onChange={this.onLinkAddressChange} />
            </div>
          </ListItemWrapper>
        )
      }
    }
  }
}
export default ListDatePicker
