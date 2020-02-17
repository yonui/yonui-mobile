/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import '../style';
import './demo.less';

export default class Demo1 extends Component {
    render() {
        return (
           <div className="notice-demo">
               <span>mode='link'</span>
               <MyComponent mode='link' >防范疫情，2月5日～2月7日远程办公</MyComponent>
               <span>mode="closable"</span>
               <MyComponent mode="closable" icon={null} >防范疫情，2月5日～2月7日远程办公</MyComponent>
               <span>mode='modal'</span>
               <MyComponent mode='modal' >防范疫情，2月5日～2月7日远程办公</MyComponent>
           </div>
        )
    }
}
