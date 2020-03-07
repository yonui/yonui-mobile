import React from 'react'
import { NoticeBar, Modal } from 'antd-mobile'
import { manifest, ReactWrapper } from './manifest'
import PNG from './style/img/popicon.png';
const noticeBarPrefixCls  = 'am-notice-bar';
export interface NoticeProps {
  mode?: string;
  className?: string;
  title?: string;
  content?: React.ReactChild;
  noticeModalShow?:boolean
  onClick?:Function
}

class Notice extends React.Component<NoticeProps,any>{
  constructor(props:any) {
    super(props);
    // this.state = {
    //   noticemodal: true,
    // };
  }
  state = {
    noticemodal: true,
  }
  onClose = () => {
    // let _self = this;
    // this.setState({
    //   noticemodal: false,
    // },()=>{
     
    // });
    this.props.onClick && this.props.onClick()
  }
  render() {
    const props = this.props;
    let classNameProps = props.className || ''
    classNameProps += `${noticeBarPrefixCls}-${props.mode}-container`
    if (props.mode && props.mode === 'modal') {
      return (
        <Modal
          visible ={this.props.noticeModalShow}
          transparent
          maskClosable={false}
          title={props.title || 'Title'}
          className={classNameProps}
          footer={[{ text: '确定', onPress: () => { this.onClose(); } }]}
        >
          {props.content ||props.children}
        </Modal>
      )
    }
   
    if(props.mode && props.mode === 'pop'){
      return <div className={classNameProps} >
        <span className={`${noticeBarPrefixCls}-pop-triangle`}></span>
        <NoticeBar  icon={<img className={`${noticeBarPrefixCls}-pop-img`} src={PNG} />}  {...props} >{props.content || props.children}</NoticeBar>
      </div>
    }

    if(props.mode && props.mode === 'light'){
      return <div className={classNameProps} >
        <NoticeBar icon={<img className={`${noticeBarPrefixCls}-light-img`} src={PNG} />} {...props} mode='link' >{props.content || props.children}</NoticeBar>
      </div>
    }

    return (<NoticeBar {...props} className={classNameProps}>{props.content || props.children}</NoticeBar>)
  }
}
export default ReactWrapper(Notice, manifest)

