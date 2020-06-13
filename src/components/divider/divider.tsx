import React, { defaultProps } from 'react'
// import classnames from 'classnames'
interface DividerProps extends defaultProps {
  content?: string
  prefixCls?: string
  width?: number
  color?: string
  type?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none'
}
export default class Divider extends React.Component<DividerProps, any> {
  static defaultProps = {
    prefixCls: 'mdf-divider',
    content: '',
    type: 'solid',
    width: 1,
    color: '#d0d0d0'
  }

  renderContent = () => {
    const { content } = this.props
    return content ? <span className='content'>{content}</span> : ''
  }

  render () {
    const { prefixCls, style, width, type, color, nid, uitype } = this.props
    // const wrapCls = classnames(prefixCls, `${prefixCls}-${type}`)
    const _style = { ...style, color }
    const boderStyle: React.CSSProperties = {
      borderTopWidth: `${width}px`,
      borderTopStyle: type
    }
    return (
      <div
        className={prefixCls}
        style={_style}
        nid={nid}
        uitype={uitype}
      >
        <span className='before' style={boderStyle} />
        {this.renderContent()}
        <span
          className='after'
          style={boderStyle} />
      </div>
    )
  }
}
