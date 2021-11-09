import React, { useState } from 'react'

export default (props) => {
  const { max, min, step, defaultValue = 0, style = {} } = props;

  const maxNum = Number(max) || 100
  const minNum = Number(min) || 0
  const stepNum = Number(step) || 1
  const defaultValueNum = Number(defaultValue) || 0

  const [num, setNum] = useState(defaultValueNum)
  // 加
  const onPlus = () => {
    setDecimal(true)
  }
  // 减
  const onMinus = () => {
    setDecimal(false)
  }

  // 小数处理
  const setDecimal = (isPlus) => {
    const numLen = String(num).split('.').pop().length;
    const newNumlen = String(stepNum).split('.').pop().length;
    const lenMax = Math.max(numLen, newNumlen);
    let newNum = Math.min(num + stepNum, maxNum);
    if (!isPlus) {
      newNum = Math.max(num - stepNum, minNum);
    }
    if (lenMax > 0) {
      if (isPlus) {
        newNum = Math.round(num * Math.pow(10, lenMax)) + Math.round(stepNum * Math.pow(10, lenMax));
        newNum = Math.min(newNum / Math.pow(10, lenMax), maxNum)
      } else {
        newNum = Math.round(num * Math.pow(10, lenMax)) - Math.round(stepNum * Math.pow(10, lenMax));
        newNum = Math.max(newNum / Math.pow(10, lenMax), minNum)
      }
    }
    setNewNum(newNum)
  }

  // 输入修改
  const onChange = (e) => {
    setNum(e.target.value)
  }
  // 焦点失去
  const onBlur = () => {
    let finalValue = Math.min(num, maxNum)
    finalValue = Math.max(finalValue, minNum)
    setNewNum(finalValue)
  }
  // 处理回调
  const setNewNum = (newNum) => {
    const changNum = newNum;
    setNum(changNum)
    props.onChange && props.onChange(changNum)
  }
  let minClassname = 'stepper-minus-wrapper';
  let maxClassname = 'stepper-plus-wrapper';
  if (num <= minNum) {
    minClassname = `${minClassname}-disabled`
  }
  if (num >= maxNum) {
    maxClassname = `${maxClassname}-disabled`
  }
  const { textDecoration } = style
  delete style.textDecoration;
  return (
    <div className='stepper-wrapper' style={style}>
      <div className={minClassname}>
        <span onClick={onMinus}>-</span>
      </div>
      <div className='stepper-input-wrapper' style={{ textDecoration: textDecoration }}>
        <input
          className='stepper-input'
          type='number'
          value={num}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
      <div className={maxClassname}>
        <span onClick={onPlus}>+</span>
      </div>
    </div>
  )
}
