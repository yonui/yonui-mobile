import React, { Component } from 'react'
import { SwipeAction, Icon } from 'antd-mobile'
import Wrapper from '../list-item-wrapper'
import deleteImg from './style/delete.png'
import classnames from 'classnames'
interface CardBoxProps extends React.defaultProps{
  text: '删除'
  // onPress?: () => void
  onDelete?: () => void
  label?: string
  footer?: string
  rightStyle?: React.CSSProperties
  viewStatus?: 'default' | 'select' | 'selected' | 'detail' | 'browse'
}

export default class CardBox extends Component<CardBoxProps> {
  static defaultProps = {
    text: '删除',
    viewStatus: 'default',
    label: '明细'
  }

  componentDidMount () {
    // const script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.async = true
    // script.src = 'https://at.alicdn.com/t/font_304307_jezcocolkm.js'
    // document.head.appendChild(script)
    // this.forceUpdate()
  }

  render () {
    const { text, onDelete, rightStyle, style, className, children, viewStatus, label, footer, ...other } = this.props
    const right = [{
      text, onPress: onDelete, style: { width: '25vw', ...rightStyle }, className: 'yonui-card-box-btn'
    }]
    const cls = classnames(className, 'yonui-card-box', `yonui-card-box-${viewStatus}`)
    const footerEle = footer ? <Wrapper label={footer} splitLine={false} singleLine labelStyle={{ color: '#e14c46' }}>
      <Icon type='right' color='#e14c46'/>
    </Wrapper> : null
    let content
    switch (viewStatus) {
      case 'select':
      case 'selected': {
        const iconType = viewStatus === 'selected' ? 'icon-pass-c' : 'icon-done'
        content = (<React.Fragment>
          <div className='yonui-card-box-icon'>
            <Icon type={iconType} />
          </div>
          <div className='yonui-card-box-swipe'>
            {children}
          </div>
        </React.Fragment>)
        break
      }
      case 'detail': {
        content = (<React.Fragment>
          <div className='yonui-card-box-swipe'>
            <Wrapper className='yonui-card-box-wrapper' label={label} labelCls='yonui-card-box-title' singleLine>
              <img className='yonui-img-icon small' src={deleteImg} onClick={onDelete}/>
            </Wrapper>
            {children}
          </div>
        </React.Fragment>)
        break
      }
      case 'default':
      default: {
        content = (<SwipeAction right={right} className='yonui-card-box-swipe' autoClose>
          {children}
          {footerEle}
        </SwipeAction>)
        break
      }
    }
    return (
      <div className={cls} style={style} {...other}>
        {content}
      </div>
    )
  }
}
