import React, { Component } from 'react'
import { SwipeAction, Icon } from 'antd-mobile'
import classnames from 'classnames'
interface CardBoxProps extends React.defaultProps{
  text: '删除'
  onPress?: () => void
  rightStyle?: React.CSSProperties
  viewStatus?: 'default' | 'select' | 'selected'
}

export default class CardBox extends Component<CardBoxProps> {
  static defaultProps = {
    text: '删除',
    viewStatus: 'default'
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
    const { text, onPress, rightStyle, style, className, children, viewStatus, ...other } = this.props
    const right = [{
      text, onPress, style: rightStyle, className: 'yonui-card-box-btn'
    }]
    const cls = classnames(className, 'yonui-card-box', `yonui-card-box-${viewStatus}`)
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
      case 'default':
      default: {
        content = (<SwipeAction right={right} className='yonui-card-box-swipe' autoClose>
          {children}
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
