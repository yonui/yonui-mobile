/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: 'des1'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: 'des2'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: 'des3'
  }
]

export default class Demo1 extends React.Component {
  constructor (props) {
    super(props)
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID]
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID]
    const dataSource = new MyComponent.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      dataSource
    }
  }

  render () {
    return (
      <MyComponent
        ref={el => this.lv = el}
        value={data}
        dataSource={this.state.dataSource}
        footerContent={''}
        initialListSize={2}
        footerContent={"加载中"}
      >

        <div>这是第一行</div>
        <div>
          <h3>这里第二行title</h3>
          <span>这是第二行数据</span>
        </div>
        <div>这是第三行</div>
      </MyComponent>
    )
  }
}
