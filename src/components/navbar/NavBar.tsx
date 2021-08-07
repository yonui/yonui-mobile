import React from 'react'
import { NavBar } from 'antd-mobile'
import Icon from '../icon'

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
  onTitleClick?: () => void
  mode: string
  nid: string
  rightIcons: any
  style?: React.CSSProperties
  autoShow: boolean
}
// 默认颜色
const defaultColor = '#111';
const subTitleDefaultColor = 'rgba(136, 136, 136, 1)';
export default class MDFNavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    title: '标题',
    backIcon: 'left',
    mode: 'light',
    autoShow: false
  }

  renderLeftContent = () => {
    const { style = {}, backIcon, backIconText, closeIcon, closeIconText, nid, onBackClick, onCloseClick } = this.props
    return <>
      <Icon color={style.color ? style.color : defaultColor} type={backIcon} nid={nid} onClick={onBackClick} />
      {backIconText}
      {closeIcon && <Icon color={style.color ? style.color : defaultColor} type={closeIcon} nid={nid} style={{ marginLeft: 15 }} onClick={onCloseClick} />}
      {closeIconText}
    </>
  }

  renderCenterContent = () => {
    const { style = {}, title, titleIcon, subTitle, nid, onTitleClick } = this.props
    return <>
      <div onClick={onTitleClick}>
        <div style={{ color: style.color ? style.color : defaultColor }} className='title'>{title}{titleIcon && <Icon type={titleIcon} nid={nid} />}</div>
        <div style={{ color: style.color ? style.color : subTitleDefaultColor }} className='sub-title'>{subTitle}</div>
      </div>

    </>
  }

  renderRightContent = () => {
    const { style = {}, rightIcon1, rightIcon1Text, rightIcon2, rightIcon2Text, nid, onRight1Click, onRight2Click, rightIcons } = this.props
    if (rightIcons) return rightIcons
    return <>
      {rightIcon1 && <Icon color={style.color ? style.color : defaultColor} type={rightIcon1} nid={nid} onClick={onRight1Click} />}
      {rightIcon1Text}
      {rightIcon2 && <Icon color={style.color ? style.color : defaultColor} type={rightIcon2} nid={nid} onClick={onRight2Click} style={{ marginLeft: 15 }} />}
      {rightIcon2Text}
    </>
  }

  render () {
    const { style = {}, mode, autoShow } = this.props
    const cls = mode === 'light' ? 'am-navbar-light' : ''
    console.log('navbarAutoShow', autoShow)
    if (autoShow) {
      const platform = window.mtl.platform;
      console.log('navbarplatform', platform)
      if (platform === 'wx' || platform === 'upesn' || platform === 'QYIos' || platform === 'QYAndroid') {
        return null
      }
    }
    return (
      <div>
        <NavBar
          className={cls}
          style={{ ...style, color: style.color ? style.color : defaultColor }}
          rightContent={this.renderRightContent()}
          leftContent={this.renderLeftContent()}
        >
          {this.props.children && this.props.children.length ? this.props.children : this.renderCenterContent()}
        </NavBar>
      </div>
    )
  }
}
