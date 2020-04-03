import React from 'react'
import { NoticeBar, Modal, Icon } from 'antd-mobile'
// import PNG from './style/img/popicon.png'
const noticeBarPrefixCls = 'am-notice-bar'
export interface NoticeProps {
  mode?: string
  className?: string
  title?: string
  content?: React.ReactChild
  noticeModalShow?: boolean
  icon?: React.ReactNode
  onClick?: Function
}

class Notice extends React.Component<NoticeProps, any> {
  state = {
    noticemodal: true
  }

  onClose = () => {
    // let _self = this;
    // this.setState({
    //   noticemodal: false,
    // },()=>{

    // });
    this.props.onClick && this.props.onClick()
  }

  render () {
    const { icon, noticeModalShow = false, ...props } = this.props
    let classNameProps = props.className || ''
    classNameProps += `${noticeBarPrefixCls}-${props.mode}-container`
    // let icon = typeof props.icon === 'string' ? <Icon type={props.icon}/> : props.icon
    const _icon = !icon ? null : (typeof icon === 'string' ? <Icon type={icon}/> : icon)
    if (props.mode && props.mode === 'modal') {
      return (
        <Modal
          visible ={noticeModalShow}
          transparent
          maskClosable={false}
          title={props.title || 'Title'}
          className={classNameProps}
          footer={[{ text: '确定', onPress: () => { this.onClose() } }]}
        >
          {props.content || props.children}
        </Modal>
      )
    }

    if (props.mode && props.mode === 'pop') {
      return <div className={classNameProps} >
        <span className={`${noticeBarPrefixCls}-pop-triangle`}></span>
        <NoticeBar icon={_icon} {...props}>{props.content || props.children}</NoticeBar>
      </div>
    }

    if (props.mode && props.mode === 'light') {
      return <div className={classNameProps} >
        <NoticeBar icon={_icon} {...props} mode='link' >{props.content || props.children}</NoticeBar>
      </div>
    }

    return (<NoticeBar icon={_icon} {...props} className={classNameProps}>{props.content || props.children}</NoticeBar>)
  }
}
export default Notice
