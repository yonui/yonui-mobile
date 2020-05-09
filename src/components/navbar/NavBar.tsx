import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

export interface NavBarProps {
  rightIcon1?: string
  rightIcon2?: string
  rightIcon1Text?: string
  rightIcon2Text?: string
  onRight1Click?: () => void
  onRight2Click?: () => void
  title: string
  subTitle: string
  titleIcon?: string
  titleIconText?: string
  backIcon: string
  backIconText: string
  closeIcon: string
  closeIconText: string
  onBackClick?: () => void
  onCloseClick?: () => void
  mode: string
  reghtIcons: any
  style?: React.CSSProperties
}
export default class MDFNavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    title: '标题',
    backIcon: 'left',
    mode: 'light'
  }

  renderLeftContent = () => {
    const { backIcon, backIconText, closeIcon, closeIconText, onBackClick, onCloseClick } = this.props
    return <React.Fragment>
      <Icon type={backIcon} onClick={onBackClick} />
      {backIconText}
      {closeIcon && <Icon type={closeIcon} style={{ marginLeft: 15 }} onClick={onCloseClick} />}
      {closeIconText}
    </React.Fragment>
  }

  renderCenterContent = () => {
    const { title, titleIcon, subTitle } = this.props
    return <React.Fragment>
      <div>
        <div className='title'>{title}{titleIcon && <Icon type={titleIcon} />}</div>
        <div className='sub-title'>{subTitle}</div>
      </div>

    </React.Fragment>
  }

  renderRightContent = () => {
    const { rightIcon1, rightIcon1Text, rightIcon2, rightIcon2Text, onRight1Click, onRight2Click, reghtIcons } = this.props

    if (reghtIcons) return reghtIcons
    return <React.Fragment>
      {rightIcon1 && <Icon type={rightIcon1} onClick={onRight1Click} />}
      {rightIcon1Text}
      {rightIcon2 && <Icon type={rightIcon2} onClick={onRight2Click} style={{ marginLeft: 15 }} />}
      {rightIcon2Text}
    </React.Fragment>
  }

  render () {
    const { style, mode } = this.props
    const cls = mode === 'light' ? 'am-navbar-light' : ''
    return (
      <div>
        <NavBar className={cls}
          style={{ ...style }}
          rightContent={this.renderRightContent()}
          leftContent={this.renderLeftContent()}>
          {this.props.children && this.props.children.length ? this.props.children : this.renderCenterContent()}
        </NavBar>
      </div>
    )
  }
}
