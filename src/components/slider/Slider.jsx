import React from 'react'
import { Slider } from 'antd-mobile'
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

function SliderControl (props) {
  // eslint-disable-next-line react/prop-types
  const { max, min, step, defaultValue } = props
  const maxNum = Number(max) || 100
  const minNum = Number(min) || 0
  const stepNum = Number(step) || 1
  const defaultValueNum = Number(defaultValue) || 0
  return (<Slider {...props} defaultValue={defaultValueNum} max={maxNum} min={minNum} step={stepNum} />)
}

export default SliderControl
