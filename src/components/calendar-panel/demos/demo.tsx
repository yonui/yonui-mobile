/**
 * @name: Demo Name
 * @description: Demo Description
 */
 import React, { Component } from 'react'
 import MyComponent from '../index'
 import '../style'
 import './demo.less'
 import { dateFormat } from '../../_utils'
 const now = new Date()
 
 const extra = {
   '2021/06/26':{info:'4h', disable: true},
   '2021/06/27':{info:'4h'},
   '2021/06/28':{info:'4h'},
   '2021/07/27':{info:'4h'},
   '2021/07/28':{info:'4h'}
 }
 export default class Demo1 extends Component<any, any> {
   originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
   constructor (props: any) {
     super(props)
     this.state = {
       en: false,
       show: false,
       config: {},
       extra: {},
       pickTime: false
     }
   }
 
   componentDidMount() {
     setTimeout(() => {
       this.setState({
         extra: extra,
         defaultValue: [new Date(now), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)]
       })
     }, 1000)
   }

   onClickDay = (res) => {
     console.log('res', res)
   }

   // onPull = (monthStart, monthNow) => {
   //     console.log('获取extra', monthStart, monthNow)
   //     setTimeout(() => {
   //       this.setState({
   //         extra: {'2021/8/2': {info: '新数据'}},
   //         // defaultDate: new Date('2021/8/8')
   //        })
   //     }) 
   // }
 
   render () {
     return (
       <div style={{ height: '100%' }} >
         <MyComponent
           visible={true}
           // defaultDate={now}
           // defaultValue={this.state.defaultValue}
           defaultDate={this.state.defaultDate || now}
           dateExtra={this.state.extra}
           onClickDay={this.onClickDay}
           // onPull={this.onPull}
           initalMonths={6}
           maxDate={'2021-8-5'}
           hintDays={["2021-6-3","2021-6-4"]}
         />
       </div>
     )
   }
 }
 