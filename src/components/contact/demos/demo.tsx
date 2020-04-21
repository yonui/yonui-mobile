/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
  onChange = (val:string) => {
    console.log(val)
  }
    render() {
        return (
          <div>
            <MyComponent label='手机' singleLine={true} mode='mobilephone' area={false} onChange={this.onChange}/>
            <MyComponent label='手机' singleLine={false} mode='mobilephone' area={false} onChange={this.onChange}/>
            <MyComponent label='手机' singleLine={true} mode='mobilephone' area={true} onChange={this.onChange}/>
            <MyComponent label='手机' singleLine={false} mode='mobilephone' area={true} onChange={this.onChange}/>
            <MyComponent singleLine={true} mode='telephone' area={false} />
            <MyComponent singleLine={false} mode='telephone' area={false} onChange={this.onChange}/>
            <MyComponent singleLine={true} mode='telephone' area={true} onChange={this.onChange}/>
            <MyComponent singleLine={false} mode='telephone' area={true} onChange={this.onChange}/>
            <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={false} onChange={this.onChange}/>
            <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={false} onChange={this.onChange}/>
            <MyComponent label='邮箱' singleLine={true} mode='email' isSelectEmail={true} onChange={this.onChange}/>
            <MyComponent label='邮箱' singleLine={false} mode='email' isSelectEmail={true} onChange={this.onChange}/>
          </div>

        )
    }
}
