
import React, { Component } from 'react'
import classnames from 'classnames'
/**
 * todo
 * onAfterChange
 * marks
 * dots
 * included
 * maximumTrackStyle
 * minimumTrackStyle
 * handleStyle
 * trackStyle
 * railStyle
 */
interface DivProps {
  nowrap?: boolean
  type?: 'normal' | 'panel'
  children?: JSX.Element[] | JSX.Element
  className?: string
  style?: React.CSSProperties
}

// function DivControls (props: { nowrap?: boolean, children?: any, type?: 'normal'|'panel' }) {
//   return <div className={`am-div-container ${props.nowrap ? 'nowrap' : ''} ${props.type || 'normal'}`}>{props.children || ''}</div>
// }
export default class DivControl extends Component<DivProps> {
  render () {
    const { nowrap, type, children, className, style } = this.props
    const cls = classnames(className, 'am-div-container', `${type || ''}`, {
      nowrap: nowrap
    })
    return (
      <div style={style} className={cls}>
        {children || ''}
      </div>
    )
  }
}
