/**
 * @name: Search
 * @description: 搜索框
 */
import React, { Component } from 'react'
import Search from '../index'
import Button from '../../button'
import '../style'
import './demo.less'
import '../../button/style/index'
export default class Demo1 extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: '123',
      defaultValue: '456',
      placeholder: 'jajja'
    }
  }
  change = (value: any) => {
    console.log(value)
    this.setState({
      [value]: 'hahah'
    })
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <Search value={this.state.value} defaultValue={this.state.defaultValue} placeholder={this.state.placeholder} onSubmit={(v)=>{console.log(v)}}/>
        <Button onClick={() => { this.change('value') }}>改变Value</Button>
        <Button onClick={() => { this.change('defaultValue') }}>改变DefaultValue</Button>
        <Button onClick={() => { this.change('placeholder') }}>改变PlaceHolder</Button>
      </div>
    )
  }
}
