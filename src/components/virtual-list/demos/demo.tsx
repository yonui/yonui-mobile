/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style';
import './demo.less';

export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      dataSource : Array(20).fill('').map((item, index) => {
        return ({
          name: `name${index}`,
          age: index
        })
      })
    }
  }
    onReachFooter = () => {
    console.log('onReachFooter')
    fetch('https://mock.yonyoucloud.com/mock/689/conference_room/ordinary/showRooms').then((...res)=> {
      console.log(res)
      this.setState({
        dataSource : this.state.dataSource.concat(Array(10).fill('').map((item, index) => {
          return ({
            name: `name${index}`,
            age: index
          })
        }))
      })
    })
  }

  rowRender = ( item: any, param: any) => {
    const time = Date.now()
    // console.log(item)
    return <div>
      <div>{item?.name}</div>
      <div>{param?.index}</div>
      <div>{time}</div>
    </div>
  }
    render() {
      // console.log(dataSource)
        return (
          <MyComponent rowRender={this.rowRender} dataSource={this.state.dataSource} onReachFooter={this.onReachFooter}/>
        )
    }
}
