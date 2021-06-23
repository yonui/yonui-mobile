/**
 * @name: Rate
 * @description: 评分
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const onChange = (v: any) => {
  console.log(v)

}
export default class Demo extends Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      v: 1
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        v: 4
      })
    }, 4000);
  }

    render() {
        return (
            <MyComponent count={5} allowHalf value={this.state.v} onChange={onChange}/>
        )
    }
}
