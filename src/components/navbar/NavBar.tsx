import React from "react";
import { NavBar, Icon } from "antd-mobile";

export interface NavBarProps {
  rightIcon1?: string,
  rightIcon2?: string,
  onRight1Click?: () => void,
  onRight2Click?: () => void,
  title: string,
  subTitle: string,
  titleIcon: string,
  backIcon: string,
  closeIcon: string,
  onBackClick?: () => void,
  onCloseClick?: () => void,
  mode: string,
  reghtIcons: any,
  style?: React.CSSProperties
}
export default class MDFNavBar extends React.Component<NavBarProps, any>  {

  static defaultProps = {
    title: '标题',
    backIcon: 'left',
    closeIcon: 'cross',
    mode: 'light'
  }
  constructor(props: NavBarProps) {
    super(props)
  }

  renderLeftContent = () => {
    const { backIcon, closeIcon, onBackClick, onCloseClick } = this.props;
    return <React.Fragment>
      <Icon type={backIcon} onClick={onBackClick} />
      {closeIcon && <Icon type={closeIcon} style={{ marginLeft: 15 }} onClick={onCloseClick} />}
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
    const { rightIcon1, rightIcon2, onRight1Click, onRight2Click, reghtIcons } = this.props

    if (reghtIcons) return reghtIcons
    return <React.Fragment>
      {rightIcon1 && <Icon type={rightIcon1} onClick={onRight1Click} />}
      {rightIcon2 && <Icon type={rightIcon2} onClick={onRight2Click} style={{ marginLeft: 15 }} />}
    </React.Fragment>
  }
  render() {
    const {style} = this.props
    return (
      <div>
        {this.props.mode === 'light' ? <NavBar className={`am-navbar-light`}
        style={{ ...style }}
          rightContent={this.renderRightContent()}
          leftContent={this.renderLeftContent()}>
          {this.props.children && this.props.children.length ? this.props.children :this.renderCenterContent()}
        </NavBar> : <NavBar
        style={{ ...style }}
          rightContent={this.renderRightContent()}
          leftContent={this.renderLeftContent()}>
            {this.renderCenterContent()}
          </NavBar>}
      </div>
    )
  }
}
