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
   '2021/06/26':{info:'4h'},
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

   onTouchStart = (e) => {
    const touch = e.touches[0]
    const startY = touch.pageY
    console.log(startY)
   }

   onTouchMove = (e) => {
     console.log('move')
   }

   onTouchEnd = (e) => {
     const wrapper = document.querySelector('.wrapper')
     console.log('moveEnd', wrapper.scrollTop)
     this.setState({
       extra: {'2021/08/28':{info:'4h'}}
     })
   }
 
   render () {
     return (
       <div style={{ height: '100%' }} 
       onTouchStart={this.onTouchStart}
       onTouchMove={this.onTouchMove}
       onTouchEnd={this.onTouchEnd}
       >
         <MyComponent
           visible={true}
           // defaultDate={now}
           defaultValue={this.state.defaultValue}
           dateExtra={this.state.extra}
           onClickDay={this.onClickDay}
           initalMonths={6}
         />
       </div>
     )
   }
 }
 