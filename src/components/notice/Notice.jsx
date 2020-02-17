import React from 'react'
import { NoticeBar,Modal } from 'antd-mobile'
import  {manifest,ReactWrapper} from './manifest'
class Notice extends React.Component{
  constructor(props){
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
  render(){
    const props = this.props;
    
    if(props.mode && props.mode === 'modal'){
      return (
        <Modal
          visible={this.state.noticemodal}
          transparent
          maskClosable={false}
          title={'this is title'}
          footer={[{ text: '确定', onPress: () => {this.onClose(); } }]}
        >
          {props.children || props.content}
        </Modal>
      )
    }
    return (<NoticeBar {...props}>{props.children || props.content }</NoticeBar>)
  }
}
export default ReactWrapper(Notice, manifest)

