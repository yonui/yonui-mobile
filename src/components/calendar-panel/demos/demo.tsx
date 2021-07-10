/**
 * @name: CalendarPanel
 * @description: 日历面板
 */
 import React, { Component } from 'react'
 import MyComponent from '../index'
 import '../style'
 import './demo.less'
 
 export default class Demo1 extends Component<any, any> {
   render () {
     return (
       <div style={{ height: '100%' }} >
         <MyComponent />
       </div>
     )
   }
 }
