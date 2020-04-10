import React, { Component } from 'react'
import classnames from 'classnames'
interface ListItemWrapperProps extends React.defaultProps{
  splitLine?: boolean
}
export default class ListItemWrapper extends Component<ListItemWrapperProps> {
  render () {
    const { splitLine = true, className, style, ...other } = this.props
    const cls = classnames('list-item-wrapper', className, {
      'list-item-wrapper-split': splitLine
    })
    return (
      <div className={cls} style={style} {...other}>
        {this.props.children}
      </div>
    )
  }
}
