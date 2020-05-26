import React from 'react'
// import classnames from 'classnames'

export default class Divider extends React.Component<any, any> {
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
    const { prefixCls, type, width, color } = this.props
    // const wrapCls = classnames(prefixCls, `${prefixCls}-${type}`)
    return (
      <div
        className={prefixCls}
        style={{
          color
        }}>
        <span
          className='before'
          style={{
            borderTopWidth: `${width}px`,
            borderTopStyle: type
          }} />
        {this.renderContent()}
        <span
          className='after'
          style={{
            borderTopWidth: `${width}px`,
            borderTopStyle: type
          }} />
      </div>
    )
  }
}
