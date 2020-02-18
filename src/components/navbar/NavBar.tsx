import React from "react";
import { NavBar, Icon } from "antd-mobile";

export interface NavBarProps {

  rightContent?: any,
  title: string,
  subTitle: string,
  titleIcon: string,
  backIcon: string,
  closeIcon: string,
  onBackClick?: () => void;


}
export default class MDFNavBar extends React.Component<NavBarProps, any>  {

  static defaultProps = {
    title: '标题',
    backIcon: 'left'
  }
  constructor(props: NavBarProps) {
    super(props)
  }

  renderLeftContent = () => {
    const { backIcon, closeIcon } = this.props;
    return <React.Fragment>
      <Icon type={backIcon} />
      {closeIcon && <Icon type={closeIcon} />}
    </React.Fragment>
  }
  renderCenterContent = () => {
    const { title, titleIcon, subTitle } = this.props
    return <React.Fragment>
      <div className='title'>{title}{titleIcon && <Icon type={titleIcon} />}</div>
      <div className='sub-title'>{subTitle}</div>
    </React.Fragment>
  }
  renderRightContent = () => {
    const { rightContent } = this.props
    return <React.Fragment>
      {rightContent.map((item:any) => {return item})}
    </React.Fragment>
  }
  render() {
    return (
      <NavBar
        rightContent={this.renderRightContent()}
        leftContent={this.renderLeftContent()}>
        {this.renderCenterContent()}
      </NavBar>
    )
  }
}
