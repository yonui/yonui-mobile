import React from 'react'
import { NoticeBar, Modal } from 'antd-mobile'
import { manifest, ReactWrapper } from './manifest'
import PNG from './style/img/popicon.png';

const noticeBarPrefixCls  = 'am-notice-bar';
class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticemodal: true,
    };
  }
  onClose = () => {
    this.setState({
      noticemodal: false,
    });
  }
  render() {
    const props = this.props;
    let classNameProps = props.className || ''
    classNameProps += `${noticeBarPrefixCls}-${props.mode}`
    if (props.mode && props.mode === 'modal') {
      return (
        <Modal
          visible={this.state.noticemodal}
          transparent
          maskClosable={false}
          title={props.title || 'Title'}
          className={classNameProps}
          footer={[{ text: '确定', onPress: () => { this.onClose(); } }]}
        >
          {props.children || props.content}
        </Modal>
      )
    }
   
    if(props.mode && props.mode === 'pop'){
      return <div className={`${noticeBarPrefixCls}-pop-container`}>
        <span className={`${noticeBarPrefixCls}-pop-triangle`}></span>
        <NoticeBar  icon={<img className={`${noticeBarPrefixCls}-pop-img`} src={PNG} />}  {...props} className={classNameProps}>{props.children || props.content}</NoticeBar>
      </div>
    }

    if(props.mode && props.mode === 'light'){
      return <div className={`${noticeBarPrefixCls}-light-container`}>
        <NoticeBar icon={<img className={`${noticeBarPrefixCls}-light-img`} src={PNG} />}  {...props} className={classNameProps}>{props.children || props.content}</NoticeBar>
      </div>
    }

    return (<NoticeBar {...props} className={classNameProps}>{props.children || props.content}</NoticeBar>)
  }
}
export default ReactWrapper(Notice, manifest)

