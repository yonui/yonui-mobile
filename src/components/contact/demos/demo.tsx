/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component, useState } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
// import Vconsole from 'vconsole'
// new Vconsole()
// export default class Demo extends Component {
//     render() {

//         return (
//           <div>
//             <MyComponent label='手机' singleLine={true} mode='mobilephone' area={false} required/>
//             <MyComponent label='手机' singleLine={false} mode='mobilephone' area={false} />
//             <MyComponent label='手机' singleLine={true} mode='mobilephone' area={true} />
//             <MyComponent label='手机' singleLine={false} mode='mobilephone' area={true} value = '86=中国=18811112222' onChange={()=>{}}/>
//             <MyComponent singleLine={true} mode='telephone' area={false} />
//             <MyComponent singleLine={false} mode='telephone' area={false} />
//             <MyComponent singleLine={true} mode='telephone' area={true} />
//             <MyComponent singleLine={false} mode='telephone' area={true} />
//             <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={false} />
//             <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={false} />
//             <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={true} />
//             <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={true} />
//           </div>

//         )
//     }
// }


export default function Demo1(props) {
  const [value, setValue] = useState('')
  const [nValue, setNValue] = useState('18855556789')
  const [eValue, setEvalue] = useState('333@yonyou.com')
  const [esValue, setEsvalue] = useState('jiangzyb@yonyou.com')
  const [telValue,setTelValue] = useState('{"T":"62148987","L":"3479"}')
  return(
  <div>
    <MyComponent label='手机' singleLine={false} mode='mobilephone' area={true} value = {value} onChange={setValue}/>
    <MyComponent label='手机' singleLine={true} mode='mobilephone' value = {nValue} onChange={setNValue}/>
    <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={false} value = {eValue} onChange={setEvalue}/>
    <MyComponent label='邮箱' singleLine={true} mode='email' isSelect={true} value = {esValue} onChange={setEsvalue}/>
    <MyComponent label='电话' singleLine={true} mode='telephone' isSelect={true} value = {telValue} onChange={setTelValue}/>
  </div>
  )
}
