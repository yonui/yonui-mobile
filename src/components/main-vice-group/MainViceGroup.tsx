
import React, { Component } from 'react'
import classnames from 'classnames'

interface MainViceGroupProps {
  children?: JSX.Element[] | JSX.Element
  className?: string
  style?: React.CSSProperties
}

export default class MainViceGroup extends Component<MainViceGroupProps> {
  state = {

  }

  render () {
    const { children, className, style } = this.props
    const cls = classnames([className, 'am-c-group-container'])
    return (
      <div style={style} className={cls}>
        {children || ''}
      </div>
    )
  }
}
