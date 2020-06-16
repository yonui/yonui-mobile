import React, { Component } from 'react'
import { SwipeAction, Icon } from 'antd-mobile'
import Wrapper from '../list-item-wrapper'
import deleteImg from './style/delete.png'
import classnames from 'classnames'
interface CardBoxProps extends React.defaultProps{
  btnText: '删除'
  onDelete?: () => void
  label?: string
  rightStyle?: React.CSSProperties
  viewStatus?: 'default' | 'select' | 'selected' | 'detail' | 'browse'
  displayStyle?: 'normal' | 'detail' | 'slideable' | 'extra'
  selected?: boolean
  showDeleteIcon?: boolean
  showTitleExtraIcon?: boolean
}
interface CardBoxState {
  showMore: boolean
}
export default class CardBox extends Component<CardBoxProps, CardBoxState> {
  static defaultProps = {
    btnText: '删除',
    viewStatus: 'default',
    label: '明细',
    showDeleteIcon: true,
    showTitleExtraIcon: false
  }

  constructor (props) {
    super(props)
    this.state = {
      showMore: false
    }
  }

  componentDidMount () {
    // const script = document.createElement('script')
    // script.type = 'btnText/javascript'
    // script.async = true
    // script.src = 'https://at.alicdn.com/t/font_304307_jezcocolkm.js'
    // document.head.appendChild(script)
    // this.forceUpdate()
  }

  onChangeShowMore = (showMore: boolean) => {
    return () => {
      this.setState({
        showMore
      })
    }
  }

  render () {
    const { btnText, onDelete, rightStyle, style, className, children, viewStatus, label, displayStyle, selected, showTitleExtraIcon, showDeleteIcon, ...other } = this.props
    const { showMore } = this.state
    const right = [{
      text: btnText, onPress: onDelete, style: { width: '25vw', ...rightStyle }, className: 'yonui-card-box-btn'
    }]
    const cls = classnames(className, 'yonui-card-box', `yonui-card-box-${viewStatus}`)
    let content
    const iconType = selected ? 'icon-pass-c' : 'icon-done'
    switch (displayStyle) {
      case 'detail': {
        const wrapperCls = classnames('yonui-card-box-wrapper', { 'yonui-card-box-wrapper-extra-icon': showTitleExtraIcon })
        content = (<>
          <div className='yonui-card-box-swipe' style={style}>
            <Wrapper className={wrapperCls} label={label} labelCls='yonui-card-box-title' singleLine>
              {showDeleteIcon && <img className='yonui-img-icon small' src={deleteImg} onClick={onDelete} />}
            </Wrapper>
            {children}
          </div>
        </>)
        break
      }
      case 'slideable': {
        content = (<SwipeAction right={right} className='yonui-card-box-swipe' autoClose style={style}>
          {children}
        </SwipeAction>)
        break
      }
      case 'extra': {
        content = (<>
          <div className='yonui-card-box-swipe extra' style={style}>
            {showMore && children}
            {showMore
              ? <div onClick={this.onChangeShowMore(false)} className='yonui-card-box-extra'>收起<Icon type='up' /></div>
              : <div onClick={this.onChangeShowMore(true)} className='yonui-card-box-extra'>查看更多<Icon type='down' /></div>}
          </div>
        </>)
        break
      }
      case 'normal':
      default: {
        content = (<>
          <div className='yonui-card-box-swipe' style={style}>
            {children}
          </div>
        </>)
        break
      }
    }
    return (
      <div className={cls} {...other}>
        <div className='yonui-card-box-icon'>
          <Icon type={iconType} />
        </div>
        {content}
      </div>
    )
  }
}
