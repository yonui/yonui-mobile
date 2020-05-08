/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';
const URL = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588862607147&di=93be0d79dcadf1712fb9a80bbeb6eccf&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181025%2F19%2F1540467459-SyjbRrcmoA.jpg'
export default class Demo extends Component {
  constructor (props: any) {
    super(props)
    this.state = {
      size: 'sm'
    }
  }

  onClick = () => {
    this.setState({
      size: 'lg'
    })
  }
    render() {
        return (
            [<MyComponent url={URL} size='lg' borderRadius={50} showLabel label='张学友'/>,
              <MyComponent url={URL}  size={this.state.size} borderRadius={50}/>,
              <button onClick={this.onClick}>click</button>]
        )
    }
}
