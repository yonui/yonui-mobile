import React, { Component } from 'react'
import classnames from 'classnames'
import { Icon } from 'antd-mobile'
interface CardBoxGroupProps extends React.defaultProps {
  splitLine?: boolean
}
// font_304307_jezcocolkm
export default class CardBoxGroup extends Component<CardBoxGroupProps> {
  static defaultProps = {
    splitLine: false
  }

  componentDidMount () {
    // const script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.async = true
    // script.src = 'https://at.alicdn.com/t/font_304307_jezcocolkm.js'
    // document.head.appendChild(script)
    // this.forceUpdate()
  }

  getChildren = (node: React.ReactNode, select?: boolean) => {
    if (!node) return
    if (Array.isArray(node)) {
      return node.map((item, index) => (
        <div className='card-box-group-item' key={index}>
          { select && <div className='card-box-group-item-icon'><Icon type='icon-pass-c'/></div>}
          {item}
        </div>)
      )
    }
    return <div className='card-box-group-item' >
      { select && <div className='card-box-group-item-icon'><Icon type='icon-pass-c'/></div>}
      {node}
    </div>
  }

  render () {
    const { children, splitLine, className, style } = this.props
    const cls = classnames('card-box-group', className, {
      'card-box-group-split-line': splitLine
    })
    // const childrenNode = this.getChildren(children, status !== 'default')
    return (
      <div className={cls} style={style}>
        { children }
      </div>
    )
  }
}
