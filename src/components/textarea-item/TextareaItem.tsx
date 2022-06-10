import React, { Component } from 'react'
import { TextareaItem } from 'antd-mobile'
import { TextAreaItemPropsType } from 'antd-mobile/lib/textarea-item/PropsType'
import Wrapper, { ListItemWrapperProps, getListItemProps } from '../list-item-wrapper'
import classnames from 'classnames'
interface TextareaProps extends TextAreaItemPropsType, React.defaultProps, ListItemWrapperProps{
  label?: string
  required?: boolean
  maxLength?: number
  splitLine?: boolean
  errorText?: string
  disabled?: boolean
  bCanModify?: boolean
  mReadOnly?: boolean
  visible?: boolean
  isHTML?: boolean
}
interface TextareaState {
  requiredError: boolean
  _value: string
}
export default class MyComponent extends Component<TextareaProps, TextareaState> {
  static defaultProps = {
    errorText: ''
  }

  constructor (props: TextAreaItemPropsType) {
    super(props)
    this.state = {
      _value: this.props.defaultValue || '',
      requiredError: false
    }
  }

  componentDidMount () {
    this.addClickToImg()
  }

  shouldComponentUpdate () {
    this.addClickToImg()
    return true
  }

  addClickToImg = () => {
    const { isHTML } = this.props
    try {
      if (isHTML) {
        const images = document.querySelectorAll('.html-content img')
        for (let i = 0; i < images.length; i++) {
          images[i].onclick = (e) => {
            console.log(e.target.currentSrc)
            window?.mtl?.previewImage({
              current: e.target.currentSrc,
              urls: [e.target.currentSrc],
              success: function (res) {
                console.log('success', res)
              },
              fail: function (err) {
                console.log('err', err)
              }
            })
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  _onChange = (currentValue) => {
    const { onChange, afterChange } = this.props
    const val = afterChange ? afterChange(currentValue) : currentValue
    onChange?.(val)
    this.setState({
      _value: val
    })
  }

  _onBlur = (value: any) => {
    const { required, onBlur } = this.props
    this.setState({
      requiredError: !!required && !value
    })
    onBlur && onBlur(value)
  }

  getVal = () => {
    const { defaultValue, value } = this.props
    const { _value } = this.state
    if (value === '' && (defaultValue === '' || defaultValue !== _value)) return ''
    return value?.toString() || _value
  }

  getHTMLElement = () => {
    const { value } = this.props
    try {
      const createElement = (<div dangerouslySetInnerHTML={{ __html: value }} />)
      const newElement = React.cloneElement(createElement, { className: 'html-content' })
      return newElement
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { label, className, mReadOnly, style, nid, uitype, required, maxLength, splitLine, rows = 3, isHTML, visible = true, singleLine, ...other } = this.props
    // other.disabled = other.disabled || other.mReadOnly || (other.bCanModify !== undefined ? !other.bCanModify : other.bCanModify)
    const { requiredError } = this.state
    const cls = classnames(className, 'yonui-textarea')
    const wrapperProps = getListItemProps(this.props, {
      className: cls,
      error: requiredError,
      singleLine: isHTML ? false : singleLine
    })
    other.value = this.getVal()
    if (!visible) return null
    return (
      <Wrapper {...wrapperProps}>
        {!isHTML && <TextareaItem
          editable={!mReadOnly}
          rows={rows}
          {...other}
          count={maxLength}
          onBlur={this._onBlur}
          onChange={this._onChange}
        />}
        {isHTML && this.getHTMLElement()}
      </Wrapper>
    )
  }
}
