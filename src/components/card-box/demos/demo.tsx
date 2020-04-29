/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import List from '../../simple-list'
import '../../simple-list/style/index.less'
import '../style';
import './demo.less';
const children = [<MyComponent onDelete={()=>{console.log('x')}}  label='标题' >
<div>123123123</div>
</MyComponent>,
<MyComponent onDelete={()=>{console.log('x')}}  label='标题' displayStyle='detail' selected>
<div>123123123</div>
</MyComponent>,
<MyComponent onDelete={()=>{console.log('x')}}  label='标题' displayStyle='slideable'>
<div>123123123</div>
</MyComponent>]
export default class Demo extends Component {
    render() {
        return (
            <List dataSource={children} renderRow={(item)=>item} pullToRefresh={false} />
        )
    }
}
