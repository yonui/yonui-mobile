import React from 'react'
import { Result } from 'antd-mobile'
import successSrc from './style/images/success.png'
import waitSrc from './style/images/wait.png'
import rejectSrc from './style/images/reject.png'
export interface MDFResultProps {
  mode?: string
  message?: string
  style?: React.CSSProperties
}
const data = [
  { value: 'success', text: '申请成功', src: successSrc },
  { value: 'wait', text: '正在审批,请稍等', src: waitSrc },
  { value: 'reject', text: '被驳回', src: rejectSrc }
]
class MDFResult extends React.Component<MDFResultProps> {
  render () {
    const { mode, message } = this.props
    let msg = message
    let src = ''
    data.filter((item) => {
      if (item.value === mode) {
        msg = item.text
        src = item.src
      }
    })
    return (
      <Result className='feedBack-page'
        img={<img src={src} alt="" />}
        message={message || msg}
        style={{
          ...this.props.style
        }}
      />
    )
  }
}
export default MDFResult
