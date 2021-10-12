import React, { useState } from 'react'

export default () => {
  const step = 1
  const min = 0
  const max = 99
  const cDefaultValue = 0
  const [num, setNum] = useState(cDefaultValue)

  const onPlus = () => {
    setNum(num + step)
  }

  const onMinus = () => {
    setNum(num - step)
  }

  const onChange = (e) => {
    console.log(e)
    setNum(e.target.value)
  }

  const onBlur = () => {
    let finalValue = Math.min(num, max)
    finalValue = Math.max(finalValue, min)
    setNum(finalValue)
  }

  return (
    <div className='stepper-wrapper'>
      <div className='stepper-minus-wrapper'>
        <span onClick={onMinus}>-</span>
      </div>
      <div className='stepper-input-wrapper'>
        <input
          className='stepper-input'
          type='number'
          value={num}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
      <div className='stepper-plus-wrapper'>
        <span onClick={onPlus}>+</span>
      </div>
    </div>
  )
}
