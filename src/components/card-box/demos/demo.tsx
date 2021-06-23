/**
 * @name: Cardbox
 * @description: 卡片容器
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import List from '../../simple-list'
import '../../simple-list/style/index.less'
import '../style';
import './demo.less';
const children = [<MyComponent onDelete={()=>{console.log('x')}}  label='标题'  displayStyle='extra'>
<div>123123123</div>
</MyComponent>,
<MyComponent splitLine={true} onDelete={()=>{console.log('x')}}  label='标题' displayStyle='detail' selected showTitleExtraIcon>
<div>123123123</div>
</MyComponent>,
<MyComponent onDelete={()=>{console.log('x')}}  label='标题' displayStyle='slideable'>
<div>123123123</div>
</MyComponent>,
<MyComponent onDelete={()=>{console.log('x')}}  label='标题' displayStyle='editable'>
<div>444444444444</div>
</MyComponent>]
export default class Demo extends Component {
    render() {
        return (
            <List dataSource={children} renderRow={(item)=>item} pullToRefresh={false} />
        )
    }
}
