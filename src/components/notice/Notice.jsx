import React from 'react'
import { NoticeBar, Modal } from 'antd-mobile'
import { manifest, ReactWrapper } from './manifest'
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
    if (props.mode && props.mode === 'modal') {
      return (
        <Modal
          visible={this.state.noticemodal}
          transparent
          maskClosable={false}
          title={props.title || 'Title'}
          footer={[{ text: '确定', onPress: () => { this.onClose(); } }]}
        >
          {props.children || props.content}
        </Modal>
      )
    }
    if(props.mode && props.mode === 'pop'){
      classNameProps += 'am-notice-bar-pop'
      return <div className='notice-bar-pop-container'>
        <span className='notice-bar-pop-triangle'></span>
        <NoticeBar {...props} className={classNameProps}>{props.children || props.content}</NoticeBar>
      </div>
    }else{
      return (<NoticeBar {...props}>{props.children || props.content}</NoticeBar>)
    }
    
  }
}
export default ReactWrapper(Notice, manifest)

